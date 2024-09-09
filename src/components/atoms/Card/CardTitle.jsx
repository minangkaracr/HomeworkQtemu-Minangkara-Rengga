import React from 'react';
import {Card} from 'react-bootstrap';

class CardTittle extends React.Component {
    render() { 
        return (
            <Card.Title>{this.props.title}</Card.Title>
        );
    }
}
 
export default CardTittle;