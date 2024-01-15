import { useForm } from 'react-hook-form';
import Modal from '../modal/modal';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/feature/taskSlice';

const AddTasksModal = ({ isOpen, setIsOpen }) => {


    const { register, handleSubmit, reset } = useForm()
    const disPatch = useDispatch()

    const onCancel = () => {

        reset()
        setIsOpen(false)
    }

    const onSubmit = data => {

        disPatch(addTask(data))
        onCancel()
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add Task for Developers">
            <form onSubmit={handleSubmit(onSubmit)} className='mt-3'>
                <div className='flex flex-col mb-3'>
                    <label htmlFor="title">Title</label>
                    <input type="text" {...register('title')} className='rounded' />
                </div>

                {/* Description */}
                <div className='flex flex-col mb-3'>
                    <label htmlFor="description">Description</label>
                    <textarea {...register('description')} className='rounded'></textarea>
                </div>

                {/* Deadline */}
                <div className='flex flex-col mb-3'>
                    <label htmlFor="deadline">Deadline</label>
                    <input type="date" {...register('date')} className='rounded' />
                </div>

                {/* Assign */}
                <div className='flex flex-col mb-3'>
                    <label htmlFor="assignedTo">Assign to</label>
                    <select className='rounded' {...register('assignedTo')}>
                        <option value="Jahid Howlader">Jahid Howlader</option>
                        <option value="Moly Zaman">Moly Zaman</option>
                        <option value="Mibita">Mibita</option>
                        <option value="John Deo">John Deo</option>
                        <option value="Nishat Tasnim">Nishat Tasnim</option>
                    </select>
                </div>

                {/* Priority */}
                <div className='flex flex-col mb-3'>
                    <label htmlFor="priority">Priority</label>
                    <select className='rounded' {...register('priority')}>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>

                {/* Action */}
                <div className='flex justify-end mb-3 gap-2'>
                    <button onClick={onCancel} type='button' className='bg-[#ef4444] text-white px-3 py-1 rounded'>Cancel</button>
                    <button type='submit' className='bg-primary text-white px-3 py-1 rounded'>Submit</button>
                </div>

            </form>
        </Modal>
    );
};

export default AddTasksModal;