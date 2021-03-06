const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

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
}, { toJSON: { 
    
    virtuals: true,
    getters: true
},
     id: false

});

WorkoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((ttl, exc) => {
        return ttl + exc.duration
    }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;