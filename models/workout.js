const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Cardio, Resistance, or Combo Required"
        },
        name: {
          type: String,
          trim: true,
          required: "Name of Exercise Required"
        },
        duration: {
          type: Number
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      },
    ],
    day: {
      type: Date,
      default: () => new Date()
    },
});

// adds a dynamically-created property to schema


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;