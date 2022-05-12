import React from 'react';
import './App.css';
import Details from './components/Details';
import List from './components/List';
import { Context } from './context/context';

function App() {
  const [usersArray, setUsersArray] = React.useState([]); //список всех юзеров
  const [isLoad, setIsLoad] = React.useState(true); // стейт на загрузку данных
  const [currentUser, setCurrentUser] = React.useState({user: [], id: 0}); // выбранный пользователь

  React.useEffect(() => {
    try {
      fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
        .then(res => res.json()).then(res => {setUsersArray(res); setIsLoad(false)})
    } catch (error) {
      alert('Ошибка!!!')
      console.log(error);
    }
  }, [])

  function userСhoice(id) {
    setCurrentUser({user: usersArray[id - 1], id: id});
  }

  return (
    <Context.Provider value={{userСhoice}}>
      {
      isLoad === true ? <span>Загрузка...</span> : 
      <div className="container">
        <List user={usersArray}/>
        {currentUser.user.length === 0 ? null : <Details info={currentUser.user}/>}
      </div>
      }
    </Context.Provider>
  );
}

export default App;
