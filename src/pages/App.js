import "../styles/App.css";
import Home from "../components/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <Home />
      <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
