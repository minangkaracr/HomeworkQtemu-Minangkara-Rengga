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
                            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" 
                            alt="foto"
                            className='w-100'/>
                    </div>
                    <div className='col'>
                        <div className='row'>
                            <h2><strong>Google Gamers Meet Up</strong></h2>
                        </div>
                        <div className='row'>
                            <div className='col-2 d-flex align-contents-center'>
                                <h4 className='mb-0 py-1'><strong>Location</strong></h4>
                            </div>
                            <div className='col'>
                                <h4 className='mb-0 py-1'>Jakarta, Indonesia</h4>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-2'>
                                <h4 className='mb-0 py-1'><strong>Members</strong></h4>
                            </div>
                            <div className='col'>
                                <h4 className='mb-0 py-1'>1.078</h4>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-2'>
                                <h4 className='mb-0 py-1'><b>Organizers</b></h4>
                            </div>
                            <div className='col'>
                                <h4 className='mb-0 py-1'>Minangkara Rengga</h4>
                            </div>
                        </div>
                        <div className='row py-1'>
                            <div className='col-2 px-4'>
                                <Row>
                                    <Button variant="success"><strong>Join Us</strong></Button>
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