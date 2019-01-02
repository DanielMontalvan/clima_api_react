import React from 'react';


const Header = ( props) => {
    return (
        <header>
            <div className='nav-wrapper light-blue darken-2'>
                <a className='brand-logo'>{props.titulo}</a>
            </div>
        </header>
    );
}
export default Header; 