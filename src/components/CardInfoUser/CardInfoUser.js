import React from 'react'
import{InfoUserContainer,NameUser,EmailUser,CpfUser} from './styles'
const CardInfoUser = (props) => {
    return (
        <InfoUserContainer>
            <NameUser>{props.user.name}</NameUser>
            <EmailUser>{props.user.email}</EmailUser>
            <CpfUser>{props.user.cpf}</CpfUser>
        </InfoUserContainer>
    )
}

export default CardInfoUser