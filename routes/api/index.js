const router = require('express').Router();
//required middleware\\
const bodyParser = require('body-parser').json(); // For POST
const session = require('express-session'); // Session
const passport = require('passport'); // Passport
const cors = require('cors'); // CORS
const models = require("../../app/models"); // require Sequelize Models
const cookieParser = require('cookie-parser'); // Cookies
require('../../config/passport.js')(passport, models.user); // PASSPORT Init

router.use(cookieParser()); // Cookies
router.use(cors()) // CORS
router.use(bodyParser) // Parsing Post Data
router.use(session({ // Activate Session
    secret: 'goal',
    resave: true,
    saveUninitialized: false
}))
router.use(passport.initialize()); // Passport Start
router.use(passport.session()); // Connect Session
//Sync Database
models.sequelize.sync().then(function () {
    
}).catch(function (err) {
    console.log(err)
});
////////////////////////

// # Authenticate
const auth = require('./auth/index');
router.use('/auth', auth);
// ################


// 보안체크하자 
module.exports = router;