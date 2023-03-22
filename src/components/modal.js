import React, { useEffect, useRef } from 'react';
import '../styles/modal.css';

export default function Modal({ isOpen, close, children }) {

    const mountRef = useRef(null);

    useEffect(() => {
        const currentRef = mountRef.current;
        return () => {
            for (let i = currentRef.children.length - 1; i <= 0; i++) {
                const child = currentRef.children[i];
                currentRef.remove(child);
            }
        }
    }, []);

    const handleClick = (event) => {
        event.stopPropagation();
    }

    return (
        <article className={isOpen ? 'modal is-open' : 'modal'} >
            <button
                className="modal-close"
                onClick={() => { close() }}
            >X</button>
            <div className="modal-container" ref={mountRef} onClick={handleClick}>
                {children}
            </div>
        </article>
    );
}