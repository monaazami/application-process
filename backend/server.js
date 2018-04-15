const port = process.env.PORT || 3001;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.json());
app.use(cors());

const applicants = require('./routes/applicants');
const test = require('./routes/test');

app.use('/api/applicants', applicants);
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
