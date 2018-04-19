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

// add new applicant
router.post("/", (req, res) => {
	
});

// send email to applicants
router.post('/', (req, res) => {

})

module.exports = router ;