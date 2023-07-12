import React from 'react'
import { useParams } from 'react-router-dom'


const Produto = () => {
    const params = useParams()
    const [produto, setProduto] = React.useState(null)

    React.useEffect(() => {
        fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
            .then(resp => resp.json())
            .then(data => setProduto(data))
    }, [])
    // console.log(params);

    if (produto !== null) {
        return (
            <div className='animate-slide-left'>
                <p>
                    Produto: {params.id}
                </p>
                <p>Nome: {produto.nome}</p>
                <p>Nome:R$  {produto.preco}</p>
                <img src={produto.fotos[0].src} alt="" />
            </div>
        )
    }
}

export default Produto