import React from 'react'
import styled from 'styled-components'

const FormacoesText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const Formacoes: React.FunctionComponent = () => {
    return (
        <FormacoesText>Formações</FormacoesText>
    )
}

export default Formacoes