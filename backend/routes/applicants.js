const express = require('express');
const sqlite = require('sqlite3').verbose();
const router = require('express').Router();

const fakeApplicants = require('../fakeData/fakeApplicant.json');

const filename = './database/db.sqlite';
let db = new sqlite.Database(filename, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory application database.');
});

// get all applicants
router.get('/', (req,res) => {
	res.status(200).json({
		fakeApplicants: fakeApplicants 
	});
});

// get one applicant
router.get('/:id', (req,res) => {
	if (req.params.id){
		res.status(200).json({
		fakeApplicant:fakeApplicants.filter(fakeApplicant => fakeApplicant.id === (req.params.id))
		});
	  }else {
		res.status(200).json({
		  fakeApplicants
		});
	  }
});

// add new applicant
router.post("/", (req, res) => {
	db.run(`INSERT INTO applicants (fullName, email, tel, status, country, experience, itAccess, hearAbout) VALUES(?, ?, ?, ?, ?, ?, ?, ?)`,
	 [req.body.fullName, req.body.email, req.body.tel, req.body.status, req.body.country, req.body.experience, req.body.itAccess, req.body.hearAbout], function(err) {
    if (err) {
      return console.log(err.message);
    }
	res.status(200).json({
		where: 'From post request'
});
  
});


module.exports = router ;