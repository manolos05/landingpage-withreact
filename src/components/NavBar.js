import React from 'react';

const NavItem = () => {
    const navItems = ['Home', 'About', 'Services', 'Contact'];
    return (
        <ul className='navbar-nav align-items-center'>
            {navItems.map((item, index) => (
                <li className='nav-item active' key={index}>
                    <a className='nav-link text-white-50' href='#'>
                        {item}
                    </a>
                </li>
            ))}

        </ul>
    );
};

const NavBar = () => {
    return (
        <div>
            <nav class='navbar navbar-expand-md bg-dark'>
                <div className='container-fluid'>
                    <a className='navbar-brand text-white' href='#'>
                        Start Bootstrap
                    </a>
                    <button
                        className='navbar-toggler bg-secondary'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div
                        className='collapse navbar-collapse justify-content-end'
                        id='navbarSupportedContent'
                    >
                        <NavItem />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;