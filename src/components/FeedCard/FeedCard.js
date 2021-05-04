import React from "react";
import {useHistory} from "react-router-dom";
import {restaurant} from "../../Routes/coordinator";
import {RestaurantContainer, Img, Name, DeliveryTime, Shipping} from "./styles";


const FeedCard = (props) => {

    const history = useHistory()

    return (
        <div>
            <RestaurantContainer>
                <Img src={props.restaurant.logoUrl} alt="Foto do restaurante"/>
                <Name>{props.restaurant.name}</Name>
                <DeliveryTime>{props.restaurant.deliveryTime}</DeliveryTime>
                <Shipping>{props.restaurant.shipping}</Shipping>
            </RestaurantContainer>
            <button onClick={()=>restaurant(history,props.restaurant.id)}> Ver detalhes do restaurante</button>
        </div>
    )
}

export default FeedCard;