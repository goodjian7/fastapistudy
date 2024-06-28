import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import QuestionCreate from './pages/QuestionCreate'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/detail/:question_id" element={<Detail/>}/>
      <Route path="/question-create" element={<QuestionCreate/>}/>
    </Routes>      
  )
}

export default App
