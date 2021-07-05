const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date()
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter Cardio, Resistance, or Combo"
        },
        name: {
          type: String,
          trim: true,
          required: "Name of Exercise"
        },
        duration: {
          type: Number,
          required: "Duration in minutes"
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
      }
      day: {
        type: Date,
        default: () => new Date()
      },
    ]
});

// adds a dynamically-created property to schema


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;