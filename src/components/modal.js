import React from 'react';
import '../styles/modal.css';

export default function Modal({ isOpen, close, children }) {
    return (
        <article className={isOpen ? 'modal is-open' : 'modal'} >
            <button
                className="modal-close"
                onClick={() => { close() }}
            >X</button>
            <div className="modal-container">
                {children}
            </div>
        </article>
    );
}