import './App.css';
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import { BrowserRouter } from 'react-router-dom' 
import Routing from './routes'

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </div>
  );
}

export default App;
