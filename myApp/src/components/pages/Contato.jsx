import React from 'react'

const Contato = () => {

    const [img, setImg] = React.useState(null)

    React.useEffect(() => {
        fetch(`https://ranekapi.origamid.dev/json/api/produto/tablet`)
            .then(resp => resp.json())
            .then(data => setImg(data))
    }, [])

    if (img !== null) {
        return (
            <div className='animate-slide-left pt-5 grid grid-cols-2 gap-4'>
                <img src={img.fotos[0].src} alt="" />
                <div>
                    <p>Nome: Danilo</p>
                    <p>Telefone: 12n 91910-2983</p>
                </div>
            </div>
        )
    }
}

export default Contato