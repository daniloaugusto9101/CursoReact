import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <NavLink to="/" end>Home</NavLink> | {' '}
            <NavLink to="sobre" end>Sobre</NavLink> | {' '}
            <NavLink to="animation" end>Login</NavLink>
        </div>
    )
}

export default Header