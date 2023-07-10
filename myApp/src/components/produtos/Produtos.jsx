import React from 'react'

const Produtos = () => {
    const [produto, setProduto] = React.useState(null);

    async function handleClick(e) {
        const resp = await fetch(
            `https://ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`);
        const json = await resp.json()
        console.log(json);
        setProduto(json)
    }

    return (
        <div>
            <h1>Produtos</h1>
            <button
                onClick={handleClick}
                className='bg-violet-900 px-4 py-2 text-white rounded mr-2'>
                Notebook
            </button>
            <button
                onClick={handleClick}
                className='bg-violet-900 px-4 py-2 text-white rounded mr-2'>
                smartphone
            </button>
            <button
                onClick={handleClick}
                className='bg-violet-900 px-4 py-2 text-white rounded mr-2'>
                tablet
            </button>
            <div>
                <p>{produto}</p>
            </div>
        </div>
    )
}

export default Produtos