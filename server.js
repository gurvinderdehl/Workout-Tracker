const mongoose = require ("mongoose");

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    }