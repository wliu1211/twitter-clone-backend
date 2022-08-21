const Tweet = require('../models/HomeTweets');


exports.addTweet = async (req, res, next) => {
    try {
        const tweet = await Tweet.create(req.body);
        res.status(200).json({success: true, tweet})
    } catch (error) {
        res.status(400).json({success: false, message: "Tweet created error"})
    }
}

exports.getTweets = async (req, res, next) => {
    try {
        const tweets = await Tweet.find();
        res.status(200).json({success: true, count: tweets.length, data: tweets});
    } catch (error) {
        res.status(400).json({success: false, message: "Failed to get tweets"});
    }
}
exports.getTweet = async (req, res, next) => {
    try {
        const tweet = await Tweet.findById(req.params.id);
        if(!tweet){
            return res.status(400).json({success: false, message: "Tweet not found"});
        }
        res.status(200).json({success: true, tweet});
    } catch (error) {
        res.status(400).json({success: false, message: "Failed to get tweet"});
    }
}
exports.editTweet = async (req, res, next) => {
    try {
        const tweet = await Tweet.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if(!tweet){
            res.status(400).json({message: "Tweet not found"})
        }
        res.status(200).json({success: true, message: "Tweet updated successfully", tweet})
    } catch (error) {
        res.status(400).json({success: false})
    }
}
exports.deleteTweet = async (req, res, next) => {
    try {
        const tweet = await Tweet.findByIdAndDelete(req.params.id);
        if (!tweet) {
            return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, msg: "Tweet has been deleted successfully"});
    } catch (error) {
        res.status(400).json({success: false});        
    }
}

exports.addTweetComments = async (req, res, next) => {
    try {
        const tweet = await Tweet.findOneAndUpdate(
            { _id: req.params.id},
            { $addToSet: {comments: req.body}}
        )
        
        res.status(200).json({success: true, message: "Tweet comment added successfully", tweet})
    } catch (error) {
        res.status(400).json({success: false});
        
    }
}

exports.deleteTweetComment = async (req, res, next) => {
    try {
        const tweet = await Tweet.findOneAndUpdate(
            { _id: req.params.id},
            { $pull: {comments: {userId: req.body.tweetCommentId}}},
            { safe: true, multi: false }
        )
        if(!tweet){
            return res.status(400).json({success: false, message: "Tweet not found"});
        }
        res.status(200).json({success: true, message: "Comment removed successfully", tweet});
    } catch (error) {
        res.status(400).json({success: false, message: "Failed to get tweet"});
    }
}
