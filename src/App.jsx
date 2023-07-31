import { useState } from 'react'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <nav className='nav' class="flex justify-between items-center">
      <h1>My Tinerary</h1>
      <ul class="flex justify-around items-center">
        <li class="p-2">Home</li>
        <li class="p-2">Cities</li>
        <li class="flex flex-row p-2"><a class="flex flex-row items-center bg-white rounded-sm py-1 px-2.5" href="#"><svg class="h-4 w-4 text-indigo-500 mr-2"  width="3" height="3" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="7" r="4" />  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>Login</a></li>
      </ul>
    </nav>
      {/* <h1>My Tinerary</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
