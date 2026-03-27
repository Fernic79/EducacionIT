
import './css/App.css';
import Navegacion from './componentes/Navegacion';
import Footer from './componentes/Footer';
import Mensaje from './componentes/Mensaje';

function App() {
  return (
    <div className="App">
      <Navegacion />
      <header className="App-header">
        <Mensaje />
      </header>
      <Footer />
    </div>
  );
}

export default App;
