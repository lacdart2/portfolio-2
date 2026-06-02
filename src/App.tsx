import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CSSFrameworks from './pages/CSSFrameworks'
import SemesterProject2 from './pages/SemesterProject2'
import Holidaze from './pages/Holidaze'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/css-frameworks" element={<CSSFrameworks />} />
        <Route path="/semester-project-2" element={<SemesterProject2 />} />
        <Route path="/holidaze" element={<Holidaze />} />
      </Routes>
    </BrowserRouter>
  )
}