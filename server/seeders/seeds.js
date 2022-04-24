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
    const password = await bcrypt.hash('Password', 10); //--DK hashing password (saltRound=10) Couldn't find the hook solution like sequelized.
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

    unitData.push({ unitNumber, email, password });
  }

  await Unit.collection.insertMany(unitData);

  console.log('Unit Data Seeded!');

  process.exit(0);
});
