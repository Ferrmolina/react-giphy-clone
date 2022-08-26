import { useState } from 'react';
import ListOfGifs from './components/ListOfGifs';
import './styles/App.scss';

function App() {
  const [keyword, setKeyword] = useState('');
  const [explicitContent, setExplicitContent] = useState(false);

  return (
    <div className="app">
      <header className="app-header">
        <input 
          type="text" 
          placeholder='Search a gif...'
          onChange={(ev)=> setKeyword(ev.target.value)}/>
          <div>
            <input 
              type="checkbox" 
              id="filter-explicit"
              checked={explicitContent}
              onChange={(ev) => setExplicitContent(ev.target.value)} />   
            <label htmlFor="filter-explicit">Filter explicit content</label>
          </div>
      </header>
      <main className="app-main">
        <ListOfGifs keyword={keyword} explicitContent={explicitContent} />
      </main>
      <footer className="app-footer">
        Made by Fmolina | <a href="https://github.com/Ferrmolina/react-switch-theme" target='blank'>View source code</a>
      </footer>
    </div>
  );
}

export default App;
