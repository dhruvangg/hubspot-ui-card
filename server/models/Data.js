const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    portalId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Data', dataSchema);