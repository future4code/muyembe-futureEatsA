import React from 'react'
import{
    ContainerPerfilPage,
    ContainerUser,
    ContainerAddress,
    ContainerHistoric,
    CardInfo,
    NameUser,
    EmailUser,
    CpfUser,
    AddressUser,
    TextHistoric
} from './styles'
import EditIcon from '@material-ui/icons/Edit';
import Divider from '@material-ui/core/Divider';
import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: { 
        border: 'none',
        height: '3px',
        margin: '0 16px',
        flexShrink: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
});

const PerfilPage = ()=>{
    const classes = useStyles();
    return(
        <ContainerPerfilPage>          
            <ContainerUser>
                <CardInfo>
                    <NameUser>Laécio da Conceição</NameUser>
                    <EmailUser>llll@gmail.com</EmailUser>
                    <CpfUser>746.766.766-87</CpfUser>
                </CardInfo>
                <EditIcon/>
            </ContainerUser>
            <ContainerAddress>
                <CardInfo>
                    <p>Endereço cadastrado</p>
                    <AddressUser>Rua almerinda,55 - Ventos Largos </AddressUser>
                </CardInfo>
                <EditIcon/>
            </ContainerAddress>
            <ContainerHistoric >                     
                    <TextHistoric>Histórico de pedidos</TextHistoric>                    
                    <Divider  className={classes.root }/>       
                    <p>Você não realizou nenhum pedido</p>
            </ContainerHistoric>
        </ContainerPerfilPage>
    )
}

export default PerfilPage