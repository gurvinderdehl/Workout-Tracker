const mongoose = require ("mongoose");

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
            },
            name: {
                type: String,
            },
            weight: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            duration: {
                type: Number,
            },
            distance: {
                type: Number,
            }
        }
    ]
}, { toJSON: { virtuals: true } });

WorkoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((ttl, exc) => {
        return ttl + exc.duration
    }, 0);
});

module.exports = Workout;