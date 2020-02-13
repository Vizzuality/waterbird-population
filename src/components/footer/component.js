import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/button';
import NavMenu from 'components/nav-menu'

import './styles.scss';

const Footer = () =>

   <div className="c-footer">
     <div className="footer-header">
       <h2>Do you want to know more?</h2>
       <Button light>Contact us</Button>
     </div>
     <div className="footer-navigation">
       <NavMenu className='footer'/>
    </div>
  </div>

Footer.propTypes = {
  footerInfo: PropTypes.array.isRequired
};

export default Footer;
