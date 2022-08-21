const Account = require("../models/Account");

exports.getAllAccounts = async (req, res, next) => {
    try {
        const accounts = await Account.find();
        res.status(200).json({success:true, count: accounts.length, data: accounts});
    } catch (error) {
            res.status(400).json({success:false, message: "Failed to get accounts"});
    }
}

exports.createAccount = async (req, res, next) => {
    try {
        const account = await Account.create(req.body);
        res.status(200).json({success: true, account});
    } catch (error) {
        res.status(400).json({success: false});
    }
}

exports.findAccount = async (req, res, next) => {
    try {
        const account = await Account.findById(req.params.id);
        if (!account) {
            res.status(400).json({success: false})
        }    
        
        res.status(200).json({success: true, account});
    } catch (error) {
        res.status(400).json({success: false});
    }
}

exports.updateAccount = async (req, res, next) => {
    try {
        const account = await Account.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if(!account){
            res.status(400).json({message: "Account not found"})
        }
        res.status(200).json({success: true, message: "Account updated successfully", account})
    } catch (error) {
        res.status(400).json({success: false})
    }
}

exports.deleteAccount = async (req, res) => {
    try {
        const account = await Account.findByIdAndDelete(req.params.id);
        if (!account) {
            return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, message: "Account has been deleted successfully"});
    } catch (error) {
        res.status(400).json({success: false});        
        
    }
}