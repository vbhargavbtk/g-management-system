const FoodMenu = require('../models/foodMenu.model.js');

const getTodaysFood = async (req, res) => {
  try {
    const today = new Date();
    const day = today.toLocaleDateString('en-US', { weekday: 'long' });
    const foodMenu = await FoodMenu.findOne({ day });
    res.status(200).json(foodMenu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTodaysFood };
