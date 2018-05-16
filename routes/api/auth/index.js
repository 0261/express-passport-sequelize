const router = require('express').Router();
const ctrl = require('./ctrl');
const passport = require('passport');


router.post('/signin', passport.authenticate('signIn', {
    successRedirect: '/',
    failureRedirect: '/dashboard'
}));

router.post('/signup', passport.authenticate('signUp',{
    successRedirect:'/',
    failureRedirect: '/dashboard',
}));

module.exports = router;