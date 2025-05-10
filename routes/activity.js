const express= require('express');
const { createActivity, listActivities } = require('../controllers/activity.controller');
const router= express.Router();

router.post('/book', createActivity);
router.get('/', listActivities);


module.exports= router;