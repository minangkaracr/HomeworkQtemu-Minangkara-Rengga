import React from 'react'
import Nav from 'react-bootstrap/Nav';

class NavLinkComponent extends React.Component {
    render() { 
        return (
            <>
                <Nav.Link href={"/"+this.props.link}>{this.props.titleLink}</Nav.Link>
            </>
        );
    }
}
 
export default NavLinkComponent;