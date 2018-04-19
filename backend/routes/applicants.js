const router = require('express').Router();

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

<<<<<<< HEAD
// add new applicant
router.post("/", (req, res) => {
	var name = req.body.fullName
	
	res.send(name)
});
=======
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


>>>>>>> origin

module.exports=router; 