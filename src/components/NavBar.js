import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div>
        <Nav>
            <Nav.Link className='nav-item active' as={NavLink} to='/' exact>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/deaths'>Deaths</Nav.Link>
            <Nav.Link as={NavLink} to='/ceremonies'>Ceremonies</Nav.Link>
        </Nav>
        </div>
        )
}

export default NavBar;



      
   



