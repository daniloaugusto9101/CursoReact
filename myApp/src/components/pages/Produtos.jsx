import React from 'react'
import { Link } from 'react-router-dom'

const Produtos = () => {

    const [produtos, setProdutos] = React.useState(null)
    const [loading, setLoading] = React.useState(null)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        async function fetchAPI(url) {
            try {
                setLoading(true)
                const response = await fetch(url)
                const json = await response.json()
                setProdutos(json)
            } catch (error) {
                setError('Ocorreu um erro')
            } finally {
                setLoading(false)
            }
        }
        fetchAPI(`https://ranekapi.origamid.dev/json/api/produto`)
    }, [])

    if (loading) return <p>Carregando...</p>
    if (error) return <p>{error}</p>
    if (produtos === null) return null
    return (
        <section className='animate-slide-left pt-5 grid grid-cols-3 gap-10'>
            {produtos.map(produto => (
                <Link to={`produto/${produto.id}`} key={produto.id}>
                    <img src={produto.fotos[0].src} />
                    <p>{produto.nome}</p>
                </Link>
            ))}
        </section>
    )
}

export default Produtos