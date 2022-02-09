import React from 'react';
import Welcome from './Welcome';
import Greet from './Greet';

const App = () => {
  return (
    <div style={{display:'flex', justifyContent:'center', textAlign:'center'}}>
      <div>
        {/* Welcome function based */}
        <Welcome name="Bruce">
          <p>Bruce is a student.</p>
        </Welcome>
        <Welcome name="John">
          <button>Ok John</button>
        </Welcome>
        <Welcome name="Dennis"/>

        {/* Greet class based */}
        <Greet name="Bruce"/>
      </div>
    </div>
  )
  
}

export default App