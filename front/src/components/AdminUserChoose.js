import React, { useState } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../img/LOGO_CLASSIQUE_FOND TRANSPARENT_400X400.png';
import { Link } from 'react-router-dom';

    const AdminUserChoose = (props) => {
        const [collapsed, setCollapsed] = useState(true);
        const toggleNavbar = () => setCollapsed(!collapsed);
        return (
        <div style={{textAlign:"center"}}>
        <Nav>   
        <NavItem>
        <NavLink tag={Link} to="/User">Utilisaeur Freelance</NavLink>
        </NavItem>
        <NavItem className="burgerNav">
        <NavLink tag={Link} to="/Admin">Utilisaeur Administraeur</NavLink>
        </NavItem>
        </Nav>
            <img src = {logo} alt='logo'/>
        </div>

  );
}
export default AdminUserChoose;
