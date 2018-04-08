const router = require('express').Router();

router.get('/applicants', (req,res) => {
	res.status(200).json({
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
	});
})

module.exports=router; 