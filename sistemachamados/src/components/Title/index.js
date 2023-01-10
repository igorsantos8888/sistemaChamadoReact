import React from 'react'
import './index.css'

const Title = ({ children, name }) => {
    return (
        <div className='title'>
            {children}
            <span>{name}</span>
        </div>
    )
}

export default Title