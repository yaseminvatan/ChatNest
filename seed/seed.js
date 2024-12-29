const mongoose = require('mongoose');
const { User, Thought } = require('../models');

// Connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/chatNestDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedData = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Create users
    const users = await User.insertMany([
      { username: 'johnDoe', email: 'john@example.com' },
      { username: 'janeDoe', email: 'jane@example.com' },
      { username: 'samSmith', email: 'sam@example.com' },
    ]);

    console.log('Users seeded:', users);

    // Create thoughts
    const thoughts = await Thought.insertMany([
      { thoughtText: 'This is a great day!', username: 'johnDoe' },
      { thoughtText: 'Loving MongoDB!', username: 'janeDoe' },
      { thoughtText: 'Express.js is fantastic!', username: 'samSmith' },
    ]);

    console.log('Thoughts seeded:', thoughts);

    // Link thoughts to users
    await User.findOneAndUpdate(
      { username: 'johnDoe' },
      { $push: { thoughts: thoughts[0]._id } }
    );
    await User.findOneAndUpdate(
      { username: 'janeDoe' },
      { $push: { thoughts: thoughts[1]._id } }
    );
    await User.findOneAndUpdate(
      { username: 'samSmith' },
      { $push: { thoughts: thoughts[2]._id } }
    );

    console.log('Seed data added successfully!');
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
};

// Run the seed function
seedData();
