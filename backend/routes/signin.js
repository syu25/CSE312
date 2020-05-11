const User = require('../models/user.model');
const UserSession = require('../models/UserSession');

module.exports = (app) => {

    app.post('/account/signup', (req, res, next) => {
        const { body  } = req;
        const {
            password
        } = body;
        let {
            username
        } = body;

        if(!username){
            return res.send({
                success: false,
                message: 'No username!'
            });
        }
        if(!password){
            return res.send({
                success: false,
                message: 'No username!'
            });
        }

        username = username.toLowerCase();

        User.find({
            username = username
        }, (err, previousUsers) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'ERRORR'
                });
            } else if(previousUsers.length > 0) {
                return res.send({
                    success: false,
                    message: 'SECRET!'
                });
            }

            const newUser = new User();
            newUser.username = username;
            newUser.password = newUser.generateHash(password);
            newUser.save((err, user) => {
                if(err) {
                    return res.send({
                        success: false,
                        message: 'No username!'
                    });
                }
                return res.send({
                    success: true,
                    message: 'Signed up Successful'
                });
            });
        });
    });

    app.post('/account/signin', (req, res, next) => {
        const { body  } = req;
        const {
            password
        } = body;
        let {
            username
        } = body;

        if(!username){
            return res.send({
                success: false,
                message: 'No username!'
            });
        }
        if(!password){
            return res.send({
                success: false,
                message: 'No username!'
            });
        }

        username = username.toLowerCase();

        User.find({
            username: username
        }, (err, users) => {
            if(err) {
                return res.send({
                    success: false,
                    message: 'server error'
                });
            }
            if(users.length != 1) {
                return res.send({
                    success: false,
                    message: 'invalid'
                });
            }
            const user = users[0];
            if(!user.validPass(password)){
                return res.send({
                    success: false,
                    message: 'invalid password or username'
                });
            }

            const userSession = new UserSession();
            userSession.userId = user._id;
            userSession.save((err, doc) => {
                if(err) {
                    return res.send({
                        success: false,
                        message: 'ERROR: Server Error'
                    });
                }
                return res.send({
                    success: true,
                    message: 'Valid: signin',
                    token: doc._id
                });

            });
        });


    });

    app.get('/account/verify', (req, res, next) => {
        const { query } = req;
        const { token } = query;

        UserSession.find({
            _id: token,
            isDeleted: false
        }, (err, sessions) => {
            if(err) {
                return res.send({
                    success: false,
                    message: 'invalid token'
                });
            }

            if(sessions.length != 1){
                return res.send({
                    success: false,
                    message: 'invalid token 1'
                });
            }
            else {
                return res.send({
                    success: true,
                    message: 'valid'
                });
            }
        });
    });


    app.get('/account/logout', (req, res, next) => {
        const { query } = req;
        const { token } = query;

        UserSession.findOneAndUpdate({
            _id: token,
            isDeleted: false
        }, {
            $set: {isDeleted: true}
        }, null, (err, sessions) => {
            if(err) {
                return res.send({
                    success: false,
                    message: 'invalid token'
                });
            }

            return res.send({
                success: true,
                message: 'valid'
            });
            
        });
    });


};