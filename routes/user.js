const express= require('express');
const { register, login, getAllUsers } = require('../controllers/user.controller');
const router= express.Router();

const {
    registerValidationRules,
    loginValidationRules,
    validate
}= require('../utils/validation');

router.post('/register', registerValidationRules, validate, register);
router.post('/login',loginValidationRules, validate,login);
router.get('/', getAllUsers);

module.exports= router;