import React from 'react'
import {ContainerAddress,ContainerUser,ContainerHistoric,PerfilDetailContainer} from './styles'
import CardInfoAddress from '../CardInfoAddress/CardInfoAddress'
import CardInfoUser from '../CardInfoUser/CardInfoUser'
import EditIcon from '@material-ui/icons/Edit';
import CardInfoHistoric from '../CardInfoHistoric/CardInfoHistoric';

const PerfilDetail = () =>{
    return(
        <PerfilDetailContainer>
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