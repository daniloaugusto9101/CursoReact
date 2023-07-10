import React from 'react'
import { FaEdit, FaTrashAlt, FaRegSquare } from "react-icons/fa";


const Task = ({ task, removeTask }) => {
    return (
        <div className='flex justify-between gap-2 items-center bg-violet-700  p-1 rounded-md text-white'>
            <div className='flex items-center'>
                <p
                    className={`cursor-pointer p-2`}>
                    {task.text}
                </p>
            </div>

            <div className='flex'>
                <span
                    className='p-2 cursor-pointer'>
                    <FaEdit className='text-xl' />
                </span>
                <span
                    onClick={() => removeTask(task.id)}
                    className='p-2 cursor-pointer'>
                    <FaTrashAlt className='text-xl' />
                </span>
            </div>
        </div>
    )
}

export default Task

