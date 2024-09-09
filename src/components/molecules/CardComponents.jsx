import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardTittle from '../atoms/Card/CardTitle';
import CardText from '../atoms/Card/CardBody';
import CardSub from '../atoms/Card/CardSub';

class CardComponent extends React.Component {
    render() { 
        return (
            <>
            <Card style={{ width: '18rem' }} className='mx-2'>
                <Card.Body>
                    <CardTittle title={this.props.title}/>
                    <CardText desc={this.props.desc}/>
                    <CardSub countPeople={this.props.countPeople}/>
                    <Button variant="secondary">View</Button>
                </Card.Body>
            </Card>
            </>
        );
    }
}
 
export default CardComponent;