import React from "react";

const InputAddTask = ({ addTask }) => {

    const [text, setText] = React.useState('')


    const formSubmit = (e) => {
        e.preventDefault();
        if (!text) return
        addTask(text)
        setText('')
    }

    return (
        <form onSubmit={formSubmit}
            className="border-4 border-inherit border-violet-700 flex rounded-md mb-10">
            <input
                onChange={e => setText(e.target.value)}
                value={text}
                type="text"
                className="max-w-full flex-1 outline-0 p-3 bg-indigo-950 text-white"
            />
            <button
                className="bg-violet-700 p-2 text-white">
                Add task
            </button>
        </form>
    )
}
export default InputAddTask