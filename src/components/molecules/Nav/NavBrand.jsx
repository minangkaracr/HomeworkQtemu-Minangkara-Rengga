import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavBrandComponent from '../../atoms/Nav/NavBrandComponent';

class NavBrand extends React.Component { 
    render() { 
        return (
            <Navbar.Brand href="/">
                <NavBrandComponent
                    title={this.props.title}
                />
            </Navbar.Brand>
        );
    }
}
 
export default NavBrand;