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
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const isAdmin = true;

    adminData.push({ username, email, password, firstName, lastName, isAdmin });
  }

  await Admin.collection.insertMany(adminData);

  console.log('Admin Data Seeded!');

  //   create Unit data..limiting to 10 for now.
  const unitData = [];

  for (let i = 0; i < 10; i++) {
    const unitNumber = i + 1;
    const email = faker.internet.email();
    const password = await bcrypt.hash('password', 10);
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    // const createdUnit = unitData.push({ unitNumber, email, password, firstName, lastName });

    // const updatedAdmin = await Admin.updateMany(
    //   { isAdmin: true },
    //   { $push: { units: createdUnit._id } },
    // );

    unitData.push({ unitNumber, email, password, firstName, lastName });
  }

  await Unit.collection.insertMany(unitData)

  console.log('Unit Data Seeded!');

  //   create request Data..
  for (let i = 0; i < 30; i++) {
    const requestBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);
    const randomUnit = Math.floor(Math.random() * unitData.length);
    const { _id: requestId } = unitData[randomUnit];
    const unitNumber = randomUnit + 1;
    const isComplete = false;

    await Unit.updateOne(
      { _id: requestId },
      { $push: { requests: { requestBody, unit: unitNumber, isComplete } } },
      { runValidators: true },
    );
  }

  console.log('Requests created!');
  console.log('All Data Seeded');
  process.exit(0);
});
