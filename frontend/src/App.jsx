import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import QuestionCreate from './pages/QuestionCreate'
import Layout from './pages/Layout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="detail/:question_id" element={<Detail/>}/>
        <Route path="question-create" element={<QuestionCreate/>}/>
      </Route>
    </Routes>      
  )
}

export default App
