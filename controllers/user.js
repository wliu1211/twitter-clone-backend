const User = require('../models/User');

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({success: true, count: users.length, data: users})
    } catch (error) {
        res.status(400).json({success: false, message: "Fail to get users"})
    }
}


exports.findUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if(!user){
            return res.status(400).json({success: false, message: "User not found"});
        }
        
        res.status(200).json({success: true, user})
    } catch (error) {
        res.status(400).json({success: false})
    }
}
exports.findUserByEmail = async (req, res, next) => {
    try {
        const user = await User.findOne({"email": req.params.id});
        if (!user) {
            return res.status(400).json({success: false, message: "User email not found"})
        }
        res.status(200).json({success: true, user})
    } catch (error) {
        res.status(400).json({success: false});
    }
}
exports.findUserByTwitterHandle = async (req, res, next) => {
    try {
        const user = await User.findOne({"twitterHandle": req.params.id});
        if (!user) {
            return res.status(400).json({success: false, message: "User twitter handle not found"})
        }
        res.status(200).json({success: true, user})
    } catch (error) {
        res.status(400).json({success: false});
    }
}
exports.createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json({success: true, user})
    } catch (error) {
        res.status(400).json({success: false, message: "User created error"})
    }
}


exports.updateUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if(!user){
            res.status(400).json({message: "User not found"})
        }
        res.status(200).json({success: true, message: "User updated successfully", user})
    } catch (error) {
        res.status(400).json({success: false})
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, message: "User has been deleted successfully"});
    } catch (error) {
        res.status(400).json({success: false});        
        
    }
}