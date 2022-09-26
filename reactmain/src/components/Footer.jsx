import React from 'react';

const footerstyle = {
  //   position: 'absolute',
  textAlign: 'center',
  bottom: '0',
  width: '100%',
  height: '60px',
  paddingTop: '1px',
};

function Footer() {
  return (
    <footer className='w3-center w3-black ' style={footerstyle}>
      <p>Copyright © {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
