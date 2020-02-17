import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/button';
import NavMenu from 'components/nav-menu'

import './styles.scss';

const Footer = () =>

   <div className="c-footer">
     <div className="footer-header">
       <h2>Do you want to take part?</h2>
       <Button>Join us</Button>
     </div>
     <div className="footer-navigation">
       <NavMenu className='footer'/>
    </div>
  </div>

export default Footer;
