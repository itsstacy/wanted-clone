import "./styles/App.css";
import { Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="background">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
