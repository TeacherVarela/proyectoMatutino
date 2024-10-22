import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from "./Navbar"
import { Login } from "./Login/login";
import { Registro } from "./Registro/Registro";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/registro' element={<Registro />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
