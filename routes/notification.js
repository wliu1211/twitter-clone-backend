const express = require('express');
const router = express.Router();


const {
    addNoti,
    getNotis
} = require('../controllers/notification');

router.route('/')
    .post(addNoti)
    .get(getNotis);

module.exports = router;
