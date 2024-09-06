import React from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

class ProfileComponent extends React.Component {
    render() { 
        return (
            <>
            <div className='container'>
                <div className='row py-4'>
                    <div className='col-2 align-content-center'>
                        <img 
                            src="https://i.pinimg.com/originals/21/69/41/2169412c6b7176df0ca3dddc1edae49a.jpg" 
                            alt="foto"
                            className='w-100'/>
                    </div>
                    <div className='col'>
                        <div className='row'>
                            <h2>Hacktiv8 Meet Up</h2>
                        </div>
                        <div className='row'>
                            <div className='col-2 d-flex align-contents-center'>
                                <h4 className='mb-0 py-1'>Location</h4>
                            </div>
                            <div className='col'>
                                <h4 className='mb-0 py-1'>Jakarta, Indonesia</h4>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-2'>
                                <h4 className='mb-0 py-1'>Members</h4>
                            </div>
                            <div className='col'>
                                <h4 className='mb-0 py-1'>1078</h4>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-2'>
                                <h4 className='mb-0 py-1'>Organizers</h4>
                            </div>
                            <div className='col'>
                                <h4 className='mb-0 py-1'>Adhy Wardana</h4>
                            </div>
                        </div>
                        <div className='row py-1'>
                            <div className='col-2 px-4'>
                                <Row>
                                    <Button variant="secondary">Join Us</Button>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}
 
export default ProfileComponent;