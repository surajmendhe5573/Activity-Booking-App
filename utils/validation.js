const { check, validationResult } = require('express-validator');

const registerValidationRules = [
    check('name').notEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Valid email is required'),
    check('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
    check('phone')
        .isNumeric()
        .isLength({ min: 10, max: 10 })
        .withMessage('Phone number must be 10 digits')
];

const loginValidationRules = [
    check('email').isEmail().withMessage('Valid email is required'),
    check('password').notEmpty().withMessage('Password is required')
];

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    registerValidationRules,
    loginValidationRules,
    validate
};
