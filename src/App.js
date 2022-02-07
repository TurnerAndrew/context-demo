import './App.css';
import Name from './components/Name'
import Age from './components/Age'
import Location from './components/Location'
import Details from './components/Details'
import { Context } from './Context'
import { useState } from 'react'

function App() {
  const [context, setContext] = useState({})
  
  return (
    <Context.Provider value={{context, setContext}}>
    <div id='main'>
      <div id='input-container' className='main-container'>
        <Name />
        <Age/>
        <Location/>
      </div>
      <div id='details-container' className='main-container'>
        <Details/>
      </div>
    </div>
    </Context.Provider>
  );
}

export default App;
