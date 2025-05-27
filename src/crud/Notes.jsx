import React, { useState, useEffect, useCallback } from 'react';
import './main.css';
import Header from './components/Header/Header';
import AddNoteForm from './components/AddNoteForm/AddNoteForm';
import NoteCard from './components/NoteCard/NoteCard';

export default function Notes() {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const API_URL = 'https://lifecycle-http.onrender.com';
    // 'http://localhost:7070';

    const fetchNotes = useCallback(async () => {
        try {
            const response = await fetch(`${API_URL}/notes`);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setNotes(data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }, [API_URL]);

    useEffect(() => {
        fetchNotes();
    }, [fetchNotes]);

    const handleAddNote = async (content) => {
        try {
            await fetch(`${API_URL}/notes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: 0, content }),
            });
            await fetchNotes();
        } catch (err) {
            setError(err.message);
        }
    };

    const handleDeleteNote = async (id) => {
        try {
            await fetch(`${API_URL}/notes/${id}`, {
                method: 'DELETE',
            });
            await fetchNotes();
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="app">
            <Header onRefresh={fetchNotes} />
            <div className="notes-grid">
                {notes.map((note) => (
                    <NoteCard key={note.id} note={note} onDelete={handleDeleteNote} />
                ))}
            </div>
            <AddNoteForm onAdd={handleAddNote} />
        </div>
    );
}