// db side
const router = require('express').Router();
const Workout = require ('./workout');

router.use('/api/workouts', workoutRoutes);

module.export = router