const port = process.env.PORT || 3001;

const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const applicants = require('./routes/applicants');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());

app.use('/api/applicants', applicants);
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
