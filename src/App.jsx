
import './App.css'
import { Route, BrowserRouter as Router, Routes  } from 'react-router-dom'
import Home from "./Pages/Home"


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App
