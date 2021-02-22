import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

function Sidebar() {
    return (
        <div className="sidebar" >
            <div className="sidebar-wrapper">
                <p>My React Components</p>
                <hr />
                <Nav vertical>
                    <NavItem>
                        <NavLink
                            href="#"
                        >
                            <i className="fas fa-blog" />
                            <p>{'Buttons'}</p>
                            
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Grid System</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Panels</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Sweet Alert</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Notifications</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Icons</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Typography</NavLink>
                    </NavItem>
                </Nav>
            </div>
        </div>
    )
}

export default Sidebar
