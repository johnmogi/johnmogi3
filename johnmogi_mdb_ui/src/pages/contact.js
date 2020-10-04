import React from 'react';
import {
  MDBContainer,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBCardBody,
  MDBAnimation,
  MDBCard,
  MDBInput
} from 'mdbreact';

export class ContactPage extends React.Component {
    render() {
        return (
            <div id="home">
  <MDBView src='https://images.pexels.com/photos/4398722/pexels-photo-4398722.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'>
          <MDBMask className='d-flex justify-content-center align-items-center gradient' />
          <MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
            className='mt-5  d-flex justify-content-center align-items-center'
          >
            <MDBRow>
              <MDBAnimation
                type='fadeInLeft'
                delay='.3s'
                className='white-text text-center text-md-left col-md-6 mt-xl-5 mb-5'
              >
                <h1 className='h1-responsive font-weight-bold'>
                  Sign up right now!
                </h1>
                <hr className='hr-light' />
                <h6 className='mb-4'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  repellendus quasi fuga nesciunt dolorum nulla magnam veniam
                  sapiente, fugiat! Commodi sequi non animi ea dolor molestiae,
                  quisquam iste, maiores. Nulla.
                </h6>
                <MDBBtn outline color='white'>
                  Learn More
                </MDBBtn>
              </MDBAnimation>

              <MDBCol md='6' xl='5' className='mb-4'>
                <MDBAnimation type='fadeInRight' delay='.3s'>
                  <MDBCard id='classic-card'>
                    <MDBCardBody className='white-text'>
                      <h3 className='text-center'>
                        <MDBIcon icon='user' /> Register:
                      </h3>
                      <hr className='hr-light' />
                      <MDBInput
                        className='white-text'
                        iconClass='white-text'
                        label='Your name'
                        icon='user'
                      />
                      <MDBInput
                        className='white-text'
                        iconClass='white-text'
                        label='Your email'
                        icon='envelope'
                      />
                      <MDBInput
                        className='white-text'
                        iconClass='white-text'
                        label='Your password'
                        icon='lock'
                        type='password'
                      />
                      <div className='text-center mt-4 black-text'>
                        <MDBBtn color='indigo'>Sign Up</MDBBtn>
                        <hr className='hr-light' />
                        <div className='text-center d-flex justify-content-center white-label'>
                          <a href='#!' className='p-2 m-2'>
                            <MDBIcon
                              fab
                              icon='twitter'
                              className='white-text'
                            />
                          </a>
                          <a href='#!' className='p-2 m-2'>
                            <MDBIcon
                              fab
                              icon='linkedin'
                              className='white-text'
                            />
                          </a>
                          <a href='#!' className='p-2 m-2'>
                            <MDBIcon
                              fab
                              icon='instagram'
                              className='white-text'
                            />
                          </a>
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
  
</div>
        )
    }
}