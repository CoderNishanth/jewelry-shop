const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

const testLogin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Find the admin user
    const user = await User.findOne({ email: 'admin@jewelry.com' });
    if (!user) {
      console.log('Admin user not found. Creating one...');
      
      // Create admin user
      const adminUser = new User({
        email: 'admin@jewelry.com',
        password: 'admin123',
        role: 'admin'
      });

      await adminUser.save();
      console.log('Admin user created successfully');
    } else {
      console.log('Admin user exists');
      console.log('Email:', user.email);
      console.log('Role:', user.role);
    }

    // Close connection
    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error:', error.message);
  }
};

// Run the function
testLogin();
