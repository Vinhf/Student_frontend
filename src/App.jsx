import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RoleProvider } from "../ContextRole";
import SigninPage from "../pages/Signin";
import Home from "../pages/home";

function App() {
  return (
    <RoleProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<SigninPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </RoleProvider>
  );
}

export default App;
