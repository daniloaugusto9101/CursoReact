import React from 'react';


const Button = ({ textBtn, setModalActive }) => {

    function handleClick() {
        setModalActive((modalActive) => !modalActive)
        console.log('teste');
    }

    return (
        <div>
            <button
                className='bg-red-500 px-4 py-2 text-white rounded self-end'
                onClick={() => handleClick()}>
                {textBtn}
            </button>
        </div>
    );
}

export default Button;

