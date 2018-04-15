const  faker = require('faker');    
const path = require('path'),

madoka = require('madoka');
 
 
let template = [
  '{{ repeat(6, 100) }}',
  {
    id: '{{ objectId() }}',
    firstname: '{{ firstName() }} ',     
    surname: `{{ lastName() }}`,
    email: faker.internet.email,
    city: faker.address.city,
    tel: '{{ phone() }}',  
    status: '{{ bool() }}',      
    country: faker.address.country,
    experience: '{{ company().toUpperCase() }}',
    itAccess: '{{ bool() }}',
    hearAbout: faker.random.word
  }
];
 
madoka.save(template, path.join(__dirname, 'fakeApplicant.json'));
 


