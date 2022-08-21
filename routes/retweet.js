const express = require('express');
const router = express.Router();


const {
    addRetweet,
    deleteRetweet
    
} = require('../controllers/retweets');


router.route('/add-retweet/:id')
    .put(addRetweet);
router.route('/remove-retweet/:id')
    .put(deleteRetweet);

module.exports = router;
