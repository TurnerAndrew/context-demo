import React, { useState, useContext } from 'react';
import { Context } from '../Context';


const Name = (props) => {  

  const {context, setContext} = useContext(Context)
  const [name, setName] = useState('')
  

  return (
      <div className={'form-div'}>
          <h1 className={'label'}>Enter your name:</h1>
          <input type='text' className={'input'} onChange={e => setName(e.target.value)}></input>
          <button className={'save'} onClick={() => setContext({...context, name: name})}>Save</button>
      </div>
    )
};

export default Name