import React from 'react';

function Navbar() {
  return (
    <div className='w3-top'>
      <div className='w3-bar w3-white w3-wide w3-padding w3-card'>
        <a href='#home' className='w3-bar-item w3-button'>
          <b>Archi</b> Info
        </a>

        <div className='w3-right w3-hide-small'>
          <a href='http://localhost:5000/about' className='w3-bar-item w3-button'>
            About
          </a>
          <a href='http://localhost:5000/udcprdetails' className='w3-bar-item w3-button'>
            UDCPR Simplified
          </a>
          <a
            href='https://www.nmcnagpur.gov.in/assets/250/2021/06/mediafiles/UDCPR_sanctioned-1.pdf'
            className='w3-bar-item w3-button'
          >
            UDCPR
          </a>

          <a href='#contact' className='w3-bar-item w3-button'>
            My projects
          </a>
          <a href='#contact' className='w3-bar-item w3-button'>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
