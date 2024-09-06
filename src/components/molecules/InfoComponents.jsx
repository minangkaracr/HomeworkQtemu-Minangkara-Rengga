import React from 'react'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

class InfoComponent extends React.Component {
    render() { 
        return (
            <>
            <Container>
                <Row className='py-2'>
                    <h2>Next MeetUp</h2>
                </Row>
                <Card className='px-4 py-4'>
                    <Card.Title>Awesome meetup and event</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">25 January 2019</Card.Subtitle>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum bibendum diam, sit amet tristique ante sollicitudin a. Vestibulum non ipsum nisi. In eu neque non diam sodales vestibulum vitae eget nibh. In in rhoncus enim, in posuere lorem. Mauris interdum sem mollis, imperdiet mi sed, sollicitudin enim. Proin aliquam est pharetra magna pellentesque laoreet. Ut et egestas felis, eget fringilla neque.
                    </Card.Text>
                </Card>
            </Container>
            <Container>
                <Row className='py-2'>
                    <h2>About MeetUp</h2>
                </Row>
                <Row >
                    <p>Come and meet other developer interested in the JavaScript and it's library in the Greater Jakarta Area</p>
                    <p><strong>Twitter: </strong>@JakartaJS and we use the hashtag #jakartajs</p>
                </Row>
            </Container>
            </>
        );
    }
}
 
export default InfoComponent;