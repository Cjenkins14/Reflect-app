import React from 'react';
import './HabitTracker.css';

// render with check or X for completed boolean
export default function HabitTracker(habits) {
    return (
        <ul className='habit-list'>
            {habits.map(habit => {
                return <li>
                    {habit}
                </li>
            })}
        </ul>
    )
}