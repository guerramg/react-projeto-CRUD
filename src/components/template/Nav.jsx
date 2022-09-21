import './Nav.css'
import React from 'react'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* refatorar para componete */}
            <a href="#/" className='fa fa-home'> Início
            </a>
            
            <a href="#users" className='fa fa-users'>Usuários
            </a>
        </nav>
    </aside>