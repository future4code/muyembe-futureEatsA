import React,{useContext} from 'react'
import GlobalStateContext from '../../globalState/globalStateContext'
import {InfoAddressContainer,AddressUser,TextAddress} from './styles'


const CardInfoAddress = () => {
    const{states} = useContext(GlobalStateContext)
    return (
        <InfoAddressContainer>
            <TextAddress>Endereço cadastrado</TextAddress>
            <AddressUser>
                {states.address.street } , 
                {states.address.number} - 
                {states.address.neighbourhood}
            </AddressUser>           
        </InfoAddressContainer>
    )
}

export default CardInfoAddress