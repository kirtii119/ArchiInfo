import React from 'react';
import imagemain from '../assets/builder-architect.jpeg';

const styleimage = {
  width: '1400px',
};
function About() {
  return (
    // <header classNameName='w3-display-container w3-wide' id='home'>
    //   <center>
    //     <img style={styleimage} classNameName='photo' src={imagemain} alt='Architecture' />
    //   </center>
    // </header>

    //   <div className="row">
    // <div className="col-sm-1 "></div>
    <div className='w3-row-padding'>
      <div className='w3-col l1 m6 w3-margin-bottom w3-padding '></div>
      <div className='w3-col l4 m6 w3-margin-bottom w3-padding '>
        <h1>
          <strong>
            <br />
            <br />
            ABOUT
          </strong>
        </h1>
        <br />
        <br />
        <br />
        <p style={{ fontSize: '18px' }}>
          <b>ArchiInfo</b> is a web based application for builders, architects, contractors and
          other construction industry people. It provides all necessary information about the
          <b>UDCPR</b>(Unified Development Control and Promotion Regulations for Maharashtra) rules
          and makes related calculations easier. It aims to resolve ambiguity in interpretation of
          the rules and also helps the general public to understand how much construction is
          permitted on a particular site.
        </p>
        <p style={{ fontSize: '18px' }}>
          Builders and architects often have to deal with myriad regulatory and legal issues, which
          is why most development projects get held up at the planning stage. Archiinfo is their
          answer to dealing with this lacuna.
        </p>
        <p style={{ fontSize: '18px' }}>
          Our objective at Archiinfo is to streamline and simplify documentation related to
          construction work; make it more transparent and make our services accessible to a large
          section of the user community – builders and investors, alike.
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className='w3-col l1 m6 w3-margin-bottom w3-padding '></div>
      <div className='w3-col l4 m6 w3-margin-bottom w3-padding'>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className='img-hover-zoom'>
          <img
            src={imagemain}
            width='600'
            style={{ borderRadius: '10px', position: 'relative', top: '0px', left: '100px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
