import React from "react";
import {RestaurantDetailContainer, RestaurantImg, RestaurantName, DeliveryStatus, FoodType, RestaurantAdress} from "./styles";


const RestaurantDetailCard = (props) => {
    return (
        <RestaurantDetailContainer>
            <RestaurantImg src="https://picsum.photos/1080" />
            <RestaurantName> Bullguer Vila Madalena</RestaurantName>
            <FoodType>Burguer</FoodType>
            <DeliveryStatus>50 - 60 min  Frete R$6,00</DeliveryStatus>
            <RestaurantAdress>R. Fradique Coutinho, 1136 - Vila Madalena</RestaurantAdress>
        </RestaurantDetailContainer>
    )
}

export default RestaurantDetailCard;