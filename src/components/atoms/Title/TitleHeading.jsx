import React from 'react'

class TitleHeading extends React.Component {
    render() { 
        return (
            <>
                <h2 className='mb-0'>{this.props.title}</h2>
            </>
        );
    }
}
 
export default TitleHeading;