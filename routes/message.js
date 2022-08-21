const express = require('express');
const router = express.Router();

const {
    addMessage,
    getMessages,
    getMessage,
    deleteMessage,
    addDmMessages
} =  require('../controllers/message');

router.route('/')
    .get(getMessages)
    .post(addMessage);
router.route('/:id')
    .get(getMessage)
    .delete(deleteMessage);
router.route("/add-dm-messages/:id")
    .put(addDmMessages);
module.exports = router;
