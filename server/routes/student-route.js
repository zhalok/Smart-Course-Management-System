const express = require('express');
const student_route_controller = require('../controllers/student-route-controller');
const student_route = express.Router();

student_route.post('/', student_route_controller.add_new_student);
student_route.get('/all', student_route_controller.get_all_students);

module.exports = student_route;
