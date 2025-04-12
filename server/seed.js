const mongoose = require('mongoose');
require('dotenv').config();
const Product = require('./models/Product');

const products = [
  {
    name: 'Diamond Solitaire Ring',
    price: 1999.99,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3',
    description: 'Classic 1-carat diamond solitaire ring in 18k white gold',
    category: 'Rings'
  },
  {
    name: 'Pearl Necklace',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?ixlib=rb-4.0.3',
    description: 'Elegant freshwater pearl necklace with sterling silver clasp',
    category: 'Necklaces'
  },
  {
    name: 'Sapphire Earrings',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1635767798638-3665c671c0bb?ixlib=rb-4.0.3',
    description: 'Beautiful blue sapphire and diamond drop earrings',
    category: 'Earrings'
  },
  {
    name: 'Gold Tennis Bracelet',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3',
    description: '14k gold tennis bracelet with round brilliant diamonds',
    category: 'Bracelets'
  },
  {
    name: 'Emerald Pendant',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1602752275197-9d349bb83023?ixlib=rb-4.0.3',
    description: 'Stunning emerald pendant with diamond halo in white gold',
    category: 'Necklaces'
  },
  {
    name: 'Rose Gold Wedding Band',
    price: 699.99,
    image: 'https://images.unsplash.com/photo-1595781572981-d63151b232ed?ixlib=rb-4.0.3',
    description: 'Classic 4mm rose gold wedding band with comfort fit',
    category: 'Rings'
  }
];

const seedDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert new products
    await Product.insertMany(products);
    console.log('Added sample products');

    // Close connection
    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seed function
seedDB();
