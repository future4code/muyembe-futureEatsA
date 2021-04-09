import React from 'react'
import {ContainerAddress,ContainerUser,ContainerHistoric,PerfilDetailContainer} from './styles'
import CardInfoAddress from '../CardInfoAddress/CardInfoAddress'
import CardInfoUser from '../CardInfoUser/CardInfoUser'
import EditIcon from '@material-ui/icons/Edit';
import CardInfoHistoric from '../CardInfoHistoric/CardInfoHistoric';
import HeaderPerfilPage from '../HeaderPerfilPage/HeaderPerfilPage'
import {useHistory} from 'react-router-dom'
import {editAddress,editPerfil} from '../../Routes/coordinator'

const PerfilDetail = (props) =>{
    const history = useHistory()
    return(
        <PerfilDetailContainer>
            <HeaderPerfilPage/>
            <ContainerUser>
                 <CardInfoUser user={props.user}/>
                 <EditIcon onClick ={()=>editPerfil(history)}/>
            </ContainerUser>
            <ContainerAddress>
                 <CardInfoAddress address={props.address}/>
                 <EditIcon onClick={()=>editAddress(history)}/>
            </ContainerAddress>
            <ContainerHistoric>
                 <CardInfoHistoric listRequests={props.listRequests}/>
            </ContainerHistoric>              
        </PerfilDetailContainer>
    )
}

export default PerfilDetail