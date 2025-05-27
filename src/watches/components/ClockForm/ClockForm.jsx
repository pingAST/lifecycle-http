import { useRef } from 'react';
import './ClockForm.css';

export default function ClockForm ({ onAdd }) {
    const nameRef = useRef();
    const timeZoneRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value.trim();
        const timeZone = timeZoneRef.current.value;

        if (name) {
            onAdd(name, timeZone);
            nameRef.current.value = '';
            timeZoneRef.current.value = 0;
        }
    };

    return (
        <form className="clock-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Название</label>
                <input ref={nameRef} type="text" required />
            </div>
            <div className="form-group">
                <label>Временная зона</label>
                <input
                    ref={timeZoneRef}
                    type="number"
                    min="-12"
                    max="14"
                    defaultValue="0"
                    required
                />
            </div>
            <button type="submit">Добавить</button>
        </form>
    );
}