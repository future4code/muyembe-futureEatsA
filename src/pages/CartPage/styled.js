import styled from 'styled-components'
import {gray} from '../../constants/colors'


export const CartHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 5vh;
    margin: 5px 5px 0 5px;
    padding: 0 5px 0 5px;
`

export const MeuCarrinho = styled.p`
    display: flex;
    justify-content: center;
`

export const Icons = styled.img`
    width: 16.5px;
    height: 16.5px;
    border-radius: 1px;
`

export const Texto = styled.span`
    margin: 0 5px 0 5px;
`

export const AddressArea = styled.section`
    background-color: ${gray};
    height: 10vh;
    margin: 10px 0;
`
export const AddressPlaceHolder = styled.p`
    color: #d6d6d6;
    font-style: italic;
    padding: 10px;
`

export const Address = styled.p`
    color: #121212;
    padding: 10px;
`

export const Main = styled.main`
    height: 60vh;
    border: 1px solid black;
    margin-top: 10px;
`

export const Total = styled.div`
    height: 10vh;
`