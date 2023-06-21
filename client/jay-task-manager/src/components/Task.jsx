// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faTrashCan,
//   faPenToSquare,
//   faUserPen,
// } from '@fortawesome/free-solid-svg-icons'
// import { useFormik } from 'formik'
// import { toggleTask } from '../redux/actions/taskActions'
// import { useDispatch } from 'react-redux'
// import { useState } from 'react'
// import React from 'react'
// const Task = ({ task }) => {
//   const [editing, setEditing] = useState(false)
//   const dispatch = useDispatch()
//   const formik = useFormik({
//     initialValues: {
//       selectedTask: task.task,
//     },
//     onSubmit: async (values) => {
//       console.log(values)
//     },
//   })

//   return (
//     <li className={`task ${task.completed ? 'completed-task' : ''}`}>
//       <span
//         style={{ display: editing ? 'none' : '' }}
//         className="task-text"
//         onClick={async () => {
//           dispatch(toggleTask(task))
//         }}
//       >
//         {task.task}
//       </span>
//       <form
//         onSubmit={formik.handleSubmit}
//         className="edit-form"
//         style={{ display: editing ? 'block' : 'none' }}
//       >
//         <div className="relative">
//           <input
//             className="edit-task bg-transparent text-lg text-white my-auto w-full border-b border-white pr-10"
//             type="text"
//             {...formik.getFieldProps('selectedTask')}
//           />
//           <FontAwesomeIcon
//             icon={faUserPen}
//             className="absolute right-0 top-0 mt-1"
//           />
//         </div>
//       </form>

//       <div className="task-icons float-right">
//         <FontAwesomeIcon
//           icon={faTrashCan}
//           beatFade
//           style={{ float: 'right', padding: '5px' }}
//         />
//         <FontAwesomeIcon
//           icon={faPenToSquare}
//           beatFade
//           style={{ float: 'right', padding: '5px' }}
//           onClick={() => setEditing((prevState) => !prevState)}
//         />
//       </div>
//     </li>
//   )
// }

// export default Task

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faTrashCan,
//   faPenToSquare,
//   faUserPen,
// } from '@fortawesome/free-solid-svg-icons'
// import { useFormik } from 'formik'
// import { toggleTask } from '../redux/actions/taskActions'
// import { useDispatch } from 'react-redux'
// import { useState } from 'react'
// import React from 'react'

// const Task = ({ task }) => {
//   const [editing, setEditing] = useState(false)
//   const dispatch = useDispatch()
//   const formik = useFormik({
//     initialValues: {
//       selectedTask: task.task,
//     },
//     onSubmit: async (values) => {
//       console.log(values)
//     },
//   })

//   return (
//     <li className={`task ${task.completed ? 'completed-task' : ''}`}>
//       <span
//         style={{ display: editing ? 'none' : '' }}
//         className="task-text"
//         onClick={async () => {
//           dispatch(toggleTask(task))
//         }}
//       >
//         {task.task}
//       </span>
//       <form
//         onSubmit={formik.handleSubmit}
//         className="edit-form"
//         style={{ display: editing ? 'block' : 'none' }}
//       >
//         <div className="relative">
//           <input
//             className="edit-task bg-transparent text-lg text-white my-auto w-full border-b border-white pr-10"
//             type="text"
//             {...formik.getFieldProps('selectedTask')}
//           />
//           <FontAwesomeIcon
//             icon={faUserPen}
//             className="absolute right-0 top-0 mt-1"
//           />
//         </div>
//       </form>

//       {!editing && (
//         <div className="task-icons float-right">
//           <FontAwesomeIcon
//             icon={faTrashCan}
//             beatFade
//             style={{ float: 'right', padding: '5px' }}
//           />
//           <FontAwesomeIcon
//             icon={faPenToSquare}
//             beatFade
//             style={{ float: 'right', padding: '5px' }}
//             onClick={() => setEditing((prevState) => !prevState)}
//           />
//         </div>
//       )}
//     </li>
//   )
// }

// export default Task

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTrashCan,
  faPenToSquare,
  faUserPen,
} from '@fortawesome/free-solid-svg-icons'
import { useFormik } from 'formik'
import { toggleTask, updateTask } from '../redux/actions/taskActions'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import React from 'react'

const Task = ({ task }) => {
  const [editing, setEditing] = useState(false)
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      selectedTask: task.task,
    },
    onSubmit: async (values, { resetForm }) => {
      const editedTask = { editedTask: values.selectedTask }
      //   console.log(editedTask, task._id)
      await dispatch(updateTask(task._id, editedTask))
      setEditing((prevState) => !prevState)
      resetForm()
    },
  })

  return (
    <li className={`task ${task.completed ? 'completed-task' : ''}`}>
      <span
        style={{ display: editing ? 'none' : '' }}
        className="task-text"
        onClick={async () => {
          dispatch(toggleTask(task))
        }}
      >
        {task.task}
      </span>
      <form
        onSubmit={formik.handleSubmit}
        className={`edit-form ${editing ? 'full-width' : ''}`}
        style={{ display: editing ? 'block' : 'none' }}
      >
        <div className="relative">
          <input
            className="edit-task bg-transparent text-lg text-white my-auto w-full border-b border-white pr-10"
            type="text"
            {...formik.getFieldProps('selectedTask')}
          />
          <FontAwesomeIcon
            icon={faUserPen}
            className={`absolute right-0 bottom-0 mb-1 mr-3 text-white cursor-pointer${
              editing ? 'ml-3' : 'hidden'
            }`}
            onClick={formik.handleSubmit}
          />
        </div>
      </form>

      {!editing && (
        <div className="task-icons float-right">
          <FontAwesomeIcon
            icon={faPenToSquare}
            beatFade
            style={{ float: 'right', padding: '5px' }}
            onClick={() => setEditing((prevState) => !prevState)}
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            beatFade
            style={{ float: 'right', padding: '5px' }}
          />
        </div>
      )}
    </li>
  )
}

export default Task
