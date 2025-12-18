import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from "sonner";
import Home from './Pages/Home';
import Services from './Pages/Services';
import Footer from './Components/Footer';
import Tools from './Pages/Tools';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import CalculatorPage from './Pages/CalculatorPage';

function App() {
  return (
    <div>
      <Router>
      <Toaster richColors position="top-right" />
      <Navbar></Navbar>
      
        <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/calculator" element={<CalculatorPage></CalculatorPage>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/tools" element={<Tools></Tools>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  )
}

export default App;
