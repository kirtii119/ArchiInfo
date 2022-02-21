import React, { useState } from 'react';
// import postinputs from '../nodeConnections';

function Inputmain(props) {
  const [localityState, setLocalityState] = useState('');
  const [reservationState, setReservationState] = useState('');
  const [checkSubmitt, setCheckSubmitt] = useState(false);

  const inputs = {
    localAuthority: '',
    plotArea: '',
    roadWidening: '',
    reservationName: '',
    reservationArea: '',
    locality: '',
    reservations: '',
    zone: '',
    roadWidth: '',
  };

  function onLocalityChange(event) {
    // setLocalityState((prevState) => {
    //   return event.target.value;
    // });
    setLocalityState(event.target.value);
    if (event.target.value == 'congested') {
      document.getElementById('noncongestedOptGroup').setAttribute('hidden', 'hidden');
      document.getElementById('congestedOptGroup').removeAttribute('hidden');
    } else {
      document.getElementById('congestedOptGroup').setAttribute('hidden', 'hidden');
      document.getElementById('noncongestedOptGroup').removeAttribute('hidden');
    }

    if (checkSubmitt) {
      handleSubmitSecond();
    }
  }

  function onReservationChange(event) {
    setReservationState(event.target.value);

    if (checkSubmitt) {
      handleSubmitSecond();
    }
  }

  function handleSubmit(event) {
    inputs.localAuthority = event.target.LocalAuthority.value;
    inputs.plotArea = event.target.PlotArea.value;
    inputs.roadWidening = event.target.RoadWidening.value;
    inputs.reservationName = event.target.ReservationName.value;
    inputs.reservationArea = event.target.ReservationArea.value;
    setLocalityState((prevState) => {
      inputs.locality = prevState;
      return prevState;
    });
    setReservationState((prevState) => {
      inputs.reservations = prevState;
      inputs.zone = event.target.Zone.value;
      inputs.roadWidth = event.target.RoadWidth.value;
      event.preventDefault();
      setCheckSubmitt(true);
      props.onInputSubmit(inputs);
      return prevState;
    });
  }

  function handleSubmitSecond() {
    inputs.localAuthority = document.getElementById('LocalAuthority').value;
    inputs.plotArea = document.getElementById('PlotArea').value;
    inputs.roadWidening = document.getElementById('RoadWidening').value;
    inputs.reservationName = document.getElementById('ReservationName').value;
    inputs.reservationArea = document.getElementById('ReservationArea').value;
    setLocalityState((prevState) => {
      inputs.locality = prevState;
      return prevState;
    });
    setReservationState((prevState) => {
      inputs.reservations = prevState;
      inputs.zone = document.getElementById('Zone').value;
      inputs.roadWidth = document.getElementById('RoadWidth').value;
      props.onInputSubmit(inputs);
      return prevState;
    });
  }

  return (
    <div
      className='w3-content '
      style={{
        maxWidth: '1564px',
        marginLeft: '100px',
        paddingLeft: '30px',
        paddingRight: '100px',
      }}
    >
      {/* FSI Calculator */}
      <div className='w3-container w3-padding-32' id='about'>
        <br />
        <h3 className=' w3-border-light-grey w3-padding-12 ' style={{ paddingTop: '10px' }}>
          <a name='open-here'>FSI Calculator</a>
        </h3>
        <hr style={{ marginTop: '3px', marginBottom: '0px' }} />
      </div>

      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className='inputheadings'>
              Local Authority<span style={{ fontSize: '20px' }}>*</span>
            </div>
            <br />
            <select
              name='LocalAuthority'
              id='LocalAuthority'
              onChange={checkSubmitt ? handleSubmitSecond : null}
            >
              <option value='PMC'>PMC</option>
              <option value='PCMC'>PCMC</option>
            </select>
            <br />
            <br />
            <div className='inputheadings'>Areas in sqmt.</div>
            <br />
            <label htmlFor='Plot area'>Plot Area</label>
            <input
              className='w3-input w3-border'
              type='text'
              placeholder='1000'
              name='PlotArea'
              id='PlotArea'
              defaultValue='1000'
              onChange={checkSubmitt ? handleSubmitSecond : null}
            />
            <br />
            <label htmlFor='Road widening'>Road widening Area</label>
            <input
              className='w3-input w3-border'
              type='text'
              placeholder='0.0'
              name='RoadWidening'
              id='RoadWidening'
              onChange={checkSubmitt ? handleSubmitSecond : null}
            />
            <br />
            <label htmlFor='Reservation name if any'>Reservation name if any</label>
            <select
              name='ReservationName'
              id='ReservationName'
              onChange={checkSubmitt ? handleSubmitSecond : null}
            >
              <option value='None'>None</option>
              <option value='Recreational'>Recreational</option>
              <option value='Public Utilities'>Public Utilities</option>
              <option value='Commercial'>Commercial</option>
              <option value='Health Facility'>Health Facility</option>
              <option value='Transportation'>Transportation</option>
              <option value='Educational'>Educational</option>
              <option value='Residential'>Residential</option>
              <option value='Assembly and Institutional'>Assembly and Institutional</option>
              <option value='Public-Semi public'>Public-Semi public</option>
            </select>
            <br />
            <br />
            <label htmlFor='Reservations'>Reservation Area</label>
            <input
              className='w3-input w3-border'
              type='text'
              placeholder='0.0'
              name='ReservationArea'
              id='ReservationArea'
              onChange={checkSubmitt ? handleSubmitSecond : null}
            />
            <br />
            <hr style={{ borderColor: 'rgb(174, 177, 180)' }} />
            <label htmlFor='Locality'>
              Locality<span style={{ fontSize: '18px', color: 'rgb(207, 10, 10)' }}>*</span>
            </label>
            <br />
            <br />
            <input
              type='radio'
              id='Congested'
              name='Locality'
              value='congested'
              required
              onChange={onLocalityChange}
            />
            <label htmlFor='congested'>&nbsp;&nbsp;Congested</label>
            <br />
            <input
              type='radio'
              id='Non-congested'
              name='Locality'
              value='non-congested'
              onChange={onLocalityChange}
            />
            <label htmlFor='Non-congested'>Non-congested</label>
            <br />
            <hr /> 
            <label htmlFor='Reservations'>
              Reservations<span style={{ fontSize: '18px', color: 'rgb(207, 10, 10)' }}>*</span>
            </label>
            <br />
            <br />
            &nbsp;&nbsp;
            <input
              type='radio'
              id='nil'
              name='Reservations'
              value='nil'
              required
              onChange={onReservationChange}
            />
              <label htmlFor='html'> nil</label>
            <br /> {' '}
            <input
              type='radio'
              id='partly-reserved'
              name='Reservations'
              value='partly-reserved'
              onChange={onReservationChange}
            />
              <label htmlFor='css'>partly-reserved</label>
            <br /> {' '}
            <input
              type='radio'
              id='compltely-reserved'
              name='Reservations'
              value='compltely-reserved'
              onChange={onReservationChange}
            />
              <label htmlFor='javascript'>compltely-reserved</label>
            <hr />
            <label htmlFor='Zone'>
              Zone<span style={{ fontSize: '18px', color: 'rgb(207, 10, 10)' }}>*</span>
            </label>
            <select name='Zone' id='Zone' onChange={checkSubmitt ? handleSubmitSecond : null}>
              <option value='Residential Zone-R1'>Residential Zone-R1</option>
              <option value='Residential Zone-R2'>Residential Zone-R2</option>
              <option value='Low Density Residential Zone.'>Low Density Residential Zone.</option>
              <option value='Future Urbanisable Zone.'>Future Urbanisable Zone.</option>
              <option value='Commercial Zone'>Commercial Zone</option>
              <option value='Industrial Zone'>Industrial Zone</option>
              <option value='Loom Industry cum Residential Zone.'>
                Loom Industry cum Residential Zone.
              </option>
              <option value='Public Semi-public Zone'>Public Semi-public Zone</option>
              <option value='Agricultural Zone'>Agricultural Zone</option>
            </select>
            <br />
            <br />
            <label htmlFor='Road width'>
              Roadwidth<span style={{ fontSize: '18px', color: 'rgb(250, 4, 4)' }}>*</span>
            </label>
            <select
              name='RoadWidth'
              id='RoadWidth'
              onChange={checkSubmitt ? handleSubmitSecond : null}
            >
              <optgroup label='Congested' id='congestedOptGroup'>
                <option value='Below 9 c'>Below 9</option>
                <option value='Above 9 to below 18 mt'>Above 9 to below 18 mt</option>
                <option value='Above 18 to below 30 mt'>Above 18 to below 30 mt</option>
                <option value='30 mt and above'>30 mt and above</option>
              </optgroup>

              <optgroup label='Non-Congested' id='noncongestedOptGroup'>
                <option value='Below 9 nc'>Below 9</option>
                <option value='Above 9 to below 12 mt'>Above 9 to below 12 mt</option>
                <option value='Above 12 to below 15 mt'>Above 12 to below 15 mt</option>
                <option value='Above 15 mt and below 24 mt'>Above 15 mt and below 24 mt</option>
                <option value='Above 24 mt and below 30 mt'>Above 24 mt and below 30 mt</option>
                <option value='30 mt and above'>30 mt and above</option>
              </optgroup>
            </select>
            <br />
            <br />
            <button type='submit'>SUBMIT</button>
          </form>
        </div>
        <div className='w3-col l1 m6 w3-margin-bottom'></div>
      </div>

      {/* Image of location/map */}
      {/* <div className='w3-container'>
        <center>
          <img src='archimain.png' style={{ width: '85%' }} />
        </center>
      </div> */}

      {/* End page content */}
    </div>
  );
}

export default Inputmain;
