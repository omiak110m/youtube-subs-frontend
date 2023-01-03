import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <HomePage/>
      </header>
    </div>
  );
}

export default App;
