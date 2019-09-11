# 2019-IT30-BCR 三十天路邊賭場上線了！

### [三十天路邊賭場上線了！](https://ithelp.ithome.com.tw/users/20109783/ironman/2287)

## Introduce

![preview](https://github.com/unnhao/2019-IT30-BCR/blob/master/preview.png)
這是參加 it 邦的活動的產品，此為遊戲平台的會員系統，目前開發零散，能完成真的是佛祖保佑。

## Usage

before start, you need add environment variable file.

```
.env

EMAIL_USER=xxxx@gmail.com // email system account, use gmail pls
EMAIL_PASS=xxxx           // email system password, use gmail pls
SECRET_KEY=xxxx           // encrypt key
```

```
npm install
```

```
npm start
```

## Technologies

- lowdb
- express
- nodejs
- vuejs
- jwt
- socketio
- nodemail

## Structure

```
│  .env
│  .gitignore
│  app.js
│  LICENSE
│  package-lock.json
│  package.json
│  README.md
├─bin
│  www // start
├─db
│  lobby.json
│  users.json
├─errors
├─gameServer
│  server.js
└─webServer
   │  server.js
   ├─public
   │  │  favicon.ico
   │  └─ index.html
   └─src
        errorController.js
        mailController.js
        userController.js
        utils.js
```

## MIT License

Copyright (c) 2019 HaoLi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
