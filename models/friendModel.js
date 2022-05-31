const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A survey must have a title'],
        trim: true,
      },
})

const Friend = mongoose.model("Friend", testSchema);

module.exports = Friend ;