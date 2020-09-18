import React,  { useState, useEffect } from 'react';
import moment from 'moment';

function ActiveEvent ({currentEvent}){
    const [minutesRemaining, setMinutesRemaining] = useState(getMinutesRemaining(currentEvent))
    useEffect(() => {
        setInterval(() => {  setMinutesRemaining(getMinutesRemaining(currentEvent)) }, 5000);
    });
    return <div>
        <div>There are {minutesRemaining} minutes left</div>
        <a href={currentEvent.link}> {currentEvent.title}</a>
    </div>
}

const getMinutesRemaining = (currentEvent) =>{
    const now = moment();
    const end = moment(currentEvent.endTime, 'HH:mm a');
    console.log('Minutes Remaining: ', Math.floor(end.diff(now)/60000))
    return Math.floor(end.diff(now)/60000)
}


export default ActiveEvent