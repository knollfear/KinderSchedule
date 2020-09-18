import React from 'react';
import logo from './logo.svg';
import './App.css';
import {getCurrentEvent} from './components/schedule'
import ActiveEvent from "./components/activeEvent";

function App() {
  const currentEvent = getCurrentEvent();
  return (
    <div className="App">
        {currentEvent ?
            <ActiveEvent />
            :
            <div>Nothing to do now.  Go play!</div>
        }

    </div>
  );
}

export default App;
