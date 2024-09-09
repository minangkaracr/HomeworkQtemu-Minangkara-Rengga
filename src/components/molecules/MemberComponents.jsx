import React from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import SubTitle from './SubTitle';

class MemberComponent extends React.Component {
    render() { 
        return (
            <>
            <Container className='align-items-center'>
                <SubTitle title="Members" lastTitle="See All"/>
                <Card className='my-2'>
                    <Card.Body>
                        <Row>
                            <div className='col-1'>
                                <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="img" className='w-100' style={{ maxHeight: "100px", borderRadius: "100%"}}/>
                            </div>
                            <div className='col align-content-center'>
                                <h5>Organizers</h5>
                                <p>Minangkara Rengga and 4 Others..</p>
                            </div>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
            </>
        );
    }
}
 
export default MemberComponent;