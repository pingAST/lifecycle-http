import React from 'react';
import './Header.css';
import Icon from '../Icon/Icon';


export default function Header({ onRefresh }) {
    return (
        <div className="header">
            <h1>
                <span className="notes-title">Notes</span>
                <button className="refresh-btn" onClick={onRefresh}>
                    <Icon name="refresh" />
                </button>
            </h1>
        </div>
    );
}