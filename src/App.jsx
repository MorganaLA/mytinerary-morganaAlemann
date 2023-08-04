import './App.css'
import Main from './layouts/Main'
import 'tailwindcss/tailwind.css';
import Index from './pages/Index/Index';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Main>
        <Index />
      </Main>
    </>
  )
}

export default App
