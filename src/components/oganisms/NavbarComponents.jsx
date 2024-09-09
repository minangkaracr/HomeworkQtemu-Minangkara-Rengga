import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavBrand from "../molecules/Nav/NavBrand";
import NavLink from "../molecules/Nav/NavLink";


class NavbarComponents extends React.Component {
    render() { 
        return (
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <div className="col-1">
                        <NavBrand
                            title="QTemu"
                        />
                    </div>
                    <div className="col-11">
                        <NavLink/>
                    </div>
                </Container>
            </Navbar>
        );
    }
}
 
export default NavbarComponents;