import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <ProductList />
      </div>
      <AddProductForm />
    </div>
  );
}

export default App;
