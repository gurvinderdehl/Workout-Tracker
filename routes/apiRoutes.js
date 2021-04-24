const router = require('express').Router();
const Workout = require('../models/Workout');

router.get("/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});