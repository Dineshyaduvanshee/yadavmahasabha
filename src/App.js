import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Join from './pages/Join';
import About from './pages/About';
import Footer from './pages/Footer';
function App() {
  return (
    <Router>
      <Header />
      <div className="pt-20"> {/* add top padding to avoid content under navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About/>} />
          <Route path="/join" element={<Join />} />        
          {/* <Route path="/footer" element={<Footer />} /> */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
