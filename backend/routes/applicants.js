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
	console.log(req.body);
	const { fullName, email, city, tel, country, experience, itAccess, hearAbout } = req.body;
	let status;
	if (req.body.status === 'Yes') {
		status = true;
	} else {
		status = false;
	}
	console.log(hearAbout);
	db.run(`INSERT INTO applicants (fullName, email, city, tel, status, country, experience, itAccess, hearAbout) Values (?, ?, ?, ?, ?, ?, ?, ?, ?)`, [fullName, email, tel, status, country, experience, itAccess, hearAbout], (err) =>{
	if (err) {
		console.log(err)
		return res.send('400 - BAD REQUEST').status(400);
  }
  	// res.status(200).json({
  			// where: 'From post request'
 		// })
	}); 
});

module.exports = router ;
