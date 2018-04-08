const port = 3001;

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routers/router');
const app = express();

app.use('/api', router);
app.use(bodyParser.json());

app.get('/', (req,res) => {
	res.status(200).json({status: 200});
});
  
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});