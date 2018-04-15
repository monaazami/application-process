const port = process.env.PORT || 3001;

const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors')
const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.json());
app.use(cors());

const applicants = require('./routes/applicants');
const formdata = require('./routes/formdata');


app.use('/api/applicants', applicants);

//form data testing route
app.use('/api/formdata', formdata);

app.use('/api/test', test);

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
