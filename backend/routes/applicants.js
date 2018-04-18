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


// get all applicants inside the database
router.get('/', (req,res) => {
	var sql = 'select * applicants';
  db.all(sql, [], (err, rows) => {
    console.log((rows.length))
    res.status(200).json({
      applicants: rows
    });
  });
});


// get one applicant through his id
router.get('/:id', function (req, res) {
  var sql = 'select * from applicants where id = ?';
  db.all(sql, [Number(req.params.id)], (err, rows) => {
    if (typeof (Number(req.params.id)) !== 'number' || rows.length === 0) {
      console.log('error');
      res.send('400 - BAD REQUEST');
    } else {
      console.log(rows)
      res.status(200).json({
        applicants: rows
      });
    };
  })
});


// add new applicant
router.post("/", (req, res) => {
	 db.run(`INSERT INTO into applicants (fullName, email, tel, status, country, experience, itAcess, hearAbout) Values (?, ?, ?, ?, ?, ?, ?, ?)`, [req.body.fullName, req.body.email, req.body.tel, req.body.status, req.body.country, req.body.experience, req.body.itAccess, req.body.hearAbout], (req, res) =>{
		if (err) {
      return console.log(err.message);
    }
		res.status(200).json({
			where: 'From post request'
	 })

});
  
});



module.exports = router ;