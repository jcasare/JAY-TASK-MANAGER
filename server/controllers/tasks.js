const Task = require('../model/Task')
const fetchAllTasks = async (req, res) => {
  res.send('jay')
}
const fetchSingleTask = async (req, res) => {}

const createTask = async (req, res) => {
  currentDate = Date.now()
  const { task } = req.body
  const newTask = await Task.create({ task, createdAt: currentDate })
  await newTask.save()
  res.status(201).json({ msg: ' task created', newTask })
}
const updateTask = async (req, res) => {}
const deleteTask = async (req, res) => {}
module.exports = {
  createTask,
  fetchAllTasks,
  fetchSingleTask,
  updateTask,
  deleteTask,
}
