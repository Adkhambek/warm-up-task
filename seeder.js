const { faker } = require("@faker-js/faker");
const generateSlug = require("./helpers/slugGenerator");
const mongoose = require("mongoose");
const Campaign = require("./routes/models/Campaign");

require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedData = [];

for (let i = 0; i < 5; i++) {
  const campaign = new Campaign({
    title: faker.lorem.sentence(),
    slug: generateSlug(faker.lorem.sentence()),
    image: `c-${i + 1}.jpg`,
    description: faker.lorem.paragraphs(200),
    supporters: faker.number.int({ min: 0, max: 10000 }),
    deadline: faker.date.soon({ days: 50 }),
    fundedOf: faker.number.int({ min: 0, max: 1000000 }),
    price: faker.number.int({ min: 0, max: 100000 }),
  });

  seedData.push(campaign);
}

async function seedDB() {
  await Campaign.deleteMany({});
  await Campaign.insertMany(seedData);
}

seedDB()
  .then(() => {
    console.log("Data seeded successfully!");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("Error seeding data:", error);
    mongoose.connection.close();
  });
