const express= require('express');
const { bookActivity, getMyBookings } = require('../controllers/booking.controller');
const authenticate = require('../middleware/auth.middleware');
const router= express.Router();

router.post('/', authenticate, bookActivity);
router.get('/', authenticate, getMyBookings);


module.exports= router;