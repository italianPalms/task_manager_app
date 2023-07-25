

const express = require('express')
const router = express.Router();

const {
    getAllTasks, 
    createTask, 
    getTask, 
    updateTask,
    deleteTask
} = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router

// overview of routes
// GET         - api/tasks         - get all tasks
// POST        - api/tasks         - create tasks
// GET         - api/tasks/:id     - get tasks
// PUT/PATCH   - api/tasks/:id     - update tasks
// DELETE      - api/tasks/:id     - delete taks 