import React from "react";
import {RestaurantProductContainer, ProductCategory, ProductContainer, ProductImg, ProductName, ProductDescription, ProductPrice, AddButton} from "./styles";


const RestaurantProductCard = (props) => {
    return (
        <RestaurantProductContainer>

            <ProductCategory>{props.category.category}</ProductCategory>

            <ProductContainer>
                <ProductImg src={props.img.photoUrl} alt="foto de um dos produtos do restaurante" />
                <ProductName> {props.name.name} </ProductName>
                <ProductDescription> {props.description.description} </ProductDescription>
                <ProductPrice> R${props.price.price} </ProductPrice>
                <AddButton>adicionar</AddButton>
            </ProductContainer>
          
        </RestaurantProductContainer>
    )
}

export default RestaurantProductCard;