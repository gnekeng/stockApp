import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <ProductList />
      </div>
    </div>
  );
}

export default App;
