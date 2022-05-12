import React from 'react';
import { Context } from '../context/context';

const ListItem = ({ children, id }) => {
  const curUser = React.useContext(Context);
  return (
    <li className='list__item' onClick={() => curUser.userСhoice(id)}>{children}</li>
  )
}

export default ListItem