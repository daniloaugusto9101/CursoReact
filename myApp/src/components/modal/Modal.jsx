import React from 'react';
import Button from './Button';
import ModalTitle from './ModalTittle';

const Modal = ({ setModalActive, modalActive }) => {


    return (
        <div
            className={`
                    w-full h-screen grid place-items-center fixed top-0 left-0 bg-zinc-900 bg-opacity-90 transition-all
                    ${modalActive
                    ? 'opacity-1 pointer-events-auto'
                    : 'opacity-0 pointer-events-none'
                }
                `}>

            <div className={`bg-white shadow-md max-w-md p-4 rounded flex flex-col gap-4 `}>

                <ModalTitle titulo='Minha modal' />

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit consectetur dolorem minus et, voluptatibus odit eveniet. Voluptatum at perspiciatis est sequi ducimus tempore debitis. Sunt quae nam corporis dolore corrupti?</p>

                <Button textBtn='Fechar Modal' setModalActive={setModalActive} />
            </div>
        </div>
    );
}

export default Modal;