import React from 'react'
import styled from 'styled-components'

const HomeText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`

const Inicio: React.FunctionComponent = () => {
    return (
        <HomeText>Incio</HomeText>
    )
}

export default Inicio