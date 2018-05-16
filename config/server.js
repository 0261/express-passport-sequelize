require('debugs/init');
const debug = require('debug')('server');

const express = require('express');
const path = require('path');
const env = require('dotenv').load(); // 환경변수 설정
const app = express();

// API
const api = require('../routes/api/index');
app.use('/api',api);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(env.parsed.PORT || 3000,()=>{
  debug(`PORT ${env.parsed.PORT || 3000}`);
})


