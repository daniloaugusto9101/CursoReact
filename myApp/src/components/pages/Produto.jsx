import React from 'react'
import { useParams } from 'react-router-dom'

const Produto = () => {

    const [produto, setProduto] = React.useState(null)
    const [loading, setLoading] = React.useState(null)
    const [error, setError] = React.useState(null)
    const { id } = useParams()

    React.useEffect(() => {
        async function fetchProduto(url) {
            try {
                setLoading(true)
                const response = await fetch(url)
                const json = await response.json()
                setProduto(json)
            } catch (erro) {
                setError('Ocorreu um erro')
            } finally {
                setLoading(false)
            }
        }
        fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
    }, [id])

    if (loading) return <div>Carregando...</div>
    if (error) return <p>{error}</p>
    if (produto === null) return null
    return (
        <div className='animate-slide-left'>
            <p>Produto: {produto.nome}</p>
            <p>Preco: R$ {produto.preco}</p>
            <p>Descrição: R$ {produto.descricao}</p>
            <div className='grid grid-cols-2 gap-4'>
                {produto.fotos.map(ele => (
                    <img key={ele.src} src={ele.src} />
                ))}
            </div>
        </div>
    )
}

export default Produto