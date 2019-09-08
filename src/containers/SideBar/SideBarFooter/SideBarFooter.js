import React from 'react';
import './SideBarFooter.scss';

const SideBarFooter = () => {
  return (
    <React.Fragment>
      <footer className='footer-block'>
        <div>About Press Copyright</div>
        <div>Creators Advertise</div>
        <div>Developers +MyTube</div>
        <div>Legal</div>
      </footer>

      <footer className='footer-block'>
        <div>Terms Privacy</div>
        <div>Policy &amp; Safety</div>
        <div>Test new features</div>
      </footer>

      <footer className='footer-block'>
        <div>All prices include VAT</div>
      </footer>

      <footer className='footer-block'>
        <div>&copy; Producercoder.com - A YouTube clone for educational purposes under fair use.</div>
      </footer>
    </React.Fragment>
  );
}

export default SideBarFooter;
