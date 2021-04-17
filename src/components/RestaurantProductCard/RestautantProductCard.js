import React, { useEffect } from "react";
import {RestaurantProductContainer, ProductCategory, ProductContainer, ProductImg, ProductName, ProductDescription, ProductPrice, AddButton} from "./styles";
import { useParams } from "react-router-dom";
import axios from "axios";



const RestaurantProductCard = (props) => {

    const param = useParams();

    const placeOrder = (id) => {
        console.log(id)
        const headers = {
            headers: {
                auth: localStorage.getItem('Token')
            }
        }

        const body = {
            body: {
                "products": [{
                    "id": id,
                    "quantity": 1
                }, {
                    "quantity": 1,
                    "id": "KJqMl2DxeShkSBevKVre"
                }],
                "paymentMethod": "creditcard"
            }
        }
    
        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants/${id}/order`, headers)
        .then((res) => {
           console.log(res.data)
        })
    }

    return (
        <RestaurantProductContainer>

            <ProductCategory>{props.category.category}</ProductCategory>

            <ProductContainer>
                <ProductImg src={props.img.photoUrl} alt="foto de um dos produtos do restaurante" />
                <ProductName> {props.name.name} </ProductName>
                <ProductDescription> {props.description.description} </ProductDescription>
                <ProductPrice> R${props.price.price.toFixed(2)} </ProductPrice>
                <AddButton onClick={()=>{placeOrder(props.id.id)}}>adicionar</AddButton>
            </ProductContainer>
          
        </RestaurantProductContainer>
    )
}

export default RestaurantProductCard;