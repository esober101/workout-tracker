const router = express.Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
    Workout.find()
    .then(data => 
        res.json(data))
    .catch(err => 
        res.json(err));
});

router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(data => { 
        res.json(data) })
    .catch(err => 
        res.json(err));
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find()
    .then(data => 
        res.json(data))
    .catch(err => 
        res.json(err));
});

router.get("/api/workouts/range", (req, res) => {
    Workout.create({})
    .then(data => 
        res.json(data))
    .catch(err => 
        res.json(err));
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id, 
        { $push: { Workouts: body } },
        { new: true })
        .then(data => {
            res.json(data)
        }).catch(err => { 
            res.json(err) });
});

module.exports = router;