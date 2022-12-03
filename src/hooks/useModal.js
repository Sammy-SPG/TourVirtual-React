import {useState} from 'react';

export const UseModal = (initialValue = false) => {
    const [isOpen, setlsOpen] = useState(initialValue);
    const openModal = ()=> {setlsOpen(true);};
    const closeModal = ()=> {setlsOpen(false);};
    return {isOpen, openModal, closeModal};
};