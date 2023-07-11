import React from 'react'
import Item from './Item'

const Produtos = () => {
    const [preferencia, setPreferencia] = React.useState(null)

    React.useEffect(() => {
        const produto = localStorage.getItem('bd')
        if (produto !== null) {
            setPreferencia(produto)
        }
    }, [])

    React.useEffect(() => {
        if (preferencia !== null) {
            localStorage.setItem('bd', preferencia)
        }
    }, [preferencia])

    function handleClick({ target }) {
        setPreferencia(target.innerText)
    }


    return (
        <div>
            <h1>Produto: {preferencia}</h1>
            <button
                onClick={handleClick}
                className='bg-violet-900 px-4 py-2 text-white rounded mr-2'>
                Smartphone
            </button>
            <button
                onClick={handleClick}
                className='bg-violet-900 px-4 py-2 text-white rounded mr-2'>
                Tablet
            </button>
            <Item preferencia={preferencia} />
        </div>
    )
}

export default Produtos