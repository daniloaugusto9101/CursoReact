import React from 'react';
import { FaRegGem } from "react-icons/fa";


const CardFooter = ({ author }) => {
    return (
        <footer className='flex items-center gap-1 justify-center'>
            <p>
                Developed by: {author}
            </p>
            <FaRegGem />
        </footer>
    );
}

export default CardFooter;