import { useState } from 'react'
import image from './images/logoico.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='task-app'>
        <div className='espoch-logo'>
          <img src={image} alt='Logo ESPOCH' className='espochLogo'/>
        </div>
      </div>
      <div className='task-list-cont'>
        <h1>My Tasks</h1>
      </div>
    </div>
  )
}

export default App
