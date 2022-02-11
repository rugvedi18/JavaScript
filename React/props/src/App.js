import React from 'react';
import Welcome from './Components/Welcome';
import Greet from './Components/Greet';
import Message from './Components/Message';

const App = () => {
  return (
    <div style={{display:'flex', justifyContent:'center', textAlign:'center'}}>
      <div>
        {/* Class based state */}
        <Message/>

        {/* Function based props */}
        <Welcome name="Bruce">
          <p>Bruce is a student.</p>
        </Welcome>
        <Welcome name="John">
          <button>Ok John</button>
        </Welcome>
        <Welcome name="Dennis"/>

        {/* Class based props */}
        <Greet name="Bruce"/>
      </div>
    </div>
  )
}

export default App