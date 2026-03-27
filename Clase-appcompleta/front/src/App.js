import logo from './assets/logo.svg';
import './css/App.css';
import Saludo from './helps/saludo';
import Navegacion from './componentes/Navegacion';
import Footer from './componentes/Footer';
import Home from './pages/Home';
//traemos el enrutador de rutas que usaremos
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navegacion />

      {/* Definimos nuestras rutas usando el componente Routes y Route */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Saludo />
      </header>
      <Footer />
    </div>
  );
}

export default App;
