import React from 'react'

const Item = ({ preferencia }) => {
    const [dados, setdados] = React.useState(null)

    React.useEffect(() => {
        if (preferencia !== null) {
            fetch(`https://ranekapi.origamid.dev/json/api/produto/${preferencia}`)
                .then(resp => resp.json())
                .then(json => setdados(json))
        }
    }, [preferencia])


    if (dados == null) return null
    return (
        <div>
            <p>{dados.nome}</p>
            <p>{dados.preco}</p>
        </div>
    )
}

export default Item