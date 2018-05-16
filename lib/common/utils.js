/**
 * Common Function
 */
require('debugs/init');
const debug = require('debug')('utils');
class utils {
    constructor(){
    }
    // 성공 콜백
    success(result){
        debug('성공하셨습니다',error)
        return done(result,null,{
            message: 'Someting Success'
        })
    }
    // 실패 콜백
    failure(error,done){
        debug('실패하셨습니다.', error)
        return done(error, null, {
            message: 'Something Wrong'
        })
    }
}

module.exports = utils;