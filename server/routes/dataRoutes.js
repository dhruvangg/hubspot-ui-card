const express = require('express');
const Data = require('../models/Data');

const router = express.Router();

// GET all data
router.get('/', async (req, res) => {
  const data = await Data.find();
  res.json(data);
});

// Post a new data
// router.post('/', async (req, res) => {
//   const newData = new Data({
//     portalId: 123456,
//     name: "Dhruvang Gajjar",
//     email: "dhruvangg@gmail.com",
//   });
//   await newData.save();
//   res.status(201).json(newData);
// });


module.exports = router;
