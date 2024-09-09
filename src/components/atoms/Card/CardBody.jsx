import React from 'react';
import {Card} from 'react-bootstrap';

class CardText extends React.Component {
    render() { 
        return (
            <Card.Text>{this.props.desc}</Card.Text>
        );
    }
}
 
export default CardText;