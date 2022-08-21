const mongoose = require('mongoose');

const DmMessagesSchema = new mongoose.Schema({
    toUserId: String,
    fromUserId: String, 
    name: String, 
    twitterHandle: String, 
    picture: String,
    text: String
})
const MessageSchema = new mongoose.Schema({
    toUserId: String, default: '',
    toName: String, default: '',
    toTwitterHandle: String, default: '',
    toPicture: String, default: '',
    fromUserId: String, default: '',
    fromName: String, default: '',
    fromTwitterHandle: String, default: '',
    fromPicture: String, default: '',


    privateMsg:[DmMessagesSchema],

})


module.exports = mongoose.model('Message', MessageSchema);