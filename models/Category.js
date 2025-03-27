const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true // Ensure category names are unique
    }
});

module.exports = mongoose.model('Category', categorySchema);