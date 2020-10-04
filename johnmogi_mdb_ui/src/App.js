import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import {

} from 'mdbreact';
import './VideoBackgroundPage.css';
import { Header } from './header';
import { AboutPage } from './pages/about';
import { HomePage } from './pages/home';
import FooterPagePro from './footer';
import { ContactPage } from './pages/contact';

class VideoBackgroundPage extends React.Component {


  render() {
   
    return (
      <BrowserRouter>

      <div id='videobackground'>
      
<Header/>
<Switch>
          <Redirect to="/home" path="/" exact="true" />
         <Redirect to="/home" path="/index.html"  />
          <Route path="/home" component={HomePage}  />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          {/* <Route path="" component={NotFound} exact />  */}
        </Switch>

      </div>
      <FooterPagePro/>
      </BrowserRouter>
    );
  }
}

export default VideoBackgroundPage;