"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.newUser = void 0;
const newUser = (req, res) => {
    console.log(req.body);
    res.json({
        msg: 'New user',
        body: req.body
    });
};
exports.newUser = newUser;
const login = (req, res) => {
    console.log(req.body);
    res.json({
        msg: 'Login user',
        body: req.body
    });
};
exports.login = login;
