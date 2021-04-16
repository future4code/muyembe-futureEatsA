import React, { useContext } from "react";
import GlobalStateContext from "../../globalState/globalStateContext";
import {RestaurantProductContainer, ProductCategory, ProductContainer, ProductImg, ProductName, ProductDescription, ProductPrice, AddButton} from "./styles";


const RestaurantProductCard = (props) => {
const {states} = useContext(GlobalStateContext)

    return (
        <RestaurantProductContainer>

            <ProductCategory>{props.category.category}</ProductCategory>

            <ProductContainer>
                <ProductImg src={props.img.photoUrl} alt="foto de um dos produtos do restaurante" />
                <ProductName> {props.name.name} </ProductName>
                <ProductDescription> {props.description.description} </ProductDescription>
                <ProductPrice> R${props.price.price.toFixed(2)} </ProductPrice>
                <AddButton>{states.isInCart ? "Remover" : "adicionar"}</AddButton>
            </ProductContainer>
          
        </RestaurantProductContainer>
    )
}

export default RestaurantProductCard;