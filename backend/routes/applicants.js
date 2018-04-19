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
	let sql = 'select * applicants';
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
router.post("/", (req, res) => {
	 db.run(`INSERT INTO into applicants (fullName, email, tel, status, country, experience, itAcess, hearAbout) Values (?, ?, ?, ?, ?, ?, ?, ?)`, [req.body.fullName, req.body.email, req.body.tel, req.body.status, req.body.country, req.body.experience, req.body.itAccess, req.body.hearAbout], (req, res) =>{
		if (err) {
			res.send('400 - BAD REQUEST');
    }
		res.status(200).json({
			where: 'From post request'
	 })

});
  
});



module.exports = router ;
