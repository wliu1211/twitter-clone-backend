const express = require('express');
const router = express.Router();


const {
    addFollower,
    addFollowing,
    deleteFollower,
    deleteFollowing

} = require('../controllers/follow');

router.route('/add-follower/:id')
    .put(addFollower);
router.route('/remove-follower/:id')
    .put(deleteFollower);
router.route('/add-following/:id')
    .put(addFollowing);
router.route('/remove-following/:id')
    .put(deleteFollowing);

module.exports = router;
