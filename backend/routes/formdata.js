
const router = require('express').Router();


router.post('/', (req, res) => {
	console.log(req.body)
	const name = req.body.name,
		email = req.body.email,
		city = req.body.city,
		tel = req.body.tel,
		status = req.body.status,
		country = req.body.country,
		experience = req.body.experience,
		itAccess = req.body.itAccess,
		hearAbout = req.body.hearAbout;

	res.send(name + email + city + tel + country + experience + itAccess + hearAbout);
});
module.exports = router;
