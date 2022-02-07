import React, { useContext, useState } from 'react';
import {Context} from '../Context'

const Age = (props) => {

  const {context, setContext} = useContext(Context)
  const [age, setAge] = useState('')

    
  return (
    <div className={'form-div'}>
        <h1 className={'label'}>Enter your age:</h1>
        <input type='text' className='input' onChange={e => setAge(e.target.value)}></input>
        <button className={'save'} onClick={() => setContext({...context, age: age})}>Save</button>
    </div>
    )
};

export default Age