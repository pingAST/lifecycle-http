import { useState, useEffect } from 'react';
import './Watch.css';

export default function Watch({ id, name, timeZone, onRemove }) {
    const [time, setTime] = useState(() => {
        const now = new Date();
        return new Date(now.getTime() + (timeZone * 3600000));
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const newTime = new Date(now.getTime() + (timeZone * 3600000));
            setTime(newTime);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeZone]);

    const hours = time.getUTCHours();
    const minutes = time.getUTCMinutes();
    const seconds = time.getUTCSeconds();

    const hoursDegrees = (hours % 12) * 30 + minutes * 0.5;
    const minutesDegrees = minutes * 6 + seconds * 0.1;
    const secondsDegrees = seconds * 6;

    return (
        <div className="watch">
            <div className="watch-header">
                <h3>{name}</h3>
                <button className="close" onClick={() => onRemove(id)}>&times;</button>
            </div>

            <div className="analog-clock">
                <div className="clock-face">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div
                            key={i}
                            className="hour-mark"
                            style={{ transform: `rotate(${i * 30}deg)` }}
                        ></div>
                    ))}

                    <div
                        className="hand hour-hand"
                        style={{ transform: `rotate(${hoursDegrees}deg)` }}
                    ></div>
                    <div
                        className="hand minute-hand"
                        style={{ transform: `rotate(${minutesDegrees}deg)` }}
                    ></div>
                    <div
                        className="hand second-hand"
                        style={{ transform: `rotate(${secondsDegrees}deg)` }}
                    ></div>

                    <div className="center-circle"></div>
                </div>

                <div className="digital-clock">
                    {String(hours).padStart(2, '0')}:
                    {String(minutes).padStart(2, '0')}:
                    {String(seconds).padStart(2, '0')}
                </div>
            </div>
        </div>
    );
}