import React from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import CardComponent from './CardComponents';

class MeetupComponent extends React.Component {
    render() { 
        return (
            <>
            <Container className='align-items-center my-2'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h2 className='mb-0'>Past Meetups</h2>
                    <h3 className='mb-0'>See All</h3>
                </div>
                <div className='my-2 px-2'>
                    <Row className='justify-content-between'>
                        <CardComponent/>
                        <CardComponent/>
                        <CardComponent/>
                        <CardComponent/>
                    </Row>
                </div>
            </Container>
            </>
        );
    }
}
 
export default MeetupComponent;