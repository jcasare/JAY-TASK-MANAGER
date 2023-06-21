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
  const existingTask = await Task.findById(req.params.id)
  const toggledTask = await Task.findByIdAndUpdate(
    req.params.id,
    [{ $set: { completed: { $not: '$completed' } } }],
    { new: true }
  )
  // const toggledTask = await Task.updateOne(
  //   { _id: req.params.id },
  //   { completed: !existingTask.completed },
  //   { new: true }
  // )
  console.log(toggledTask)
  res.status(200).json(toggledTask)
}
const updateTask = async (req, res) => {}
const deleteTask = async (req, res) => {}
module.exports = {
  createTask,
  fetchAllTasks,
  toggleTask,
  updateTask,
  deleteTask,
}
