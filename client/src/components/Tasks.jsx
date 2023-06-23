import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, fetchTasks } from '../redux/actions/taskActions'
import { ALL_TASKS, ACTIVE_TASKS, DONE_TASKS } from '../redux/actions/types'
import Task from './Task'
import Tabs from './Tabs'
const Tasks = () => {
  const tasks = useSelector((state) => state.tasks.tasks)
  const currentTab = useSelector((state) => state.currentTab)
  const loading = useSelector((state) => state.tasks.loading)
  const error = useSelector((state) => state.tasks.error)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTasks())
  }, [])

  const fetchAllTasks = () => {
    if (currentTab === ALL_TASKS) {
      return tasks
    } else if (currentTab === ACTIVE_TASKS) {
      return tasks.filter((task) => !task.completed)
    } else if (currentTab === DONE_TASKS) {
      return tasks.filter((task) => task.completed)
    }
  }
  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }
  const clearDoneTasks = () => {
    tasks.forEach(({ completed, _id }) => {
      if (completed) {
        dispatch(deleteTask(_id))
      }
    })
  }
  return (
    <article className="grid">
      <div>
        <Tabs currentTab={currentTab} />

        {tasks.some((task) => task.completed) ? (
          <button
            onClick={clearDoneTasks}
            className="inline-flex float-right items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Clear Done Tasks?
          </button>
        ) : null}
      </div>
      <ul>
        {fetchAllTasks().map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </ul>
    </article>
  )
}
export default Tasks
