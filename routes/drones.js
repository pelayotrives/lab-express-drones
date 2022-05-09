const { response } = require('express');
const express = require('express');
const droneModel = require("../models/Drone.model");
const router = express.Router();
// require the Drone model here

router.get('/drones', (req, res, next) => {
  
  droneModel.find()
  .then((response)=>{
    res.render("drones/list.hbs",{
      droneList: response
    })

  })
  .catch((err)=>{
    next(err)
  })
});

router.get('/drones/create', (req, res, next) => {
  res.render("drones/create-form.hbs")
});

router.post('/drones/create', (req, res, next) => {
  droneModel.create({
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  })
  .then((response) => {
    res.redirect("/drones")
  })
  .catch((err) => {
    res.redirect("/drones/create")
    next(err)
  })
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
