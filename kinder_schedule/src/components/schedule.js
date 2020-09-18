import moment from "moment";

export function getCurrentEvent()  {

    const todaySchedule = getTodaySchedule();
    const currentEvent = todaySchedule.filter((schedule) =>{
        const start = moment(schedule.startTime, 'HH:mm a');
        const end = moment(schedule.endTime, 'HH:mm a');
        const now = moment();
        return (start.diff(now)< 0 && end.diff(now) > 0 )
    });

    return currentEvent[0]
}

export function getNextEvent() {

    const futureEvents = getTodaySchedule().filter(schedule => {
        const start = moment(schedule.startTime, 'HH:mm a');
        const now = moment();
        return start.diff(now) > 0
    });
    console.log(futureEvents);

    return futureEvents.length > 0 ? futureEvents[0] : null
}


function getTodaySchedule(){

    return schedule[ moment().format('dddd') ];
}
const schedule = {
        "Thursday": [
            {
                startTime: '8:30 am',
                endTime: '9:00 am',
                title: 'Welcome Meeting',
                link: 'https://bcps-k12-md-us.zoom.us/j/92434199087?pwd=WjJkZmFDVGRhWHZmTHBPakxFazE0QT09'
            },
            {
                startTime: '9:00 am',
                endTime: '9:45 am',
                title: 'Group Reading',
                link: 'https://bcps-k12-md-us.zoom.us/j/92434199087?pwd=WjJkZmFDVGRhWHZmTHBPakxFazE0QT09'
            },
        ],
        "Friday":[
            {
                startTime: '8:30 am',
                endTime: '9:00 am',
                title: 'Welcome Meeting',
                link: 'https://bcps-k12-md-us.zoom.us/j/92434199087?pwd=WjJkZmFDVGRhWHZmTHBPakxFazE0QT09'
            },
            {
                startTime: '9:00 am',
                endTime: '9:45 am',
                title: 'Group Reading',
                link: 'https://bcps-k12-md-us.zoom.us/j/92434199087?pwd=WjJkZmFDVGRhWHZmTHBPakxFazE0QT09'
            },
            {
                startTime: '11:45 am',
                endTime: '12:30 pm',
                title: 'P.E.',
                link: 'https://bcps-k12-md-us.zoom.us/j/3872952988'
            },
            {
                startTime: '1:15 pm',
                endTime: '2:00 pm',
                title: 'Math',
                link: 'https://bcps-k12-md-us.zoom.us/j/92434199087?pwd=WjJkZmFDVGRhWHZmTHBPakxFazE0QT09'
            },
            {
                startTime: '2:00 pm',
                endTime: '2:35 pm',
                title: 'Closing Meeting',
                link: 'https://bcps-k12-md-us.zoom.us/j/92434199087?pwd=WjJkZmFDVGRhWHZmTHBPakxFazE0QT09'
            },

        ]
    };

export default  { getCurrentEvent, getNextEvent};