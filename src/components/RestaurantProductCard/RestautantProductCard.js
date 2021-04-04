import React from "react";
import {RestaurantProductContainer, ProductCategory, ProductContainer, ProductImg, ProductName, ProductDescription, ProductPrice, AddButton} from "./styles";


const RestaurantProductCard = (props) => {
    return (
        <RestaurantProductContainer>

            <ProductCategory>Principais</ProductCategory>

            <ProductContainer>
                <ProductImg src="https://picsum.photos/200" />
                <ProductName>Bullguer</ProductName>
                <ProductDescription>Pão, Carne, queijo, picles e molho.</ProductDescription>
                <ProductPrice>R$20,00</ProductPrice>
                <AddButton>adicionar</AddButton>
            </ProductContainer>
          
        </RestaurantProductContainer>
    )
}

export default RestaurantProductCard;