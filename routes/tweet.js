const express = require('express');
const router = express.Router();

const {
    addTweet,
    getTweets,
    getTweet,
    editTweet,
    deleteTweet,
    addTweetComments,
    deleteTweetComment
} = require('../controllers/tweet');

router.route('/')
    .get(getTweets)
    .post(addTweet);
router.route('/:id')
    .get(getTweet)
    .put(editTweet)
    .delete(deleteTweet);
router.route('/add-tweet-comment/:id')
    .put(addTweetComments);
router.route('/remove-tweet-comment/:id')
    .put(deleteTweetComment);


module.exports = router;
