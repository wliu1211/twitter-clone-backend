const User = require('../models/User');

exports.addFollower = async (req, res, next) => {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.id},
            { $addToSet: {followers: req.body}}
        );
        res.status(200).json({success: true, message: "Tweet added successfully", user})
    } catch (error) {
        res.status(400).json({success: false});
    }
}
exports.addFollowing = async (req, res, next) => {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.id},
            { $addToSet: {followings: req.body}}
        );
        res.status(200).json({success: true, message: "Tweet added successfully", user})
    } catch (error) {
        res.status(400).json({success: false});
    }
}
exports.deleteFollower = async (req, res, next) => {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.id},
            { $pull: {followers: {userId: req.body.followersId}}},
            { safe: true, multi: false }
        )
        if(!user){
            return res.status(400).json({success: false, message: "User not found"});
        }
        res.status(200).json({success: true, message: "Follower User removed successfully", user});
    } catch (error) {
        res.status(400).json({success: false, message: "Failed to get User"});
    }
}
exports.deleteFollowing = async (req, res, next) => {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.id},
            { $pull: {followings: {userId: req.body.followingsId}}},
            { safe: true, multi: false }
        )
        if(!user){
            return res.status(400).json({success: false, message: "User not found"});
        }
        res.status(200).json({success: true, message: "Following User removed successfully", user});
    } catch (error) {
        res.status(400).json({success: false, message: "Failed to get User"});
    }
}
