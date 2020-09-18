import React,  { useState, useEffect } from 'react';
import moment from 'moment';
import {getCurrentEvent, getNextEvent} from './schedule'


function ActiveEvent (){
    const getMinutesRemaining = () =>{
        const now = moment();
        const end = moment(currentEvent.endTime, 'HH:mm a');
        return Math.floor(end.diff(now)/60000)
    };
    const futureEvent = getNextEvent();
    console.log(futureEvent);
    const [currentEvent, setCurrentEvent] = useState(getCurrentEvent());
    const [minutesRemaining, setMinutesRemaining] = useState(getMinutesRemaining(currentEvent));
    useEffect(() => {
        setInterval(() => {
            setCurrentEvent(getCurrentEvent());
            setMinutesRemaining(getMinutesRemaining(currentEvent))
        }, 5000);
    });


    return <div>
        <div>There are {minutesRemaining} minutes left</div>
        <a href={currentEvent.link}> {currentEvent.title}</a>
    </div>
}




export default ActiveEvent