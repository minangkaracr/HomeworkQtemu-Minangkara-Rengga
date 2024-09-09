import React from 'react';
import {Card} from 'react-bootstrap';

class CardSub extends React.Component {
    render() { 
        return (
            <Card.Subtitle className="mb-2 text-muted"><strong>{this.props.countPeople}</strong> People went</Card.Subtitle>
        );
    }
}
 
export default CardSub;