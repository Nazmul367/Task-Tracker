import { useState }from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appoinment',
      day: 'Feb 5th at 2.30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Doctors Appoinment 2',
      day: 'Feb 5th at 2.30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Doctors Appoinment 3',
      day: 'Feb 5th at 2.30pm',
      reminder: false
    },
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder }: task )
    )
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {
        showAddTask && <AddTask onAdd={addTask}/>
      }
      {
        tasks.length > 0 ? <Tasks tasks={tasks} onDelete={onDelete} onToggle={toggleReminder}/> : 'There is no task'
      }
    </div>
  );
}

export default App;
