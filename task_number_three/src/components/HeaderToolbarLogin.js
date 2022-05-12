import React from 'react';
import { Button } from 'react-bootstrap';

const HeaderToolbarLogin = () => {
  const [user, setUset] = React.useState({});
  
  async function fetchingData() {
    fetch('http://localhost:7070/private/me', {
      method: 'GET',
      headers: {'Authorization': `Bearer ${window.localStorage.getItem('token')}`},
    }).then(res => res.json()).then(res => setUset(res))
  }

  React.useEffect(() => {
    fetchingData()
  }, []);

  return (
    <div className='header-toolbar'>
        <span className='header-toolbar__title'>{`Hello, ${user.name}`}</span>
        <div className='header__avatar'>
            <img
                className='avatar active'
                src={user.avatar} 
                alt='Aватар'
            />
        </div>
        <Button 
          variant="danger"
          onClick={() => {
            window.localStorage.clear();
            window.location.reload() // для разлогирования, чтобы не показывались посты
          }}
        >Logout</Button>
    </div>
  )
}

export default HeaderToolbarLogin