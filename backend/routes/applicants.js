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

// router.get('/formData', (req, res) => {
// 	res.send('FORM DATA')
// })

module.exports=router; 