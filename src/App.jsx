import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SigninPage from "../pages/Signin";
import Home from "../pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<SigninPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
