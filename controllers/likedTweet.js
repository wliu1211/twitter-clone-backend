const Tweet = require('../models/HomeTweets');

exports.addLikedTweet = async (req, res, next) => {
    try {
        const tweet = await Tweet.findOneAndUpdate(
            { _id: req.params.id},
            { $addToSet: {likedTweets: req.body}}
        )
        if(!tweet){
            return res.status(400).json({success: false, message: "Tweet not found"});
        }
        res.status(200).json({success: true, message: "Liked tweet added successfully", tweet})
    } catch (error) {
        res.status(400).json({success: false});
        
    }
}


exports.deleteLikedTweet = async (req, res, next) => {
    try {
        const tweet = await Tweet.findOneAndUpdate(
            { _id: req.params.id},
            { $pull: {likedTweets: {userId: req.body.userLikedId}}},
            { safe: true, multi: false }
        )
        if(!tweet){
            return res.status(400).json({success: false, message: "Tweet not found"});
        }
        res.status(200).json({success: true, message: "Liked tweet removed successfully", tweet});
    } catch (error) {
        res.status(400).json({success: false, message: "Failed to get tweet"});
    }
}
