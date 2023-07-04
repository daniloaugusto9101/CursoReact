import React from 'react';
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const CardSection = ({ tasks, removeTask, completedTask }) => {
    return (
        <section className='flex flex-col gap-2'>
            {tasks.map(obj => (
                <div
                    draggable="true"
                    className='flex justify-between items-center bg-purple-700 rounded-sm hover:ring-blue-500 hover:ring-2'
                    key={obj.id}>

                    <p
                        className={` flex-1 p-3 cursor-pointer ${(obj.complete == true) ? 'line-through text-gray-800' : obj.complete}`}
                        onClick={() => completedTask(obj.id)}
                    >
                        {obj.descricao}
                    </p>

                    <div className='flex'>
                        <span className='p-2  cursor-pointer'>
                            <FaEdit />
                        </span>
                        <span className='p-2  cursor-pointer'>
                            <FaTrashAlt onClick={() => removeTask(obj.id)} />
                        </span>
                    </div>

                </div>
            ))}
        </section >
    );
}

export default CardSection;