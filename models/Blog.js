// create a blog schema for
 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: { 
        type: String, 
        required: true 
    },
    content: { 
        type: String, required: true },
    author: { 
        type: String 
    },
    comments: { 
        type: String
     },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    updatedAt: { 
        type: Date, 
        default: Date.now 
    },
    likes: { 
        type: Number, 
        default: 0 
    }
});

module.exports = mongoose.model('Blog', blogSchema);