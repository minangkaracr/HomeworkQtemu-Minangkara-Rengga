import React from 'react'

class NavBrandComponent extends React.Component {
    render() { 
        return (
            <>
                <strong>{this.props.title}</strong>
            </>
        );
    }
}
 
export default NavBrandComponent;