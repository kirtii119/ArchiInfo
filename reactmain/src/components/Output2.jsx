import React, { useState } from 'react';

function Output2(props) {
  const [checkInput1, setCheckInput1] = useState(false);
  const [checkInput2, setCheckInput2] = useState(false);
  const [spIsChecked, setSpIsChecked] = useState(false);

  const handleSpOnChange = () => {
    setSpIsChecked(!spIsChecked);
    handleSubmit();
  };

  const output2Input = { htOfBuilding: null, htOfParking: null, special: null };

  function handleSubmit() {
    output2Input.htOfBuilding = document.getElementById('htOfBuilding').value;
    output2Input.htOfParking = document.getElementById('htOfParking').value;
    setSpIsChecked((prevState) => {
      output2Input.special = prevState;

      props.onOutput2Submit(output2Input);

      return prevState;
    });
  }

  function callCheckInput1() {
    setCheckInput1(true);
  }

  function callCheckInput2() {
    setCheckInput2(true);
  }

  return (
    <div className='w3-content ' style={{ maxWidth: '1564px', marginLeft: '55px' }}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='headings' style={{ marginTop: '9px' }}>
        Marginal Spaces (in mts.)
      </div>
      <br />
      <div className='flex-container'>
        <div className='flex-child magenta'>Ht of Building From GL.</div>

        <input
          className='w3-input w3-border flex-child green outputbox'
          type='text'
          placeholder='0.0'
          name='htOfBuilding'
          id='htOfBuilding'
          onChange={checkInput1 && checkInput2 ? handleSubmit : callCheckInput1}
        />
      </div>
      <br />
      <div className='flex-container'>
        <div className='flex-child magenta'>Ht of Parking Above GL</div>

        <input
          className='w3-input w3-border flex-child green outputbox'
          type='text'
          placeholder='0.0'
          name='htOfParking'
          id='htOfParking'
          onChange={checkInput1 && checkInput2 ? handleSubmit : callCheckInput2}
        />
      </div>
      <br />
      <div style={{ marginLeft: '100px' }}>
        <label className='container'>
          Special Building
          <input type='checkbox' checked={spIsChecked} onChange={handleSpOnChange} />
          <span className='checkmark'></span>
        </label>
      </div>
      <div style={{ fontSize: '12px' }}>
        <i>
          🏢Special buildings are buildings for educational, assembly, mercantile, institutional,
          industrial, storage and hazardous occupancies.
        </i>
      </div>
      <hr />
      <table id='marginTable'>
        <thead>
          <tr>
            <th></th>
            <th>Ground&nbsp;&nbsp;</th>
            <th>First&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th>Till Top&nbsp;</th>
            <th>Clear&nbsp;&nbsp;&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Front</td>
            <td>
              <div className='outputbox' id='frontGround' style={{ width: '100%', height: '30px' }}>
                {props.getOutput2.frontGround}
              </div>
            </td>
            <td>
              <div className='outputbox' id='frontFirst' style={{ width: '100%', height: '30px' }}>
                {props.getOutput2.frontFirst}
              </div>
            </td>
            <td>
              <div className='outputbox' id='frontTop' style={{ width: '100%', height: '30px' }}>
                {props.getOutput2.frontTop}
              </div>
            </td>
            <td>
              <div className='outputbox' id='frontClear' style={{ width: '100%', height: '30px' }}>
                {props.getOutput2.frontClear}
              </div>
            </td>
          </tr>
          <tr>
            <td>Side/Rear&nbsp;&nbsp;</td>
            <td>
              <div className='outputbox' id='sideGround' style={{ width: '100%', height: '30px' }}>
                {props.getOutput2.sideGround}
              </div>
            </td>
            <td>
              <div className='outputbox' id='sideFirst' style={{ width: '100%', height: '30px' }}>
                {props.getOutput2.sideFirst}
              </div>
            </td>
            <td>
              <div className='outputbox' id='sideTop' style={{ width: '100%', height: '30px' }}>
                {props.getOutput2.sideTop}
              </div>
            </td>
            <td>
              <div className='outputbox' id='sideClear' style={{ width: '100%', height: '30px' }}>
                {props.getOutput2.sideClear}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <hr />
      <b>Ventilation Shaft</b>
      <div className='flex-container' style={{ flexDirection: 'row', width: '300px' }}>
        <div
          className='flex-container'
          style={{ flexDirection: 'column', height: '70px', width: '50px' }}
        ></div>

        <div
          className='flex-container'
          style={{ flexDirection: 'column', height: '70px', width: '100px' }}
        >
          <div className=' flex-child' style={{ paddingTop: '10px' }}>
            Min Side
          </div>
          <div
            className='outputbox flex-child'
            id='minSide'
            style={{ width: '100%', height: '20%px', margin: '0' }}
          >
            {props.getOutput2.minSide}
          </div>
        </div>

        <div
          className='flex-container'
          style={{ flexDirection: 'column', height: '70px', width: '50px' }}
        ></div>
        <div
          className='flex-container'
          style={{ flexDirection: 'column', height: '70px', width: '100px' }}
        >
          <div className=' flex-child' style={{ paddingTop: '10px' }}>
            Min Area
          </div>
          <div
            className='outputbox flex-child'
            id='minArea'
            style={{ width: '100%', height: '20%px', margin: '0' }}
          >
            {props.getOutput2.minArea}
          </div>
        </div>
      </div>
      <br />

      <hr />

      <br />
      <div className='flex-container'>
        <div className='flex-child magenta'>Inner Chowk (Min side)&nbsp; </div>

        <div
          className='flex-child green outputbox'
          id='innerChowk'
          style={{ width: '35%', height: '40px', margin: '2px' }}
        >
          {props.getOutput2.innerChowk}
        </div>
      </div>
      <br />
      <div className='flex-container'>
        <div className='flex-child magenta'>Exterior Chowk (Min side) &nbsp; </div>

        <div
          className='flex-child green outputbox'
          id='exteriorChowk'
          style={{ width: '35%', height: '40px', margin: '2px' }}
        >
          {props.getOutput2.exteriorChowk}
        </div>
      </div>
    </div>
  );
}

export default Output2;
