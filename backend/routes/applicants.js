const router = require('express').Router();
const sqlite = require('sqlite3').verbose();

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

router.get('/steps', (req,res) => {
	let sql = 'select * from steps';
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

// add new applicant route
router.post('/', (req, res) => {
	const { fullName, email, city, tel, status, country, experience, itAccess, hearAbout } = req.body;

	db.run(`INSERT INTO applicants
			(fullName, email, city, tel, status, country, experience, itAccess, hearAbout)
				VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, 
					[fullName, email, city, tel, status, country, experience, itAccess, hearAbout], function(err) {
						if (err) {
							return res.send('400 - BAD REQUEST').status(400);
						}
						return res.json({
							id: this.lastID
					})
	}); 
});

// insert link submitted by applicant 
router.post('/steps-submitted/:id', (req, res) => {
	db.run(`INSERT INTO steps (applicant_id, step_number, status, url) VALUES (?, ?, ?, ?)`,
		[req.params.id, Number(req.body.step_number), req.body.status, req.body.url],
			function(err) {
				if (err) {
					console.log(err.message)
					return res.send('400 - BAD REQUEST').status(400);
				}
				return res.json({
					id: this.lastID
		}) 
})
})


module.exports = router ;
