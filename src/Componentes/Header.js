import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <header>
            <div className='nav-wrapper light-blue darken-2'>
                <a className='brand-logo'>{props.titulo}</a>
            </div>
        </header>
    );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
export default Header; 