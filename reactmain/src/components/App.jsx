import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Inputmain from './Inputmain';
import About from './About';
import Navbar from './Navbar';
import Contact from './Contact';
import Output1 from './Output1';
import Output2 from './Output2';
import axios from 'axios';
// import postInputsNode from '../nodeConnections';

function App() {
  // function postInputs(inputs) {
  //   var finaloutput = postInputsNode(inputs);
  //   console.log(finaloutput);
  // }
  const [output1State, setOutput1State] = useState({});
  const [output2State, setOutput2State] = useState({});

  async function postInputs(inputs) {
    try {
      const response = await axios.post('http://localhost:5000/postinputs', { inputs });
      setOutput1State(response.data);
      // console.log(inputsState);
    } catch (error) {
      console.log(error);
    }
  }

  async function postOutput2Inputs(Output2Inputs) {
    try {
      const response = await axios.post('http://localhost:5000/postOutput2Inputs', {
        Output2Inputs,
      });
      setOutput2State(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // async function postOutput1Inputs(output1Inputs) {
  //   try {
  //     const response = await axios.post('http://localhost:5000/postOutput1Inputs', {
  //       output1Inputs,
  //     });
  //     // setOutput1State(response.data);
  //     // console.log(inputsState);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <div>
      <Navbar />
      <Header />
      {/* <About /> */}
      <div className='w3-row-padding w3-grayscale'>
        <div className='w3-col l4 m6 w3-margin-bottom w3-padding'>
          <Inputmain onInputSubmit={postInputs} />
        </div>
        <div className='w3-col l3 m6 w3-margin-bottom w3-padding'>
          <Output1 getOutput1={output1State} />
        </div>
        <div className='w3-col l3 m6 w3-margin-bottom'>
          <Output2 onOutput2Submit={postOutput2Inputs} getOutput2={output2State} />
        </div>
      </div>
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
