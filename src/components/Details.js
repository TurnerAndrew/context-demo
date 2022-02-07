import React, {useContext} from 'react';
import { Context } from '../Context'

const Details = () => {

  const context = useContext(Context)

  
  
  return (
    <div className={'form-div details'}>
        <div className={'form-container'}><h1 className={'label'}>Name: </h1><h2 className={'detail-info'}>{context.context.name}</h2></div>
        <div className={'form-container'}><h1 className={'label'}>Age: </h1><h2 className={'detail-info'}>{context.context.age}</h2></div>
        <div className={'form-container'}><h1 className={'label'}>Location: </h1> <h2 className={'detail-info'}>{context.context.location}</h2></div>
    </div>
    )
};

export default Details;
