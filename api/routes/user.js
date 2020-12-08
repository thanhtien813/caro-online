const express = require('express');
const router = express.Router();
const accountController = require('../controllers/account');
const passport = require('../configs/passport');

router.post('/register', async (req, res, next) => {
    accountController.register(req, res, next);
});

router.post('/login', async (req, res, next) => {
    accountController.loginUser(req, res, next);
});

router.put('/', passport.authenticate('jwt', { session: false }), async (req, res, next) => {
    accountController.update(req, res, next);
});

module.exports = router;