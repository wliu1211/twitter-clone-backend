const mongoose = require('mongoose');


const NotificationSchema = new mongoose.Schema({
    fromUserId: String, default: '',
    fromUserName: String, default: '',
    fromUserPicture: String, default: '',
    notiAction: String, default: '',
    toUserId: String, default: '',
    targetTweetId: String, default: '',
})

module.exports = mongoose.model('Notification', NotificationSchema);