const router = require('express').Router();

router.get('/', (req, res) => {
	res.send('Hello from test')
});
module.exports = router;