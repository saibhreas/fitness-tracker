// db side
const router = require('express').Router();
const Workout = require ('./workouts');

router.use('/api/workouts', workoutRoutes);

module.exports = router