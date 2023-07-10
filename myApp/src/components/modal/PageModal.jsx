import React from 'react'
import Button from './Button'
import Modal from './Modal'

export default function PageModal() {
    const [modalActive, setModalActive] = React.useState(false)

    return (
        <div>
            <h1>Page modal</h1>
            {(modalActive) && <Modal setModalActive={setModalActive} modalActive={modalActive} />}
            <Button setModalActive={setModalActive} textBtn='Abrir modal' />
        </div>
    )
}
