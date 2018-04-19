const port = 3001;

const express = require('express');
const bodyParser = require('body-parser');

<<<<<<< HEAD
const cors = require('cors');
const applicants = require('./routes/applicants');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());
=======
const applicants = require('./routes/applicants');

const app = express();

app.use('/api/applicants', applicants);

app.use(bodyParser.json());
>>>>>>> origin

const test = require('./routes/test');

app.use('/api/applicants', applicants);
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
