import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Joyce Turismo
        </p>
        <a
          className="App-link"
          href="http://www.joicetur.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="App-link">Conheça nosso site</p>
        </a>
      </header>
    </div>
  );
}

export default App;
