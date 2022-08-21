const Notification = require('../models/Notification');

exports.addNoti = async (req, res, next) => {
    try {
        if (!req.body) {
            res.status(400).json({message: "No information updated"})
        }
        const notification = await Notification.create(req.body);
        res.status(200).json({success: true, notification})
    } catch (error) {
        res.status(400).json({success: false, message: `Notification created error: ${error}`})
    }
}
exports.getNotis = async (req, res, next) => {
    try {
        const notifications = await Notification.find();
        res.status(200).json({success: true, count: notifications.length, notifications});
    } catch (error) {
        res.status(400).json({success: false, message: "Failed to get notifications"});
    }
}