import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks } from '../redux/actions/taskActions'
import Task from './Task'
const Tasks = () => {
  const tasks = useSelector((state) => state.tasks.tasks)
  const loading = useSelector((state) => state.tasks.loading)
  const error = useSelector((state) => state.tasks.error)
  const dispatch = useDispatch()
  const tasksArray = Array.from(tasks)
  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])
  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <article className="grid">
      <ul>
        {tasksArray.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </ul>
    </article>
  )
}
export default Tasks
