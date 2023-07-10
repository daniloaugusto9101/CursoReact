import React from 'react'

const Button = ({ textBtn, onClick }) => {

    const handleClick = (e) => {
        const value = e.target.innerText
        onClick(value)
    }
    return (
        <button
            className='bg-violet-900 px-4 py-2 text-white rounded mr-2'

            onClick={handleClick}>
            {textBtn}
        </button>
    )
}

export default Button