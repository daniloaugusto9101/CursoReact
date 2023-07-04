import React from 'react';
import CardHeader from './CardHeader';
import CardSection from './CardSection';
import CardFooter from './CardFooter';

const Card = () => {

    const [tasks, setTasks] = React.useState([
        {
            id: 1,
            descricao: 'Ir para academia',
            complete: false
        },
        {
            id: 2,
            descricao: 'Fazer trabalho',
            complete: false
        },
        {
            id: 3,
            descricao: 'Ir no mercado',
            complete: false
        },
    ]);

    const addTask = (task) => {
        if (task) {
            const arrTask = [...tasks, {
                id: Math.floor(Math.random() * 10000),
                descricao: task,
                complete: false
            }]
            setTasks(arrTask)
        }
    }

    const removeTask = (id) => {
        const arrTask = [...tasks]
        const index = arrTask.findIndex(obj => obj.id == id)
        arrTask.splice(index, 1)
        setTasks(arrTask)
    }

    const completedTask = (id) => {
        const arrTask = [...tasks]
        arrTask.map((obj) => {
            if (obj.id == id) {
                obj.complete = !obj.complete
            }
        })
        setTasks(arrTask)
    }

    return (
        <div className='bg-violet-950 rounded p-3 text-white flex flex-col gap-8'>

            <CardHeader
                cardTitulo='My tasks!!!'
                addTask={addTask}
            />
            <CardSection
                tasks={tasks}
                removeTask={removeTask}
                completedTask={completedTask}
            />
            <CardFooter
                author='Danilo Augusto'
            />

        </div>
    );
}

export default Card;