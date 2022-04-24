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
    let password = await bcrypt.hash('Password', 10);
    const isAdmin = true;

    // bcrypt.genSalt(10, function (err, salt) {
    //   console.log(password);
    //   if (err) {
    //     throw err;
    //   } else {
    //     bcrypt.hash(password, salt, function (error, hash) {
    //       if (error) {
    //         throw error;
    //       } else {
    //         console.log(hash);
    //       }
    //     });
    //   }
    // });

    console.log(password);

    adminData.push({ username, email, password, isAdmin });
  }

  await Admin.collection.insertMany(adminData);

  console.log('Admin Data Seeded!');

  process.exit(0);
});
