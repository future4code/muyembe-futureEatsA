import React, { useEffect, useState } from "react";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import {RestaurantHeader, GoBackButton, HeaderTitle} from "./styles";
import {RestaurantDetailContainer, LogoImg, RestaurantName, DeliveryStatus, FoodType, RestaurantAdress} from "./styles";
import RestaurantProductCard from "../../components/RestaurantProductCard/RestautantProductCard";
import {previousPage} from "../../Routes/coordinator";

const RestaurantPage = () => {

    const history = useHistory();
    // const param = useParams();
    const [restaurantDetails, setRestaurantDetails] = useState([]);
    const [productDetails, setProductDetails] = useState([]);



    useEffect(() => {

        const headers = {
            headers: {
                auth: localStorage.getItem('Token')
            }
        }
    
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants/1`, headers)
        .then((res) => {
            setRestaurantDetails(res.data.restaurant)
            setProductDetails(res.data.restaurant.products)
        })

    }, [])

    const productsList = productDetails?.map((detail) => {
        return <RestaurantProductCard category={detail} img={detail} name={detail} description={detail} price={detail}/>
    })


    return (
        <div className="Restaurant-page-container">

            <RestaurantHeader>
                <GoBackButton onClick={()=> previousPage(history)}> ≤ </GoBackButton>
                <HeaderTitle>Restaurante</HeaderTitle>
            </RestaurantHeader>

            <RestaurantDetailContainer>
                <LogoImg src={restaurantDetails.logoUrl} alt="logomarca do restaurante escolhido"/>
                <RestaurantName> {restaurantDetails.name} </RestaurantName>
                <FoodType> {restaurantDetails.category} </FoodType>
                <DeliveryStatus> {restaurantDetails.deliveryTime} min - Frete R${restaurantDetails.shipping},00 </DeliveryStatus>
                <RestaurantAdress> {restaurantDetails.address} </RestaurantAdress>
            </RestaurantDetailContainer>

            <div className="products-detail-container">{productsList}</div>

        </div>
    )
}

export default RestaurantPage;