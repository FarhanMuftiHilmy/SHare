const express = require('express');
const {SignUp
      } = require('../controllers/AuthController');

const router = express.Router();

router.post('/signup', SignUp);

module.exports = {
    routes: router
}