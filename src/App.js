import "./styles/App.css";
import { Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import Newjob from "./pages/Newjob";
import Login from "./pages/Login";
import Signupcompany from "./pages/Signupcompany";
import Detailcompany from "./pages/Detailcompany";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="background">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/newjob" element={<Newjob />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signupcompany" element={<Signupcompany />} />
          <Route path="/detailcompany" element={<Detailcompany />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
