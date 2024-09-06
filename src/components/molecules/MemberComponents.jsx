import React from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

class MemberComponent extends React.Component {
    render() { 
        return (
            <>
            <Container className='align-items-center'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h2 className='mb-0'>Members</h2>
                    <h3 className='mb-0'>See All</h3>
                </div>
                <Card className='my-2'>
                    <Card.Body>
                        <Row>
                            <div className='col-1'>
                                <img src="https://i.pinimg.com/originals/21/69/41/2169412c6b7176df0ca3dddc1edae49a.jpg" alt="img" className='w-100' style={{ maxHeight: "100px", borderRadius: "100%"}}/>
                            </div>
                            <div className='col align-content-center'>
                                <h5>Organizers</h5>
                                <p>Adhy Wardana and 4 Others.</p>
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