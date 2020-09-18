import React from 'react';
import logo from './logo.svg';
import './App.css';
import getCurrentEvent from './components/schedule'
import ActiveEvent from "./components/activeEvent";

function App() {
  const currentEvent = {
    startTime: '2030',
    endTime: '11:00 pm',
    title: 'Dad Time',
    link: 'http://espn.com'
  }
  return (
    <div className="App">
        {currentEvent ?
            <ActiveEvent currentEvent={currentEvent}/>
            :
            <div>All done for the day!</div>
        }

    </div>
  );
}

export default App;
