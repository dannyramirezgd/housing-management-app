const faker = require('faker');
const db = require('../config/connection');
const { Admin, Unit } = require('../models');
const bcrypt = require('bcrypt');

// clear the Admin and Unit collections.
db.once('open', async () => {
  await Admin.deleteMany({});
  await Unit.deleteMany({});

  // create Admin data.. limiting to 5.
  const adminData = [];

  for (let i = 0; i < 5; i++) {
    const username = faker.internet.userName();
    const email = faker.internet.email();
    let password = await bcrypt.hash('Password', 10); //--DK hashing password (saltRound=10) Couldn't find the hook solution like sequelized.
    const isAdmin = true;

    adminData.push({ username, email, password, isAdmin });
  }

  await Admin.collection.insertMany(adminData);

  console.log('Admin Data Seeded!');

  process.exit(0);
});
