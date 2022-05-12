import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import PostList from './components/PostList';

export const Context = React.createContext();

// В проекте используются UI-библиотеки Material UI и React Bootstrap.

function App() {
  const [isToken, setIsToken] = React.useState(false);

  React.useEffect(() => {
    if (window.localStorage.getItem('token')) {
      setIsToken(true)
    }
  }, [])

  return (
    <Context.Provider value={{isToken, setIsToken}}>
      <div className="app">
        <Header/>
        <div className='content'>
          {
            !isToken ? 
            <Banner/> 
            :
            <PostList/> 
          }
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
