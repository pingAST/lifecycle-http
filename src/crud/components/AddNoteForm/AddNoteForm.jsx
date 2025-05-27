import React, { useState } from 'react';
import './AddNoteForm.css';
import Icon from '../Icon/Icon';

export default function AddNoteForm({ onAdd }) {
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!content.trim()) return;
        onAdd(content);
        setContent('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-form">
            <div className="input-wrapper">
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Введите заметку..."
                    rows="3"
                />
                <button type="submit" className="send-btn">
                    <Icon name="send" />
                </button>
            </div>
        </form>
    );
}