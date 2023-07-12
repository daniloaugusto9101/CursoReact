import React from 'react'
import { useNavigate } from 'react-router-dom'

const Animation = () => {
    const navigate = useNavigate();

    function handleClick() {
        console.log('Fez autenticaação');
        navigate('/')
    }

    return (
        <div className='animate-slide-left'>
            <h1 className='text-2xl'>Meu produto</h1>
            <p>Lorem ipsum, dolor sit amet </p>
            <button
                onClick={handleClick}
                className='bg-blue-300 p-3'>
                Login
            </button>
        </div>
    )
}

export default Animation