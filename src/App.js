import { useState } from 'react';
import { Link, Route } from 'wouter';
import Details from './components/Details';
import ListOfGifs from './components/ListOfGifs';
import './styles/App.scss';

function App() {
  const [keyword, setKeyword] = useState();

  function handleChange(ev) {
    setKeyword(ev.target.value)
  }

  return (
    <div className="app">
      <header className="app-header">
        <Link to='/'>
          <img src="/logo.gif" alt='Giphy Logo'/>
        </Link>
        <div className='app-header-search'>
          <form>
            <input 
                name='s'
                type="text" 
                placeholder='Search all the GIFs'
                onChange={handleChange}
                />
                {
                  <Link to={`/search/${keyword}`}>
                    <img src="/search.svg" alt="Search logo" />
                  </Link>
                }
          </form>
        </div>
      </header>
      <main className="app-main">
        <Route path='/search/:keyword' component={ListOfGifs} />
        <Route path='/view/gif/:keyword' component={Details} />
      </main>
      <footer className="app-footer">
        Made by Fmolina | <a href="https://github.com/Ferrmolina/react-giphy-clone" target='blank'>View source code</a>
      </footer>
    </div>
  );
}

export default App;
