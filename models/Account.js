const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    email: String,
    password: String
})

module.exports = mongoose.model('Account', AccountSchema);