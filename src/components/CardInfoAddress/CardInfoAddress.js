import React from 'react'
import {InfoAddressContainer,AddressUser,TextAddress} from './styles'

const CardInfoAddress = (props) => {
   
    return (
        <InfoAddressContainer>
            <TextAddress>Endereço cadastrado</TextAddress>
            <AddressUser>
                {props.address.street } , 
                {props.address.number} - 
                {props.address.neighbourhood}
            </AddressUser>           
        </InfoAddressContainer>
    )
}

export default CardInfoAddress