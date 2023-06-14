const express = require('express')
const router = express.Router();


const {
    getAlltasks,
    deleteTask,
    createTask,
    getTask,
    updateTask
} = require('../controllers/tasks')

//Route
router.route('/').get(getAlltasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)



module.exports = router