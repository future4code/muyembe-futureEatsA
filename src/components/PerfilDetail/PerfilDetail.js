import React from 'react'
import {ContainerAddress,ContainerUser,ContainerHistoric,PerfilDetailContainer} from './styles'
import CardInfoAddress from '../CardInfoAddress/CardInfoAddress'
import CardInfoUser from '../CardInfoUser/CardInfoUser'
import EditIcon from '@material-ui/icons/Edit';
import CardInfoHistoric from '../CardInfoHistoric/CardInfoHistoric';
import HeaderPerfilPage from '../HeaderPerfilPage/HeaderPerfilPage'

const PerfilDetail = () =>{
    return(
        <PerfilDetailContainer>
            <HeaderPerfilPage/>
            <ContainerUser>
                 <CardInfoUser/>
                 <EditIcon/>
            </ContainerUser>
            <ContainerAddress>
                 <CardInfoAddress/>
                 <EditIcon/>
            </ContainerAddress>
            <ContainerHistoric>
                 <CardInfoHistoric/>
            </ContainerHistoric>              
        </PerfilDetailContainer>
    )
}

export default PerfilDetail