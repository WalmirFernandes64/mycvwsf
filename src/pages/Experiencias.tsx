import React from 'react'
import styled from 'styled-components'

const ExperienciasText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const Experiencias: React.FunctionComponent = () => {
    return (
        <ExperienciasText>Experiências</ExperienciasText>
    )
}

export default Experiencias