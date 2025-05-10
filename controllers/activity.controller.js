const Activity= require('../models/activity.model');
const moment = require('moment');

const createActivity = async (req, res) => {
    try {
        const {title, description, location, dateTime} = req.body;

         const parsedDate = moment(dateTime, 'MMMM D, YYYY, h:mm A', true);

        if (!parsedDate.isValid()) {
            return res.status(400).json({ message: 'Invalid date format' });
        }

        const newActivity= new Activity({
            title,
            description,
            location,
            dateTime: parsedDate.toDate(),
        })

        await newActivity.save();
       
        res.status(201).json({message: 'Activity created successfully', newActivity});
        
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};

const listActivities = async (req, res) => {
    try {
        const activities = await Activity.find();

        const formattedActivities = activities.map(activity => ({
            ...activity.toObject(),
            dateTime: moment(activity.dateTime).format('MMMM D, YYYY, h:mm A') 
        }));

        res.status(200).json({message: 'Activities listed successfully', activities:formattedActivities});

    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};


module.exports = {createActivity, listActivities};
