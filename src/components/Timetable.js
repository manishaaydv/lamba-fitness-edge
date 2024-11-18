import React from 'react';
import './Timetable.css';


const schedule = [
    { day: 'Monday', classes: [{ time: '6:00 AM', activity: 'Yoga' }, { time: '8:00 AM', activity: 'Cardio' }, { time: '6:00 PM', activity: 'Strength Training' }] },
    { day: 'Tuesday', classes: [{ time: '7:00 AM', activity: 'Pilates' }, { time: '5:00 PM', activity: 'HIIT' }, { time: '7:00 PM', activity: 'Zumba' }] },
    { day: 'Wednesday', classes: [{ time: '6:00 AM', activity: 'Meditation' }, { time: '8:00 AM', activity: 'Spin Class' }, { time: '6:00 PM', activity: 'Strength Training' }] },
    { day: 'Thursday', classes: [{ time: '7:00 AM', activity: 'Pilates' }, { time: '5:00 PM', activity: 'Kickboxing' }, { time: '7:00 PM', activity: 'Dance Fitness' }] },
    { day: 'Friday', classes: [{ time: '6:00 AM', activity: 'Yoga' }, { time: '8:00 AM', activity: 'Cardio' }, { time: '6:00 PM', activity: 'Strength Training' }] },
    { day: 'Saturday', classes: [{ time: '9:00 AM', activity: 'CrossFit' }, { time: '11:00 AM', activity: 'HIIT' }] },
   
];


const workoutSchedule = [
    {
        day: 'Day 1: Chest and Triceps',
        exercises: [
            'Bench Press',
            'Incline Dumbbell Press',
            'Chest Flyes',
            'Dips',
            'Overhead Tricep Extension',
            'Tricep Pushdowns',
            'Tricep Dips'
        ]
    },
    {
        day: 'Day 2: Back and Biceps',
        exercises: [
            'Deadlifts',
            'Lat Pulldowns',
            'Barbell Rows',
            'Seated Row',
            'Hammer Curls',
            'Face Pulls',
            'Barbell or Dumbbell Shrugs'
        ]
    },
    {
        day: 'Day 3: Legs and Shoulder',
        exercises: [
            'Front Squat',
            'Lunges',
            'Leg Press',
            'Calf Raises',
            'Overhead Press',
            'Lateral Raises',
            'Front Raises'
        ]
    },
    {
        day: 'Day 4: Chest and Triceps',
        exercises: [
            'Dumbbell Bench Press',
            'Decline Bench Press',
            'Flat Dumbbell Flye',
            'Peck Deck Flye',
            'Tricep Kickbacks',
            'Close-Grip Bench Press',
            'Cable Crossovers'
        ]
    },
    {
        day: 'Day 5: Back and Biceps',
        exercises: [
            'Pull-Ups',
            'Lat Pulldown',
            'T-Bar Row',
            'Dumbbell Pullover',
            'Concentration Curls',
            'Cable Row',
            'Preacher Curls'
        ]
    },
    {
        day: 'Day 6: Shoulder and Legs',
        exercises: [
            'Military Press',
            'Side Lateral Raise',
            'Face Pull',
            'Shrugs',
            'Squats',
            'Seated Leg Extension',
            'Leg Curls',
            'Seated Calf Raises'
        ]
    }
];

const Timetable = () => {
    return (
        <div className="timetable-container">
            <h2 className="timetable-title">Endurance and Stamina</h2>
            <div className="timetable">
                {schedule.map((daySchedule, index) => (
                    <div key={index} className="timetable-day">
                        <h3>{daySchedule.day}</h3>
                        <ul>
                            {daySchedule.classes.map((classInfo, i) => (
                                <li key={i} className="timetable-class">
                                    <span className="time">{classInfo.time}</span>
                                    <span className="activity">{classInfo.activity}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            
            <h2 className="title">Strength Training</h2>
            <div className="workout-schedule">
                {workoutSchedule.map((day, index) => (
                    <div key={index} className="day-box">
                        <h3 className="day-title">{day.day}</h3>
                        <ul className="exercise-list">
                            {day.exercises.map((exercise, i) => (
                                <li key={i} className="exercise-item">
                                    {exercise}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timetable;
