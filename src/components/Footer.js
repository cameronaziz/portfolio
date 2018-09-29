import React from 'react';
import { getYear } from '../tools';

const Footer = () => (
  <footer id="footer">
    <p className="copyright">&copy; {getYear()} Cameron Aziz</p>
  </footer>
);

export default Footer;
