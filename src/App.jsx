import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
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
      console.log("k co token");
    }
  }, []);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/Student/getAll",
          {
            headers: {
              authorization: `"Bearer ${token}"`,
              "Content-Type": "application/json",
            },
          }
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [token]);
  return (
    <div className="App">
      <h1>Login with Google</h1>

      <button onClick={handleLogin}>Login with Google</button>
      {data.map((Student) => (
        <div key={Student.MaSV}>
          <h2>{Student.St_Fullname}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
