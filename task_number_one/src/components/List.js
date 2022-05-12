import React from 'react'
import ListItem from './ListItem'

const List = ({ user }) => {
  return (
    <div className='list-block'>
        <ul className='list-block__list'>
            {user.map(el => (
                <ListItem id={el.id} key={el.id}>
                    {el.name}
                </ListItem>
            ))}
        </ul>
    </div>
  )
}

export default List