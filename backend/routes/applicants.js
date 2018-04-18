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


module.exports = router ;