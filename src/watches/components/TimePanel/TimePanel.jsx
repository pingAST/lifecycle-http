import { useState } from 'react';
import ClockForm from '../ClockForm/ClockForm';
import Watch from '../Watch/Watch';
import './TimePanel.css';

export default function TimePanel () {
    const [clocks, setClocks] = useState([]);

    const addClock = (name, timeZone) => {
        const newClock = {
            id: Date.now(),
            name,
            timeZone: Number(timeZone),
        };
        setClocks([...clocks, newClock]);
    };

    const removeClock = (id) => {
        setClocks(clocks.filter(clock => clock.id !== id));
    };

    return (
        <div className="timepanel-container">
            <ClockForm onAdd={addClock} />
            <div className="clocks-container">
                {clocks.map(clock => (
                    <Watch
                        key={clock.id}
                        {...clock}
                        onRemove={removeClock}
                    />
                ))}
            </div>
        </div>
    );
}