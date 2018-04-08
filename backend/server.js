const port = 3001;

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routers/router');
const app = express();

app.use('/api', router);
app.use(bodyParser.json());

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});