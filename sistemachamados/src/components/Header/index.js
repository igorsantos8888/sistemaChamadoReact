import { React, useContext } from 'react'
import { AuthContext } from '../../contexts/auth'
import { Link } from 'react-router-dom'

import avatar from '../../assets/avatar.png'
import './index.css'
import { FiHome, FiUser, FiSettings } from 'react-icons/fi'

const Header = () => {
    const { user } = useContext(AuthContext)

    return (
        <div className='sidebar'>
            <div>
                <img
                    alt='foto avatar'
                    src={user.avatarUrl === null ? avatar : user.avatarUrl}
                />
            </div>
            <Link to='/'>
                <FiHome color='#fff' size={24} />
                Chamados
            </Link>
            <Link to='/customers'>
                <FiUser color='#fff' size={24} />
                Clientes
            </Link>
            <Link to='/profile'>
                <FiSettings color='#fff' size={24} />
                Configurações
            </Link>
        </div>
    )
}

export default Header