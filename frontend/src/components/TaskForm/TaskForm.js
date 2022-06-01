import React from 'react';
import './TaskForm.css';

const TaskForm = () => {
  return (
    <div>
      <form>
        <label>Open</label>
        <textarea rows='6' placeholder='Type a short message here' />
        <button className='btn'>Submit</button>
      </form>
      <form>
        <label>Close</label>
        <textarea rows='6' placeholder='Type a short message here' />
        <button className='btn'>Submit</button>
      </form>
      <form>
        <label>Cleaning</label>
        <textarea rows='6' placeholder='Type a short message here' />
        <button className='btn'>Submit</button>
      </form>
      <form>
        <label>Inventory</label>
        <textarea rows='6' placeholder='Type a short message here' />
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default TaskForm;