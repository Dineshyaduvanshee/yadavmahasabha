// import './App.css';
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Home from './pages/Home';
// import Join from './pages/Join';
// import About from './pages/About';
// import Footer from './pages/Footer';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <div className="pt-20">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/About" element={<About />} />
//           <Route path="/join" element={<Join />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;



import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './pages/Footer';
import LoginWrapper from './pages/LoginWrapper'; // ✅ New import
import Reels from './pages/Reels';

function App() {
  return (
    <Router>
      <Header />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/join" element={<LoginWrapper />} /> {/* ✅ Protected */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
