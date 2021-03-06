﻿# 2019-IT30-BCR 三十天路邊賭場上線了！

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
│  cmd.js
│  LICENSE
│  package-lock.json
│  package.json
│  preview.png
│  README.md
├─db
│  admin.json
│  bets.json
│  lobby.json
│  tables.json
│  users.json
├─gameServer
│  │  game.js
│  │  server.js
│  ├─config
│  │   bcr.json
│  │   index.js
│  │   poker.json
│  ├─controllers
│  │   GameController.js
│  │   MainController.js
│  │   WsController.js
│  ├─core
│  │   calcPokerPoint.js
│  │   fanPi.js
│  │   Game.js
│  │   grabRandomPoker.js
│  │   index.js
│  │   preparePoker.js
│  │   shouldBankerSupplyPoker.js
│  │   shouldPlayerSupplyPoker.js
│  │   timeClock.js
│  ├─deliveries
│  ├─lib
│  │   $G.js
│  │   $N.js
│  │   $R.js
│  │   dbBet.js
│  │   dbTable.js
│  │   dbUser.js
│  │   index.js
│  ├─middleware
│  │   auth.js
│  ├─mock
│  │   mockio.js
│  │   mockSocket.js
│  ├─models
│  │   index.js
│  │   User.js
│  └─utils
│      calcBetTotal.js
│      calcUserPayout.js
│      combineBet.js
│      ensureNumber.js
│      getRandom.js
│      index.js
│      minusBet.js
│      shallowObject.js
├─test
│    test-game.js
│    test-utils.js
│    userMock.js
└─webServer
    │  server.js
    ├─api
    │   admin_api.js
    │   user_api.js
    ├─middleware
    │   verifyToken.js
    ├─public
    │  ├─admin 
    │  ├─game
    │  ├─test 
    │  └─user
    └─src
        adminController.js
        errorController.js
        mailController.js
        userController.js
        utils.js
```
