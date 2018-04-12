
const router = require('express').Router();


router.post('/', (req, res) => {
	console.log(req.body)
	const name = req.body.name,
		email = req.body.email,
		city = req.body.city,
		contactNum = req.body.contactNum,
		immigrationStatus = req.body.immigrationStatus,
		country = req.body.country,
		programmingExperience = req.body.programmingExperience,
		computerAccess = req.body.computerAccess,
		howYouHearUs = req.body.howYouHearUs;

	res.send(name + email + city + contactNum + country + programmingExperience + computerAccess + howYouHearUs);
});
module.exports = router;
