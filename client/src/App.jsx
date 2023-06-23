import './styles.css'

import Header from './components/Header'
import TasksForm from './components/TasksForm'
import Tasks from './components/Tasks'
function App() {
  return (
    <div>
      <Header />
      <TasksForm />
      <Tasks />
    </div>
  )
}

export default App
