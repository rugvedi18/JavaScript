import React from 'react';
import Welcome from './Welcome';

const App = () => {

  function clickDennis () {
    alert("hello")
  }

  return (
    <div>
      <Welcome name="Bruce">
        <p>Bruce is a student.</p>
      </Welcome>
      <Welcome name="John">
        <button>Ok John</button>
      </Welcome>
      <Welcome name="Dennis"/>
        {/* <button onClick={ clickDennis() }>Click here</button> */}
      {/* </Welcome> */}
    </div>
  )
  
}

export default App;