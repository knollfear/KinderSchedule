import moment from "moment";

const getCurrentEvent = () => {
    const now = moment();
    const end = moment(currentEvent.endTime, 'HH:mm a');
    const todaySchedule = schedule.Thursday
    const currentEvent = todaySchedule.filter((event) =>{
        return (event.startTime <= time && event.endTime >= time)
    })

    return currentEvent[0]
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
    }

export default getCurrentEvent()