import { TaskList } from './components/TasksList'
import image from './images/logoico.png'

function App() {

  return (
    <div className="App">
      <div className='task-app'>
        <div className='espoch-logo'>
          <img src={image} alt='Logo ESPOCH' className='espochLogo'/>
        </div>
      </div>
      <div className='tasks-cont'>
        <h1>My Tasks</h1>
        <TaskList />
      </div>
    </div>
  )
}

export default App
