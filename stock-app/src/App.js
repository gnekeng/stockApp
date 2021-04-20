import './App.css';
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import AddProductForm from './components/AddProductForm'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductList />
      <AddProductForm />
    </div>
  );
}

export default App;
