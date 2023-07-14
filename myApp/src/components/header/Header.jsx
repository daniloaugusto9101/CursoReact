import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='pt-5'>
            <button
                className='bg-zinc-100 px-3 py-2 rounded-md font-semibold text-xl mr-4 hover:bg-zinc-200'>
                <Link to={''}>Produtos</Link>
            </button>
            <button className='bg-zinc-100 px-3 py-2 rounded-md font-semibold text-xl mr-4 hover:bg-zinc-200'>
                <Link to={'/contato'} >Contato</Link>
            </button>
        </header>
    )
}

export default Header