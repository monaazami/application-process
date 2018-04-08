const router = require('express').Router();

router.get('/applicants', (req,res) => {
	res.status(200).json({name: 'John Smith'});
})

module.exports=router; 