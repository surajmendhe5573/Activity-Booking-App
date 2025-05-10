const Booking = require('../models/booking.model');
const Activity= require('../models/activity.model');

const bookActivity = async (req, res) => {
    try {
        const { activityId } = req.body;

         if (!activityId) {
            return res.status(400).json({message: 'Activity ID is required'});
        }

    
        const activity = await Activity.findById(activityId);
        if (!activity) {
            return res.status(404).json({message: 'Activity not found'});
        }

        const newBooking= new Booking({
            user: req.user.id,
            activity: activityId,
        })

        await newBooking.save();
        res.status(201).json({message: 'Book activity successfully', newBooking});

    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal server error'});
    }
};

const getMyBookings = async (req, res) => {
    try {

        const bookings = await Booking.find({ user: req.user.id }).populate('activity');

        res.status(200).json({message: 'Booked activities fetched successfully', bookings});

    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Internal server error'});
    }
};


module.exports = {bookActivity, getMyBookings};
