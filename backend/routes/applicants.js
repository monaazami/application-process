const express = require('express');
const sqlite = require('sqlite3').verbose();
const router = require('express').Router();

const filename = './database/db.sqlite';
let db = new sqlite.Database(filename, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory application database.');
});

//GET ALL APPLICANTS
router.get('/', (req,res) => {
	let sql = 'select * from applicants';
	db.all(sql, [], (err, rows) => {
		res.status(200).json({
			applicants: rows
		});
	});
});

// get one applicant through his id
router.get('/:id', function (req, res) {
	let sql = 'select * from applicants where id = ?'; 
 	db.all(sql, [Number(req.params.id)], (err, rows) => {
    if (typeof (Number(req.params.id)) !== 'number' || rows.length === 0) {
      res.send('400 - BAD REQUEST');
    } else {
      res.status(200).json({
        applicants: rows
 			});
  	};  
  })
});

// add new applicant

router.post('/', (req, res) => {
	const { fullName, email, city, tel, country, experience, itAccess, hearAbout } = req.body;

	// convert req.body.status to boolean use 1 for true and 0 for false 
	let newStatus;
	if (req.body.status === 'Yes') {
		newStatus = 1;
	} else {
		newStatus = 0;
	}
	
	db.run(`INSERT INTO applicants (fullName, email, city, tel, status, country, experience, itAccess, hearAbout) 
	Values (?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
	[fullName, email, city, tel, newStatus, country, experience, itAccess, hearAbout], (err) =>{
	if (err) {
		console.log(err)
		return res.send('400 - BAD REQUEST').status(400);
  }
	}); 
});

module.exports = router ;