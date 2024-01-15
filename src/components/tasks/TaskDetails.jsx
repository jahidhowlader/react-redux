import React from 'react';
import Modal from '../modal/modal';
import { useSelector } from 'react-redux';

const TaskDetails = ({ isOpen, setIsOpen, id }) => {

    const { tasks } = useSelector(state => state.taskSlice)

    const task = tasks?.find(item => item.id === id)

    return <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title} description={task?.description}></Modal>
}

export default TaskDetails