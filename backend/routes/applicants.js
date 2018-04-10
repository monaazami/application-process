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

router.get('/', (req,res) => {
	res.json([{
		id: '3432',
		name: 'John Smith',
		email: 'johnsmith@gmail.com',
		city: 'London',
		tel: '98483247282',
		status: 'Asylum seeker',
		country: 'Eritrea',
		experience: 'very little',
		itAcess: true,
		hearAbout: 'website'
	},
	{
		id: '3433',
		name: 'John Smith',
		email: 'johnsmith@gmail.com',
		city: 'London',
		tel: '98483247282',
		status: 'Asylum seeker',
		country: 'Eritrea',
		experience: 'very little',
		itAcess: true,
		hearAbout: 'website'
	},
	{
		id: '3434',
		name: 'John Smith',
		email: 'johnsmith@gmail.com',
		city: 'London',
		tel: '98483247282',
		status: 'Asylum seeker',
		country: 'Eritrea',
		experience: 'very little',
		itAcess: true,
		hearAbout: 'website'
	}]);
});

router.get('/:id', (req,res) => {
	res.json({
		id: 3432,
		name: 'Exact Exact',
		email: 'exact@gmail.com',
		city: 'London',
		tel: '98483247282',
		status: 'Asylum seeker',
		country: 'Eritrea',
		experience: 'very little',
		itAcess: true,
		hearAbout: 'website'
	});
});



module.exports = router ;