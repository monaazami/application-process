const port = 3001;

const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const applicants = require('./routes/applicants');
const dashboard = require('./routes/dashboard');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));// support encoded bodies
app.use(bodyParser.json());
app.use(cors());

app.use('/api/applicants', applicants);
app.use('/api/dashboard', dashboard);
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
