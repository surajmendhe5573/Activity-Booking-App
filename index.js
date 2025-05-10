const express= require('express');
const app= express();
require('dotenv').config();

app.use(express.json());

const port= process.env.PORT || 5000

app.get('/', (req, res)=>{
    res.send('Welcome to the Activity Booking APIs !');
});

require('./config/db');

app.use('/api/users', require('./routes/user'));
app.use('/api/activities', require('./routes/activity'));
app.use('/api/bookings', require('./routes/booking'));

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;