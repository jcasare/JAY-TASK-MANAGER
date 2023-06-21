import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { useFormik } from 'formik'
import { toggleTask } from '../redux/actions/taskActions'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const Task = ({ task }) => {
  const [editing, setEditing] = useState(false)
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      selectedTask: task.task,
    },
  })

  return (
    <li
      className={`task ${task.completed ? 'completed-task' : ''}`}
      onClick={async () => {
        dispatch(toggleTask(task))
      }}
    >
      <span style={{ display: editing ? 'none' : '' }}>{task.task}</span>
      <form>
        <input type="text" {...formik.getFieldProps('selectedTask')} />
      </form>
      <FontAwesomeIcon
        icon={faTrashCan}
        beatFade
        style={{ float: 'right', padding: '5px', marginRight: '5px' }}
      />
      <FontAwesomeIcon
        icon={faPenToSquare}
        beatFade
        style={{ float: 'right', padding: '5px', marginRight: '5px' }}
        onClick={() => setEditing((prevState) => !prevState)}
      />
    </li>
  )
}
export default Task
