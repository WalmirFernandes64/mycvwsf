import React from 'react'
import styled from 'styled-components'

const ProjetosText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const Projetos: React.FunctionComponent = () => {
    return (
        <ProjetosText>Projetos</ProjetosText>
    )
}

export default Projetos