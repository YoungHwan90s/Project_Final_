const dotenv = require('dotenv');
const http = require('./app');

// 소켓 사용 시 추가
// require('./socket');

dotenv.config();
const PORT = process.env.PORT || 3000;

http.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});