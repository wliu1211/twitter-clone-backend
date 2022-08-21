const Tweet = require('../models/HomeTweets');

exports.addRetweet = async (req, res, next) => {
    try {
        const tweet = await Tweet.findOneAndUpdate(
            { _id: req.params.id},
            { $addToSet: {retweets: req.body}}
        )
        if(!tweet){
            return res.status(400).json({success: false, message: "Tweet not found"});
        }
        res.status(200).json({success: true, message: "Retweet added successfully", tweet})
    } catch (error) {
        res.status(400).json({success: false});
        
    }
}
exports.editRetweet = async (req, res, next) => {
    try {
        const tweet = await Tweet.findOneAndUpdate(
            { _id: req.params.id, retweets: {$elemMatch: {id: req.body.retweetId}}},
            { $set: {'retweets.$.retweetTweetId': req.body.tweetId}}
        )
        if(!tweet){
            return res.status(400).json({success: false, message: "Tweet not found"});
        }
        res.status(200).json({success: true, message: "Retweet added successfully", tweet})
    } catch (error) {
        res.status(400).json({success: false});
        
    }
}


exports.deleteRetweet = async (req, res, next) => {
    try {
        const tweet = await Tweet.findOneAndUpdate(
            { _id: req.params.id},
            { $pull: {retweets: {userId: req.body.retweetUserId}}},
            { safe: true, multi: false }
        )
        if(!tweet){
            return res.status(400).json({success: false, message: "Tweet not found"});
        }
        res.status(200).json({success: true, message: "Retweet removed successfully", tweet});
    } catch (error) {
        res.status(400).json({success: false, message: "Failed to get tweet"});
    }
}
