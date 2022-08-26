import { useState } from 'react';
import { Link } from 'wouter';
import ListOfGifs from './components/ListOfGifs';
import './styles/App.scss';

function App() {
  const [keyword, setKeyword] = useState();

  return (
    <div className="app">
      <header className="app-header">
        <Link to='/'>
          <a href="/">
            <img src="./logo.gif" alt='Giphy Logo'/>
          </a>
        </Link>
        <input 
          type="text" 
          placeholder='Search all the GIFs'
          onChange={(ev)=> setKeyword(ev.target.value)}/>
      </header>
      <main className="app-main">
        <ListOfGifs keyword={keyword} />
      </main>
      <footer className="app-footer">
        Made by Fmolina | <a href="https://github.com/Ferrmolina/react-giphy-clone" target='blank'>View source code</a>
      </footer>
    </div>
  );
}

export default App;
