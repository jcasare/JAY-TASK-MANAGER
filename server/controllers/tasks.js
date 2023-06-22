const Task = require('../model/Task')

const fetchAllTasks = async (req, res) => {
  const tasks = await Task.find({}).sort({ createdAt: -1 })
  res.status(200).json(tasks)
}

const createTask = async (req, res) => {
  currentDate = Date.now()
  const { newTask } = req.body
  const task = await Task.create({ task: newTask, createdAt: currentDate })
  await task.save()
  console.log(task)
  res.status(201).json(task)
}

const toggleTask = async (req, res) => {
  const toggledTask = await Task.findByIdAndUpdate(
    req.params.id,
    [{ $set: { completed: { $not: '$completed' } } }],
    { new: true }
  )
  console.log(toggledTask)
  res.status(200).json(toggledTask)
}
const updateTask = async (req, res) => {
  const {
    body: { editedTask },
    params: { id },
  } = req
  const updatedTask = await Task.findByIdAndUpdate(
    id,
    { task: editedTask },
    { new: true }
  )
  res.status(201).json(updatedTask)
}
const deleteTask = async (req, res) => {
  const deletedTask = await Task.findByIdAndDelete(req.params.id)
  res.status(204).json(deletedTask)
}
module.exports = {
  createTask,
  fetchAllTasks,
  toggleTask,
  updateTask,
  deleteTask,
}
