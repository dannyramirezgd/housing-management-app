const faker = require('faker');
const db = require('../config/connection');
const { Admin, Unit } = require('../models');
const bcrypt = require('bcrypt');

// clear the Admin and Unit collections.
db.once('open', async () => {
  await Admin.deleteMany({});
  await Unit.deleteMany({});

  // create Admin data.. limiting to 5 for now.
  const adminData = [];

  for (let i = 0; i < 5; i++) {
    const username = faker.internet.userName();
    const email = faker.internet.email();
    const password = await bcrypt.hash('Password', 10); 
    const isAdmin = true;

    adminData.push({ username, email, password, isAdmin });
  }

  await Admin.collection.insertMany(adminData);

  console.log('Admin Data Seeded!');

  //   create Unit data..limiting to 10 for now.
  let unitData = [];

  for (let i = 0; i < 10; i++) {
    const unitNumber = i + 1;
    const email = faker.internet.email();
    const password = await bcrypt.hash('password', 10);

    const createdUnit = await Unit.create({ unitNumber, email, password });
    
    const updatedAdmin = await Admin.updateMany(
      { isAdmin: true },
      { $push: { units: createdUnit._id } },
    );

    unitData.push(createdUnit);
  }

  console.log('Unit Data Seeded!');

  //   need to figure out how we are going to corelate request to unit.. by unit # or _id?

  process.exit(0);
});
