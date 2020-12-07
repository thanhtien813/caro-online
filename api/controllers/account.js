const accountDAO = require('../models/account');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const salt = 8;

module.exports = {
    register: async (req, res, next) => {
        try {
            const username = req.body.username;
            let password = req.body.password;
            const name = req.body.name;
            const email = req.body.email;
            const isAdmin = req.body.isAdmin;

            if (username && password && name && email && isAdmin) {
                const checkUser = await accountDAO.findOne({ username: username });
                if (checkUser === null) {
                    password = await bcrypt.hash(password, salt);
                    const newAccount = new accountDAO({
                        username: username,
                        password: password,
                        name: name,
                        email: email,
                        isAdmin: isAdmin
                    });
                    await newAccount.save();
                    res.status(200).json({
                        message: "Successful"
                    });
                } else {
                    res.status(409).json({
                        message: "This username existed"
                    });
                }
            } else {
                res.status(400).json({
                    message: "username or password or name or email is undefined."
                })
            }
        } catch (e) {
            res.status(500).json({
                message: e.message
            })
        }
    }
}