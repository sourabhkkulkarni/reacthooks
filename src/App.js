import React from 'react';
import './App.css';
// import HookCounter from './HookCounter'
// import HookCounter2 from './HookCounter2'
// import HookComponent3 from './HookComponent3'
// import HookComponent3 from './HookComponent3'
// import HookCounter4 from './HookCounter4'
// import HookCounterUE1 from './useEffect/HookCounterUE1';
// import HookMouse from './useEffect/HookMouse'
// import MouseContainer from './useEffect/MouseContainer'
// import HookIntervalCounter from './useEffect/HookIntervalCounter';
import DataFetching from './useEffectAPI/DataFetching';
function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <HookCounter2 /> */}
      {/* <HookComponent3 /> */}
      {/* <HookCounter4 /> */}
      {/* <HookCounterUE1 /> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <HookIntervalCounter /> */}
      <DataFetching />
    </div>
  );
}

export default App;
