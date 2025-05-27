import React from 'react';
import './NoteCard.css';
import Icon from '../Icon/Icon';

export default function NoteCard({ note, onDelete }) {
    return (
        <div className="note-card">
            <button className="delete-btn" onClick={() => onDelete(note.id)}>
                <Icon name="close" />
            </button>
            <p>{note.content}</p>
        </div>
    );
}