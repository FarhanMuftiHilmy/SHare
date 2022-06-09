'use strict';

const firebase = require('../db');
const Auth = require('../models/auth');
const firestore = firebase.firestore();

const SignUp = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('reports').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = { SignUp }