const express = require('express');
const router = express.Router();

const {
    createAccount,
    getAllAccounts,
    findAccount,
    updateAccount,
    deleteAccount
} = require('../controllers/account');

router.route('/')
    .get(getAllAccounts)
    .post(createAccount);

router.route('/:id')
    .get(findAccount)
    .put(updateAccount)
    .delete(deleteAccount);
    
module.exports = router;