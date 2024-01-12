import React from 'react';
import Modal from '../modal/modal';

const AddTasksModal = ({ isOpen, setIsOpen }) => {
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dicta cum rem quos cumque beatae tempora laudantium asperiores voluptates itaque!</p>
        </Modal>
    );
};

export default AddTasksModal;