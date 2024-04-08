import "./App.css";
import Login from "./Login";
import background from "./assets/dep2.jpg";

function App() {
  return (
    <div
      className="text-white h-[90vh] w-[80vw] flex justify-center items-center bg-cover"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Login />
    </div>
  );
}

export default App;
