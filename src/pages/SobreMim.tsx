import React from 'react'
import styled from 'styled-components'

const SobreMimText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const SobreMim: React.FunctionComponent = () => {
    return (
        <SobreMimText>Sobre Mim</SobreMimText>
    )
}

export default SobreMim