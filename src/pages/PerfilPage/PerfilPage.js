import React from 'react'
import{ContainerPerfilPage,ContainerUser,ContainerAddress,ContainerHistoric,CardInfo} from './styles'
import EditIcon from '@material-ui/icons/Edit';

const PerfilPage = ()=>{
    
    return(
        <ContainerPerfilPage>          
            <ContainerUser>
                <CardInfo>
                    <p>Laécio da Conceição</p>
                    <p>llll@gmail.com</p>
                    <p>746.766.766-87</p>
                </CardInfo>
                <EditIcon/>
            </ContainerUser>
            <ContainerAddress>
                <CardInfo>
                    <p>Endereço cadastrado</p>
                    <p>Rua almerinda,55 - Ventos Largos </p>
                </CardInfo>
                <EditIcon/>
            </ContainerAddress>
            <ContainerHistoric >                
                    <p>Histórico de pedidos</p>                    
                    <div>Você não realizou nenhum pedido</div>                
            </ContainerHistoric>
        </ContainerPerfilPage>
    )
}

export default PerfilPage