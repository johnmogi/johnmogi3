import React from 'react';
import {
  MDBContainer,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
} from 'mdbreact';

export class AboutPage extends React.Component {
    render() {
        return (
            <div id="home">
  <MDBView src='https://mdbootstrap.com/img/Photos/Others/img%20%2848%29.jpg'>
          <MDBMask className='rgba-black-light' />
          <MDBContainer
            className='d-flex justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', paddingTop: '17rem' }}
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center'>
                <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '>
                  מידע נוסף אודותיי
                </h1>
                <hr className='hr-light my-4' />
                <h5 className='text-uppercase mb-4 white-text '>
                  <strong>יונתן מוגי</strong>
                </h5>
                <MDBBtn outline color='white'>
                  מעצב דיגיטל רב תחומי
                </MDBBtn>
                <MDBBtn outline color='white'>
                  מתכנת פול סטאק
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>


</div>
        )
    }
}