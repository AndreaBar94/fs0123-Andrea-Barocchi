import logo from './logo.svg';
import './App.css';
import ButtonComponent from './Components/ButtonComponent';
import ImageComponent from './Components/ImageComponent';

function App() {
  return (
    <div className="App">
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
        <ButtonComponent id="btn" content="Sono un bottone"/>
        <ImageComponent alt="image default" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" width="600px"/>
      </header>
    </div>
  );
}

export default App;
