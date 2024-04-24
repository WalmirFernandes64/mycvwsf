import React from 'react'
import styled from 'styled-components'

const HabilidadesText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const Habilidades: React.FunctionComponent = () => {
    return (
        <HabilidadesText>Habilidades</HabilidadesText>
    )
}

export default Habilidades