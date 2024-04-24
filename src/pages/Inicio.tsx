import React from 'react'
import '../styles/global.css'

const Inicio: React.FunctionComponent = () => {
    return (
        <div className='corpoPagina1'>
            <div className="header">
                <div>
                    <img src={process.env.PUBLIC_URL + '/Picture1.png'} alt="Walmir Fernandes" className="fotoPerfil" />
                </div>
                <div>
                    <h1>Walmir da Silva Fernandes</h1>
                    <p>Arquiteto de Soluções | .NET | SQL | Azure | AWS</p>
                </div>
            </div>
        </div>
    )
}

export default Inicio