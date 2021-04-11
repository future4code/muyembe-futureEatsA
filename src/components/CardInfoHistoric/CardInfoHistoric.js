import React,{useContext} from 'react'
import {
    InfoHistoricContainer,
    TextHistoric,
    CardItemHistoric,
    RestaurantName,
    TotalCost,
    DateRequest
} from './styles'
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import GlobalStateContext from '../../globalState/globalStateContext';

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
    const{states} = useContext(GlobalStateContext)
    const classes = useStyles();
    return (
        <InfoHistoricContainer>
            <TextHistoric>Histórico de pedidos</TextHistoric>
            <Divider className={classes.root} />
            {states.listRequests.length > 0 ? states.listRequests.map((request) => {
                return (
                    <CardItemHistoric>
                        <RestaurantName>{request.name}</RestaurantName>
                        <DateRequest>{request.date}</DateRequest>
                        <TotalCost>SUBTOTAL  {request.subtotal}</TotalCost>                       
                    </CardItemHistoric>
                )

            }) : <p>Você não realizou nenhum pedido</p>}
        </InfoHistoricContainer>
    )
}

export default CardInfoHistoric