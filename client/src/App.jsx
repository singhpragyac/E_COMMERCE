import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from './pages/home.jsx'
import About from './pages/aboutus.jsx'
import Contact from './pages/contactus.jsx'
// import Cart from './pages/cartpage.jsx'

// import Footer from './components/layout/footer.jsx'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/aboutus" element={<About/>} />

        <Route path="/contactus" element={<Contact/>} />

        {/* <Route path="/cartpage" element={<Cartpage/>} /> */}
      </Routes>
    </>
  )
}

export default App
