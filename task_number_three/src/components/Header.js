import React from 'react';
import HeaderToolbarLogin from './HeaderToolbarLogin';
import HeaderToolbarNotLogin from './HeaderToolbarNotLogin';
import { Context } from '../App';

const Header = () => {
    const context = React.useContext(Context)
    return (
        <div className='header'>
            <div className='header-content'>
                <span className='header__title'>Neto Social</span>
                <div className='header__inputs'>
                    {
                        context.isToken ?
                        <HeaderToolbarLogin/>:
                        <HeaderToolbarNotLogin/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header