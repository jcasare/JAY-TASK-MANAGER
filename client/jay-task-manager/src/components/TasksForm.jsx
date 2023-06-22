import { useFormik } from 'formik'
import { createTask } from '../redux/actions/taskActions'
import { useDispatch } from 'react-redux'
const TasksForm = () => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      newTask: '',
    },
    onSubmit: async (values, { resetForm }) => {
      const task = { newTask: values.newTask }
      await dispatch(createTask(task))
      resetForm()
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task..."
        {...formik.getFieldProps('newTask')}
      />
      <div className="flex items-center justify-center">
        <button type="submit" className="submit-task">
          Add Task
        </button>
      </div>
    </form>
  )
}
export default TasksForm
