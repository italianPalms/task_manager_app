

const express = require('express')
const router = express.Router();

const {getAllTasks} = require('./controllers/tasks')

router.route('/').get((req, res) => {
    res.send('all items')
})

module.export = router