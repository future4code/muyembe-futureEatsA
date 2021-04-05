import React from 'react'
import {InfoAddressContainer,AddressUser,TextAddress} from './styles'

const CardInfoAddress = () => {
    return (
        <InfoAddressContainer>
            <TextAddress>Endereço cadastrado</TextAddress>
            <AddressUser>Rua almerinda,55 - Ventos Largos</AddressUser>           
        </InfoAddressContainer>
    )
}

export default CardInfoAddress