const { User } = require("../models/User");

let auth = (req, res, next) => {

    //인증처리 하는 부분

    //client cookie에서 token을 가져온다.
    let token = req.cookies.x_auth;



    //가져온 token을 복호화하여 유저를 찾는다.
    User.findByToken(token, (err, user) => {
        if(err) throw err;
        if(!user) return res.json({isAuth: false, error: true})

        req.token = token;
        req.user = user;
        next()
    })
    //유저가 있으면 인증 o, 없으면 인증 x


}

module.exports = { auth };