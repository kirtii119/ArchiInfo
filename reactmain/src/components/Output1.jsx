import React, { useState } from 'react';
import { RangeStepInput } from 'react-range-step-input';

function Output1(props) {
  const [ancRangeState, setAncRangeState] = useState({ value: 50 });

  // const [TODIsChecked, setTODIsChecked] = useState(false);
  // const handleTODOnChange = () => {
  //   setTODIsChecked(!TODIsChecked);

  //   setTODIsChecked((prevState) => {
  //     if (prevState == true) {
  //       document.getElementById('totalBuiltUpArea').innerHTML = Number(
  //         (document.getElementById('totalBuiltUpArea').innerHTML + 50).toFixed(2)
  //       );
  //     } else {
  //       document.getElementById('totalBuiltUpArea').innerHTML = Number(
  //         (document.getElementById('totalBuiltUpArea').innerHTML - 50).toFixed(2)
  //       );
  //     }
  //     return prevState;
  //   });

  //   // submitOutput1();
  // };

  function rangeOnchange(event) {
    const newVal = Number(event.target.value);

    setAncRangeState({ value: newVal });
    editOutput1();
    // submitOutput1();
  }

  // const output1Inputs = {
  //   TODZOne: false,
  //   ancRange: 50,
  // };

  var ancillaryFSIComm = 0.8;
  var ancillaryFSIRes = 0.6;
  var permissibleFSIArea =
    props.getOutput1.basicFSIArea + props.getOutput1.premiumFSIArea + props.getOutput1.TDRArea;
  var commAreaPercent = ancRangeState.value * 0.01; //dynamic
  var resAreaPercent = (100 - ancRangeState.value) * 0.01; //dynamic
  var ancillaryResArea;
  var ancillaryCommArea;

  function editOutput1() {
    ancillaryCommArea = Number(
      (permissibleFSIArea * ancillaryFSIComm * commAreaPercent).toFixed(2)
    );
    ancillaryResArea = Number((permissibleFSIArea * ancillaryFSIRes * resAreaPercent).toFixed(2));

    document.getElementById('ancillaryFSI').innerHTML = Number(
      ((ancillaryCommArea + ancillaryResArea) / permissibleFSIArea).toFixed(2)
    );

    document.getElementById('ancillaryAreaTotal').innerHTML = Number(
      (ancillaryCommArea + ancillaryResArea).toFixed(2)
    );
    document.getElementById('totalBuiltUpArea').innerHTML = Number(
      (permissibleFSIArea + ancillaryCommArea + ancillaryResArea).toFixed(2)
    );
    document.getElementById('totalFSI').innerHTML = Number(
      (
        document.getElementById('totalBuiltUpArea').innerHTML / props.getOutput1.netPlotArea
      ).toFixed(2)
    );
  }

  // function submitOutput1() {
  //   setAncRangeState((prevState) => {
  //     output1Inputs.ancRange = prevState;
  //     return prevState;
  //   });
  //   setTODIsChecked((prevState) => {
  //     output1Inputs.TODZOne = prevState;
  //     props.onOutput1Submit(output1Inputs);
  //     return prevState;
  //   });
  // }

  return (
    <div
      className='w3-content '
      style={{ maxWidth: '1564px', marginLeft: '10px', marginRight: '20px' }}
    >
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='headings'>Permissible FSI</div>
      <br />
      <div className='flex-container'>
        <div className='flex-child magenta'>Net plot Area:</div>

        <div
          name='netplotarea'
          className='flex-child green outputbox'
          id='netplotarea'
          style={{ width: '35%', height: '40px', margin: '2px' }}
        >
          {props.getOutput1.netPlotArea}
        </div>
      </div>
      <br />
      <div className='flex-container'>
        <div className='flex-child magenta'>Gross plot Area:</div>

        <div
          className='flex-child green outputbox'
          id='grossplotarea'
          style={{ width: '35%', height: '40px', margin: '2px' }}
        >
          {props.getOutput1.grossPlotArea}
        </div>
      </div>
      <br />

      {/* <label className='container'>
        My Plot is in TOD Zone
        <input type='checkbox' checked={TODIsChecked} onChange={handleTODOnChange} />
        <span className='checkmark'></span>
      </label> */}

      {/* <label className='container'>
        Part of Sanctioned Layout
        <input type='checkbox' />
        <span className='checkmark'></span>
      </label> */}
      <hr />
      <table id='FSItable'>
        <thead>
          <tr>
            <th></th>
            <th>Factor &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            <th>Area(Sqmt)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Basic FSI</td>
            <td>
              <div
                className='outputbox'
                id='basicFSIfactor'
                style={{ width: '100%', height: '30px' }}
              >
                {props.getOutput1.basicFSIFactor}
              </div>
            </td>
            <td>
              <div
                className='outputbox'
                id='basicFSIarea'
                style={{ width: '100%', height: '30px' }}
              >
                {props.getOutput1.basicFSIArea}
              </div>
            </td>
          </tr>
          <tr>
            <td>Premium FSI</td>
            <td>
              <div
                className='outputbox'
                id='premiumFSIfactor'
                style={{ width: '100%', height: '30px' }}
              >
                {props.getOutput1.premiumFSIFactor}
              </div>
            </td>
            <td>
              <div
                className='outputbox'
                id='premiumFSIarea'
                style={{ width: '100%', height: '30px' }}
              >
                {props.getOutput1.premiumFSIArea}
              </div>
            </td>
          </tr>
          <tr>
            <td>TDR</td>
            <td>
              <div className='outputbox' id='TDRfactor' style={{ width: '100%', height: '30px' }}>
                {props.getOutput1.TDRFactor}
              </div>
            </td>
            <td>
              <div className='outputbox' id='TDRarea' style={{ width: '100%', height: '30px' }}>
                {props.getOutput1.TDRArea}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <b>Ancillary FSI</b>
      <br />

      <div style={{ margin: '0px 0px 16px 140px' }}>
        <span style={{ margin: '70px 0 0 30px' }}>
          &nbsp;&nbsp;&nbsp;Comm &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Resi
        </span>
        <br />
        <span>{ancRangeState.value}%&nbsp;&nbsp;</span>
        <RangeStepInput
          min={0}
          max={100}
          value={ancRangeState.value}
          step={1}
          onChange={rangeOnchange}
        />
        <span>&nbsp;&nbsp;{100 - ancRangeState.value}%</span>
      </div>
      {/* <span
        className='outputbox'
        id='ancillaryFSI'
        style={{ width: '28%', height: '30px', marginLeft: '130px' }}
      >
        {props.getOutput1.ancillaryFSI}
      </span>
      <span
        className='outputbox'
        id='ancillaryAreaTotal'
        style={{ width: '30%', height: '30px', marginLeft: '15px', marginTop: '15px' }}
      >
        {props.getOutput1.ancillaryAreaTotal}
      </span> */}

      <div className='flex-container' style={{ flexDirection: 'row' }}>
        <div
          className='outputbox flex-child'
          id='ancillaryFSI'
          style={{ width: '10%', height: '30px', margin: '10px 10px 0 135px' }}
        >
          {props.getOutput1.ancillaryFSI}
        </div>
        <div
          className='outputbox flex-child'
          id='ancillaryAreaTotal'
          style={{ width: '10%', height: '30px', margin: '10px 0 0 0px' }}
        >
          {props.getOutput1.ancillaryAreaTotal}
        </div>
      </div>

      <hr />

      <div className='flex-container' style={{ flexDirection: 'row' }}>
        <div style={{ paddingTop: '10px' }}>Total:</div>
        <div
          className='outputbox flex-child'
          id='totalFSI'
          style={{ width: '10%', height: '30px', margin: '10px 10px 0 93px' }}
        >
          {props.getOutput1.totalFSI}
        </div>
        <div
          className='outputbox flex-child'
          id='totalBuiltUpArea'
          style={{ width: '10%', height: '30px', margin: '10px 0 0 0px' }}
        >
          {props.getOutput1.totalBuiltUpArea}
        </div>
      </div>
      <br />
      <div className='headings'>Open / Amenity space </div>
      <br />
      <div className='flex-container'>
        <div className='flex-child magenta'>Open Space Req.</div>

        <div
          className='flex-child green outputbox'
          id='openspacereq'
          style={{ width: '35%', height: '40px', margin: '2px' }}
        >
          {props.getOutput1.openSpaceReq}
        </div>
      </div>
      <br />
      <div className='flex-container'>
        <div className='flex-child magenta'>Amenity Space Req.</div>

        <div
          className='flex-child green outputbox'
          id='amenityspacereq'
          style={{ width: '35%', height: '40px', margin: '2px' }}
        >
          {props.getOutput1.amenitySpaceReq}
        </div>
      </div>
    </div>
  );
}

export default Output1;
