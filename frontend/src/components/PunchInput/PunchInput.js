import React from 'react';
import Clock from '../Clock/Clock';
import './PunchInput.css';

const PunchInput = () => {
  return (
    // <div>
    //   <Clock />
    // </div>
    <div>
      <Clock />
      <form>
        <label>Clock in/out</label>
        <input type='text'></input>
        <button className='btn'>Submit</button>
      </form>
      <form>
        <label>Lunch in/out</label>
        <input type='text'></input>
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default PunchInput;