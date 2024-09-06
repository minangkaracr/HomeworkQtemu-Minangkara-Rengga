import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class CardComponent extends React.Component {
    render() { 
        return (
            <>
            <Card style={{ width: '18rem' }} className='mx-2'>
                <Card.Body>
                    <Card.Title>27 November 2017</Card.Title>
                    <Card.Text>
                        #39 JakartaJS April Meetup with BRI
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted"><strong>132 </strong>went</Card.Subtitle>
                    <Button variant="secondary">View</Button>
                </Card.Body>
            </Card>
            </>
        );
    }
}
 
export default CardComponent;