import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks } from '../redux/actions/taskActions'
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
  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <article className="grid">
      <div>
        <Tabs />
      </div>
      <ul>
        {tasks.map((task) => (
          <Task key={task._id} task={task} />
        ))}
      </ul>
    </article>
  )
}
export default Tasks
