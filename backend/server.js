const port = 3001;

const express = require('express');
const bodyParser = require('body-parser');

const applicants = require('./routes/applicants');
const admin = require('./routes/admin');

const app = express();

app.use('/api/applicants', applicants);
app.use('/api/admin', admin);

app.use(bodyParser.json());

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});