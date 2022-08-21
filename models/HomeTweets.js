const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    name: String,
    twitterHandle: String, 
    picture: String,
    text: String,
    timeStamp: {type: Date, default: Date.now}, 
})
const LikeTweetSchema = new mongoose.Schema({
    name: String,
    userId: String,
    twitterHandle: String,
    picture:String
})
const RetweetSchema = new mongoose.Schema({
    name: String,
    userId: String,
    twitterHandle: String,
    picture:String,
    retweetTweetId: String,

})

const TweetSchema = new mongoose.Schema({
    name: String, default: 'Guest',
    userId: String, default: '',
    twitterHandle: String, default: '',
    picture: String, default: 'defaultAvatar.png',
    text: String, default: '',
    timeStamp: {type: Date, default: Date.now, required: true},
    likes: Number, default: 0,
    comments: [CommentSchema],
    likedTweets: [LikeTweetSchema],
    retweets: [RetweetSchema],
    retweetTweetId: String, default:'',
    retweetUserId: String, default:'',
    retweetName: String, default:'',
    retweetActive: Boolean, default: false,

}) 

module.exports = mongoose.model('Tweet', TweetSchema);