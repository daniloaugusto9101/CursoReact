import React from 'react'
import Task from './Task'
import InputAddTask from './InputAddTask'

const CardTasks = () => {
    const [tasks, setTasks] = React.useState([
        {
            id: 1,
            text: 'Ir para academia',
            isCompleted: false
        },
        {
            id: 2,
            text: 'Fazer Compra',
            isCompleted: false
        },
        {
            id: 3,
            text: 'Fazer relatorio',
            isCompleted: false
        },
    ]);

    const addTask = (text) => {
        const newTask = [...tasks, {
            id: Math.floor(Math.random() * 1000),
            text,
            isCompleted: false
        }]
        setTasks(newTask)
    }

    const removeTask = (id) => {
        const newTask = [...tasks];
        const index = newTask.findIndex(objeto => objeto.id === id);

        if (index !== -1) {
            newTask.splice(index, 1);
        }
        setTasks(newTask)
    }



    return (
        <div className='bg-indigo-950 border-4 border-inherit border-violet-700 p-6'>
            <header>
                <h1 className='text-white text-center text-3xl font-bold font-sans mb-4'>
                    Minhas tarefas!
                </h1>
                <InputAddTask addTask={addTask} />
            </header>
            <main className='flex gap-3 flex-col'>
                {
                    tasks.map((task) => (
                        <Task task={task} key={task.id} removeTask={removeTask} />
                    ))
                }
            </main>
        </div >
    )
}
export default CardTasks