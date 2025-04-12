const express = require('express');
const router = express.Router();
const Inquiry = require('../models/Inquiry');
const { auth, adminOnly } = require('../middleware/auth');

// Create new inquiry
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message, wishlist } = req.body;
    
    const inquiry = new Inquiry({
      name,
      email,
      phone,
      message,
      wishlist
    });

    await inquiry.save();
    res.status(201).json({ message: 'Inquiry submitted successfully', inquiry });
  } catch (error) {
    console.error('Error creating inquiry:', error);
    res.status(500).json({ message: 'Error creating inquiry' });
  }
});

// Get all inquiries (admin only)
router.get('/', [auth, adminOnly], async (req, res) => {
  try {
    const inquiries = await Inquiry.find()
      .populate('wishlist')
      .sort({ createdAt: -1 });
    
    res.json(inquiries);
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    res.status(500).json({ message: 'Error fetching inquiries' });
  }
});

// Delete inquiry (admin only)
router.delete('/:id', [auth, adminOnly], async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);
    if (!inquiry) {
      return res.status(404).json({ message: 'Inquiry not found' });
    }

    await inquiry.deleteOne();
    res.json({ message: 'Inquiry deleted successfully' });
  } catch (error) {
    console.error('Error deleting inquiry:', error);
    res.status(500).json({ message: 'Error deleting inquiry' });
  }
});

module.exports = router;
