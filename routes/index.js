const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('hellow YoungHwan Oh!!')
})

// 라우터 선언
// const auth = require('../middleware/auth');
// const refreshToken = require('../middleware/refreshToken');

module.exports = router;
