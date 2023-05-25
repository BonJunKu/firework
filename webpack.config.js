const path = require('path');

module.exports = {
  entry: './src/index.js', // 진입점(entry point) 설정
  output: {
    filename: 'bundle.js', // 번들된 파일의 이름 설정
    path: path.resolve(__dirname, 'dist'), // 번들된 파일의 출력 경로 설정
  },
  mode: 'production',
};
