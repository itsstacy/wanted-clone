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
import Community from "./pages/Community";
import Mypage from "./pages/Mypage";
import Companypage from "./pages/Companypage";
import Edit from "./pages/Edit";


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="background">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/" element={<Detail />} />
          <Route path="/newjob" element={<Newjob />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signupcompany" element={<Signupcompany />} />
          <Route path="/detailcompany" element={<Detailcompany />} />
          <Route path="/community" element={<Community />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/companypage" element={<Companypage/>} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
