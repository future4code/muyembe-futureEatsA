import React from "react";
import {RestaurantPageContainer, RestaurantHeader, HeaderButton, HeaderTitle} from "../RestaurantPage/styles";
import RestaurantDetailCard from "../../components/RestaurantDetailCard/RestaurantDetailCard";
import RestaurantProductCard from "../../components/RestaurantProductCard/RestautantProductCard";

const RestaurantPage = () => {
    return (
        <RestaurantPageContainer>

            <RestaurantHeader>
                <HeaderButton> ≤ </HeaderButton>
                <HeaderTitle>Restaurante</HeaderTitle>
            </RestaurantHeader>

            <RestaurantDetailCard />

            <RestaurantProductCard />

        </RestaurantPageContainer>
    )
}

export default RestaurantPage;