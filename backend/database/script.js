const faker = require('faker');   
const sqlite = require('sqlite3').verbose();

const filename = './test.sqlite';
let db = new sqlite.Database(filename, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory application database.');
});

// CREATE ARRAY OF FAKE APPLICANTS
let fakeApplicants = [];
for (let i=0; i < 20; i++) {
	fakeApplicants.push({
			id:faker.random.uuid(),
			fullname:faker.name.firstName(),
			email:faker.internet.email(),
			city:faker.address.city(),
			tel:faker.phone.phoneNumber(),
			status:faker.random.boolean(),
			country:faker.address.country(),
			experience:faker.random.word(),
			itAcces:faker.random.word(),
			hearAbout:faker.random.word()
	})
};

//INSERT DATA FROM ARRAY TO DATABASE


