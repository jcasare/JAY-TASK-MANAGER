import { useFormik } from 'formik'
import { createTask } from '../redux/actions/taskActions'
import { useDispatch } from 'react-redux'
import { Toaster, toast } from 'react-hot-toast'
const TasksForm = () => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      newTask: '',
    },
    onSubmit: async (values, { resetForm }) => {
      if (!values.newTask) {
        toast.error('No task entered')
        return
      }
      const task = { newTask: values.newTask }
      await dispatch(createTask(task))
      resetForm()
    },
  })

  return (
    <>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
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
    </>
  )
}
export default TasksForm
