const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'], // name is required
        trim: true, //make sure we do not have any whitespace 
        maxlength: [20, 'name can not be more than 20 characters'], //name can not be longer than 20 characters
    },
    completed: {
        type: Boolean, 
        default: false,
    }, 
})

module.exports = mongoose.model('Task', TaskSchema)