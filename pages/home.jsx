import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
function Home() {
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

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setUser(decoded);
    }
  }, [token]);
  return (
    <div>
      {" "}
      {data.map((Student) => (
        <div key={Student.MaSV}>
          <h2>{Student.St_Fullname}</h2>
        </div>
      ))}
      {user ? (
        <div>
          <p>Welcome</p>
          <p>Your role: {user.role}</p>
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}

export default Home;
