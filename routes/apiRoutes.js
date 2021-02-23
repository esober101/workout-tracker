const express = require('express');
const router = express.Router();
const db = require("../models");


router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => 
        res.json(dbWorkout))
    .catch(err => 
        res.json(err));
});

router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
    .then(dbWorkout => { 
        res.json(dbWorkout) })
    .catch(err => 
        res.json(err));
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => 
        res.json(dbWorkout))
    .catch(err => 
        res.json(err));
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(params.id, 
        { $push: { exercises: body } },
        { new: true })
        .then(dbWorkout => {
            res.json(dbWorkout)
        }).catch(err => { 
            res.json(err) });
});

module.exports = router;