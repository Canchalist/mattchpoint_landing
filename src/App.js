import logo2 from './mattchpoint2.png';
import logo from './qr.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header loading-background">
        <img style={{marginTop: "0vh"}} src={logo2} className="App-logo2" alt="logo" />
        <img src={logo} style={{marginTop: "0vw"}} className="App-logo zoom-image" alt="logo" />
      </header>
    </div>
  );
}

export default App;
