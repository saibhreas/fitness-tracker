const router = require("express").Router();

const { Workout }= require ("../models");

//Get All workouts
router.get("/api/workouts", (req, res) =>{
  consol.log("GET all workouts")
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});


//New Workout
router.post("api/workouts", ({ body}, res) =>{
  console.log("Post1 workouts/ New");
  db.Workout.create({body})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  });
});

//async addExercise(data) Put exercise
router.put("/api/workouts/:id", (req, res) =>{
  console.log("Put with ID/params");
  db.Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}})
    .then(dbWorkoutUpdate => {
      console.log(dbWorkoutUpdate)
      res.json(dbWorkoutUpdate);
    })
    .catch(err => {
      res.json(err);
    });
});
//Range
router.get("/api/workouts/range", (req, res) =>{
  console.log("hit range");
  db.Workout.find({})
  .then(dbWorkoutRange => {
    res.json(dbWorkoutRange);
  })
  .catch(err => {
    res.json(err);
  });
});


module.exports = router;