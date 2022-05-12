import React from 'react';
import TextField  from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Context } from '../App';

const HeaderToolbarNotLogin = () => {
    const context = React.useContext(Context)
    const [field, setField] = React.useState({user: '', password: ''});

    function handleChange(event) {
        setField(prev => ({...prev, [event.target.name]: event.target.value}))
    };

    function handleClick() {
        try {
            fetch('http://localhost:7070/auth', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'}, 
                body: JSON.stringify({login: field.user, password: field.password})
            }).then(res => res.json()).then(res => {
                if (!res.message) {
                    window.localStorage.setItem('token', res.token);
                    context.setIsToken(true);
                } else {
                    alert(res.message)
                    throw new Error(res.message)
                }
            })
        } catch (error) {
            alert('Ошибка авторизации!')
            console.log(error);
        }
        setField({user: '', password: ''})
    }

    return (
        <>
            <div className='header__input-item'>
                <TextField 
                    label='Username' 
                    className='input'
                    value={field.user}
                    name='user'
                    onChange={handleChange}
                    variant="standard"
                />
            </div>
            <div className='header__input-item'>
                <TextField 
                    label='Password'
                    type='password' 
                    className='input'
                    value={field.password}
                    name='password'
                    onChange={handleChange}
                    variant="standard"
                />
            </div>
            <div className='header__input-item'>
                <Button 
                    variant="text"
                    className='header__button'
                    onClick={handleClick}
                >Login</Button>
            </div>
        </>
    );
}

export default HeaderToolbarNotLogin