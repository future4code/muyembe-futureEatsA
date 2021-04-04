import React from 'react'
import {InfoHistoricContainer,TextHistoric} from './styles'
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

const CardInfoHistoric = () => {
    const classes = useStyles();
    return (
        <InfoHistoricContainer>
            <TextHistoric>Histórico de pedidos</TextHistoric>
            <Divider  className={classes.root }/>  
            <p>Você não realizou nenhum pedido</p>          
        </InfoHistoricContainer>
    )
}

export default CardInfoHistoric