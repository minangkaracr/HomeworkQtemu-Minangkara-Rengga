import React from 'react'

class LastHeading extends React.Component {
    render() { 
        return (
            <>
                <h5 className='mb-0'>{this.props.lastTitle}</h5>
            </>
        );
    }
}
 
export default LastHeading;