const express = require("express");
const router = express.Router();
const { getTask, getAllTasks, updateTask, createTask, deleteTask } = require("../controllers/todo.controller")

router.route('/').get(getAllTasks).post(createTask)

router.route('/:id').get(getTask).put(updateTask).delete(deleteTask)
module.exports = router;