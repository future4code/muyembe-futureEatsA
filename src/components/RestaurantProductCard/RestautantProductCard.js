
import React, { useEffect, useContext } from "react";
import GlobalStateContext from "../../globalState/globalStateContext";
import {RestaurantProductContainer, ProductCategory, ProductContainer, ProductImg, ProductName, ProductDescription, ProductPrice, AddButton} from "./styles";
import { useParams } from "react-router-dom";
import axios from "axios";



const RestaurantProductCard = (props) => {
    const {states, setters} = useContext(GlobalStateContext)

    const addToCart = () => {
        setters.setCart([...states.cart, {...props.product, quantity: 1}])
    }

    
    // const param = useParams();

    // const placeOrder = (id) => {
    //     console.log(id)
    //     const headers = {
    //         headers: {
    //             auth: localStorage.getItem('Token')
    //         }
    //     }

    //     const body = {
    //         body: {
    //             "products": [{
    //                 "id": id,
    //                 "quantity": 1
    //             }, {
    //                 "quantity": 1,
    //                 "id": "KJqMl2DxeShkSBevKVre"
    //             }],
    //             "paymentMethod": "creditcard"
    //         }
    //     }
    
    //     axios.post(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants/${id}/order`, headers)
    //     .then((res) => {
    //        console.log(res.data)
    //     })
    // }

    return (
        <RestaurantProductContainer>

            <ProductCategory>{props.product.category}</ProductCategory>

            <ProductContainer>
                <ProductImg src={props.product.photoUrl} alt="foto de um dos produtos do restaurante" />
                <ProductName> {props.product.name} </ProductName>
                <ProductDescription> {props.product.description} </ProductDescription>
                <ProductPrice> R${props.product.price.toFixed(2)} </ProductPrice>
                <AddButton onClick={()=>{addToCart()}}>adicionar</AddButton>
            </ProductContainer>
          
        </RestaurantProductContainer>
    )
}

export default RestaurantProductCard;