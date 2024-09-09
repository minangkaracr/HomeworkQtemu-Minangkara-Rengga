import React from 'react'
import { Container, Card } from 'react-bootstrap';
import SubTitle from './SubTitle';
import CardTittle from '../atoms/Card/CardTitle';
import CardSub from '../atoms/Card/CardSub';
import CardText from '../atoms/Card/CardBody';

class ContentInfo extends React.Component {
    render() { 
        return (
            <>
                <Container>
                    <SubTitle title={this.props.title}/>
                    <Card className='px-4 py-4'>
                        <CardTittle title={this.props.cardTitle}/>
                        <CardSub sub={this.props.sub}/>
                        <CardText
                            desc={this.props.desc}
                        />
                    </Card>
                </Container>
            </>
        );
    }
}
 
export default ContentInfo;