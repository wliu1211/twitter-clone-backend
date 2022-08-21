const mongoose = require('mongoose');

const FollowerSchema = new mongoose.Schema({
    name: String,
    twitterHandle: String,
    picture: String,
    userId: String,
    bio: String,
})
const FollowingSchema = new mongoose.Schema({
    name: String,
    twitterHandle: String,
    userId: String,
    picture: String,
    bio: String,
})



const UserSchema = new mongoose.Schema({
    email: String, default: '',
    name: String, default: '',
    twitterHandle: String, default: '',
    picture: String, default: '',
    birthDate: {type: Date, default: new Date()},
    joinedDate: {type: Date, default: Date.now},
    phone: Number, default: 0,
    followings: [FollowingSchema],
    followers: [FollowerSchema],
})

module.exports = mongoose.model('User', UserSchema);