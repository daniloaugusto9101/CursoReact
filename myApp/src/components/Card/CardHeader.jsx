import React from 'react';

const CardHeader = ({ cardTitulo, addTask }) => {
    const [input, setInput] = React.useState('');
    const [value, setValue] = React.useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        addTask(input);
    }

    return (
        <header>
            <h1 className='text-center text-4xl mb-4'>
                {cardTitulo}
            </h1>
            <form onSubmit={onSubmit}>
                <div className='flex justify-between'>
                    <input
                        type="text"
                        className='text-white flex-1 p-2 bg-violet-950 border-2 border-purple-700 rounded-s focus:outline-none  focus:border-blue-500'
                        onChange={(e) => setInput(e.target.value)}
                    />

                    <button className='bg-purple-700 p-2'>
                        Add Task
                    </button>
                </div>
            </form>
        </header>
    );
}

export default CardHeader;