const express = require('express');
const router = express.Router();


const {
    addLikedTweet,
    deleteLikedTweet
    
} = require('../controllers/likedTweet');


router.route('/add-liked-tweet/:id')
    .put(addLikedTweet);
router.route('/remove-liked-tweet/:id')
    .put(deleteLikedTweet);

module.exports = router;
