import React from 'react'
import TitleHeading from '../atoms/Title/TitleHeading';
import LastHeading from '../atoms/Title/LastHeading';

class SubTitle extends React.Component {
    render() { 
        return (
            <>
                <div className='d-flex justify-content-between align-items-center py-2'>
                    <TitleHeading title={this.props.title}/>
                    <LastHeading lastTitle={this.props.lastTitle}/>
                </div>
            </>
        );
    }
}
 
export default SubTitle;