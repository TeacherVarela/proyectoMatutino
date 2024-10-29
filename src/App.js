import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./Navbar/Navbar"
import { Login } from "./Login/Login"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/login" element={<Login />}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}
