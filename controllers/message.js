const Message = require('../models/Message');

exports.addMessage = async (req, res, next) => {
    try {
        const message = await Message.create(req.body);
        res.status(200).json({success: true, message})
    } catch (error) {
        res.status(400).json({success: false, msg: "Message created error"})
    }
}

exports.getMessages = async (req, res, next) => {
    try {
        const messages = await Message.find();
        res.status(200).json({success: true, count: messages.length, data: messages});
    } catch (error) {
        res.status(400).json({success: false, msg: "Failed to get messages"});
    }
}
exports.getMessage = async (req, res, next) => {
    try {
        const message = await Message.findById(req.params.id);
        if(!message){
            return res.status(400).json({success: false, msg: "Message not found"});
        }
        res.status(200).json({success: true, message});
    } catch (error) {
        res.status(400).json({success: false, msg: "Failed to get message"});
    }
}

exports.deleteMessage = async (req, res, next) => {
    try {
        const message = await Message.findByIdAndDelete(req.params.id);
        if (!message) {
            return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, msg: "Message has been deleted successfully"});
    } catch (error) {
        res.status(400).json({success: false});        
    }
}





exports.addDmMessages = async (req, res, next) => {
    try {
        const data = await Message.findOneAndUpdate(
            { _id: req.params.id},
            { $addToSet: {privateMsg: req.body}}
        );
        res.status(200).json({success: true, message: "Dm message added successfully", data})
    } catch (error) {
        res.status(400).json({success: false});
    }

}