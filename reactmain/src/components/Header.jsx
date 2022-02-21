import React from 'react';
import imagemain from '../assets/4775-min-1.jpg';

const styleimage = {
  width: '1400px',
};
function Header() {
  return (
    <header className='w3-display-container w3-wide' id='home'>
      <center>
        <img style={styleimage} className='photo' src={imagemain} alt='Architecture' />
      </center>
    </header>
  );
}

export default Header;
