import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

function Sidebar() {
    return (
        <div className="sidebar" >
            <div className="sidebar-wrapper">
                <a href="#" className="simple-text logo-normal">My React Components</a>
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
                        <NavLink
                            href="#"
                        >
                            <i className="fa fa-grip-horizontal" />
                            <p>{'Grid System'}</p>
                            
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            href="#"
                        >
                            <i className="fas fa-solar-panel" />
                            <p>{'Panels'}</p>
                            
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            href="#"
                        >
                            <i className="fas fa-exclamation-triangle" />
                            <p>{'Sweet Alert'}</p>
                            
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            href="#"
                        >
                            <i className="fas fa-comment-dots" />
                            <p>{'Notifications'}</p>
                            
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            href="#"
                        >
                            <i className="fas fa-icons" />
                            <p>{'Icons'}</p>
                            
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            href="#"
                        >
                            <i className="far fa-keyboard" />
                            <p>{'Typography'}</p>
                            
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        </div>
    )
}

export default Sidebar
