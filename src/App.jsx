import "./App.css";
import Nav from "./components/Nav";
import Poll from "./components/poll";

function App() {
  return (
    <div className="min-h-[100vh] w-[99vw] bg-white">
      <Nav />
      <Poll />
    </div>
  );
}

export default App;
