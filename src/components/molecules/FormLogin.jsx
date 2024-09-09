import React from 'react';
import Button from 'react-bootstrap/esm/Button';
// import Row from 'react-bootstrap/Row';
import {Form} from 'react-bootstrap';

class FormLogin extends React.Component {
    constructor(){
        super()
        this.state = {
            username: "-",
            password: "-",
            house: ["BSD", "palmerah"]
        }
    }

    getUsername(){
        return this.state.username
    }

    getData(){
        return (
            {
                "username": this.state.username,
                "house": this.state.house
            }
        )
    }

    changeUsername = () =>{
        let colHouse = this.state.house;
        let newHouse = "tuban";
        colHouse.push(newHouse);
        this.setState({
            username: "Minangkara",
            house: colHouse
        })
    }

    handleInputUsername = (e) => {
        this.setState({
            username: e
        })
    }
    
    handleInputPassword = (e) => {
        this.setState({
            password: e
        })
    }

    handleInputForm = (e) => {
        e.preventDefault()
        let username = e.target.username.value
        let password = e.target.password.value
        // console.log("Username: "+e.target.username.value+" | Password: "+e.target.password.value)
        // this.handleInputUsername(username)
        this.setState({
            username:username,
            password:password
        })
        // this.handleInputPassword(password)
    }

    render() { 
        return (
            <>
                {/* <div className='container'>
                    <h4>Try to Change Data</h4>
                    <Row>
                        <div className='col-2'>
                            <Button variant="primary" onClick={this.changeUsername}>Change Username</Button>
                        </div>
                        <div className='col align-content-center'>
                            <div>Username: {this.getData().username} and house: {this.state.house}</div>
                        </div>
                    </Row>
                    <p>Password: {this.state.password}</p>
                    <p>Status: {this.props.status}</p>
                </div> */}
                <div className='container my-2'>
                    <Form onSubmit={e=> this.handleInputForm(e)}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            {/* <Form.Control type="text" placeholder="Enter username" onChange={e=> this.handleInputUsername(e)}/> */}
                            <Form.Control type="text" placeholder="Enter username"/>
                            <Form.Text className="text-muted">
                                We'll never share your username with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <h2>Username: {this.state.username}</h2>
                    <h2>Password: {this.state.password}</h2>
                </div>
            </>
        );
    }
}
 
export default FormLogin;