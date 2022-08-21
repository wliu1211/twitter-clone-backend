const express = require('express');
const router = express.Router();

const {
    getUsers,
    findUser,
    findUserByEmail,
    findUserByTwitterHandle,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/user');

router.route('/')
    .get(getUsers)
    .post(createUser);

router.route('/findEmail/:id')
    .get(findUserByEmail);
router.route('/findTwitterHandle/:id')
    .get(findUserByTwitterHandle);

router.route('/:id')
    .get(findUser)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;