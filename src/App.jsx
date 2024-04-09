import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode"

function App() {
  const handleLogin = () => {
    window.location.href = "http://localhost:3000/auth/google";
  };

  const [token, setToken] = useState("");
  useEffect(() => {
    const tokenValue = Cookies.get("token");
    if (tokenValue) {
      setToken(tokenValue);
    } else {
      console.log("Không có token");
    }
  }, []);

  const [role, setRole] = useState("");

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwt_decode(token);
        if (decoded) {
          const userRole = decoded.payload.role;
          setRole(userRole);
        } else {
          console.error('Không thể giải mã token hoặc token không hợp lệ');
        }
      } catch (error) {
        console.error('Không thể giải mã token hoặc token không hợp lệ', error);
      }
    }
  }, [token]);

  let context;
  if (role === 'Student') {
    context = (
      <div className="App">
        <h1>Student</h1>
      </div>
    );
  } else if (role === 'Teacher') {
    context = (
      <div className="App">
        <h1>Teacher</h1>
      </div>
    );
  } else {
    context = (
      <div className="App">
        <h1>Login with Google</h1>
        <button onClick={handleLogin}>Login with Google</button>
      </div>
    );
  }

  return context;
}

export default App;
