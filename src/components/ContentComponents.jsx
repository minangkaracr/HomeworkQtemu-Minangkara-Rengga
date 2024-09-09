import React from 'react'
import ProfileComponent from './molecules/ProfileComponents';
import InfoComponent from './molecules/InfoComponents';
import MemberComponent from './molecules/MemberComponents';
import MeetupComponent from './oganisms/MeetUpComponents';

class ContentComponent extends React.Component {
    render() { 
        return (
            <>
                <ProfileComponent/>
                <InfoComponent/>
                <MemberComponent/>
                <MeetupComponent/>
            </>
        );
    }
}
 
export default ContentComponent;