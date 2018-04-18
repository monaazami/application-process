const port = process.env.PORT || 3001;

const express = require('express');
const bodyParser = require('body-parser');
const applicants = require('./routes/applicants');
const cors = require('cors');
const app = express();

app.use(cors());
app.use('/api/applicants', applicants);
app.use(bodyParser.json());

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});