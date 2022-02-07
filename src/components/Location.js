import React, { useState, useContext } from 'react';
import { Context } from '../Context';

const Location = (props) => {

  const {context, setContext} = useContext(Context)
  const [location, setLocation] = useState('')

 
  return (
    <div className={'form-div'}>
        <h1 className={'label'}>Enter your location:</h1>
        <input type='text' className='input' onChange={e => setLocation(e.target.value)}></input>
        <button className={'save'} onClick={() => setContext({...context, location: location})}>Save</button>
    </div>
    )
};

export default Location