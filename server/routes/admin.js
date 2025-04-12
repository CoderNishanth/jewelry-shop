const express = require("express");
const router = express.Router();
const Inquiry = require("../models/Inquiry");
const Product = require("../models/Product");

// Get all inquiries
router.get("/inquiries", async (req, res) => {
  try {
    const inquiries = await Inquiry.find()
      .populate('wishlist')
      .sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get dashboard stats
router.get("/stats", async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    const totalInquiries = await Inquiry.countDocuments();
    res.json({
      totalProducts,
      totalInquiries
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
