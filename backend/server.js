const port = 3001;

const express = require('express');
const bodyParser = require('body-parser');

const applicants = require('./routes/applicants');

const app = express();

app.use('/api/applicants', applicants);

app.use(bodyParser.json());

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});