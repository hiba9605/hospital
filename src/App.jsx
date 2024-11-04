import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "../components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../components/Home";


function App() {
  return (
    <>
      <Router>
        <div className="w-full min-h-screen flex flex-col bg-neutral-50 text-neutral-600">
          {/* Navbar */}
          <Navbar/>
          {/* navbar */}

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

          {/* Footer */}
          {/* <Footer /> */}
          

        </div>
      </Router>
    </>
  )
}

export default App
