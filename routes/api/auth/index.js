const router = require('express').Router();
const ctrl = require('./ctrl');
const passport = require('passport');
const middle = require('../../../lib/middlewares/isAuthenticate');
const utils = new (require('../../../lib/common/utils'))();

/**
 * POST: /api/auth/signin Body: email, password
 * 로그인 API, 성공: GET /api/auth/signin, 실패: GET /api/auth/signin
 */
router.post('/signin', passport.authenticate('signIn', {
    successRedirect: '/api/auth/signin',
    failureRedirect: '/api/auth/signin'
}));

/**
 * POST /api/auth/signup Body: email, password
 * 회원가입 API, 성공: GET /api/auth/signup, 실패: GET /api/auth/signup
 */
router.post('/signup', passport.authenticate('signUp',{
    successRedirect: '/api/auth/signup',
    failureRedirect: '/api/auth/signup',
}));

/**
 * 로그인 성공 or 실패시 호출하는 API
 */
router.get('/signin',(req,res,error)=>{

    if(req.session.passport){
        utils.resJson(res, 200, "Success Sign In");
    }else{
        utils.resJson(res, 404, "Failed Sign In");
    }
})
/**
 * 회원가입 성공 or 실패시 호출하는 API
 */
router.get('/signup',(req,res,error)=>{
    if (error){
        utils.resJson(res, 404, error);
    }else{
        utils.resJson(res, 200, "Success Sign Up");
    }
    
})

// GET /api/auth/signout 로그아웃 - 세션파괴
router.get('/signout',ctrl.signOut)
router.get('/get', middle.authenticate,ctrl.getItem);

module.exports = router;