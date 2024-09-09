import React from 'react'
import Nav from 'react-bootstrap/Nav';
import NavLinkComponent from '../../atoms/Nav/NavLinkComponent';

class NavLink extends React.Component {
    render() { 
        return (
            <>
                <Nav className="me-auto row d-flex justify-content-between">
                    <div className="col-8 d-flex">
                        <NavLinkComponent
                            link="create"
                            titleLink="Create Meetup"
                        />
                        <NavLinkComponent
                            link="features"
                            titleLink="Explore"
                        />
                    </div>
                    <div className="col-2 d-flex justify-content-end">
                        <NavLinkComponent
                            link="login"
                            titleLink="Login"
                        />
                    </div>
                </Nav>
            </>
        );
    }
}
 
export default NavLink;