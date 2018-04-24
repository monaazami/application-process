const router = require('express').Router();
const sqlite = require('sqlite3').verbose();

const filename = './database/db.sqlite';
let db = new sqlite.Database(filename, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory application database.');
});

// GET APPLICANT PROGRESS DATA (TABLE STEPS) 
router.get('/:id', function (req, res) {
	let sql = 'select * from steps where applicant_id = ?'; 
 	db.all(sql, [Number(req.params.id)], (err, rows) => {
    if (typeof (Number(req.params.id)) !== 'number') {
      res.status(400).send('Bad request');
    } else {
      res.status(200).json({
        data: rows
 			});
  	};  
  })
});

module.exports = router;