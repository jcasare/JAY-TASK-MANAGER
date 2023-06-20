const express = require('express')
const router = express.Router()

const {
  createTask,
  fetchAllTasks,
  fetchSingleTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasks')

router.route('/').get(fetchAllTasks).post(createTask)
router.route('/:id').get(fetchSingleTask).patch(updateTask).delete(deleteTask)
module.exports = router
