import { Button } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import {CartHeader} from './styled'
import bluetooth from '../../assets/bluetooth.png'
import fullBattery from '../../assets/full-battery.png'
import signal from '../../assets/signal.png'
import wifi from '../../assets/wifi.png'
import {Icons, Container, ConfirmButton, Choices, ChoicesContainer, PaymentChoice, SubTotal, Total, PaymentMethod, Address, Main, Texto, MeuCarrinho, Neighbourhood, AddressArea, AddressPlaceHolder, TextTotal, Street, Number} from './styled'
import GlobalStateContext from "../../globalState/globalStateContext";
import axios from "axios";
import RestaurantProductCard from "../../components/RestaurantProductCard/RestautantProductCard";
import {useInput} from '../../hooks/useInput'


const Cart = () => {
const {requests, states} = useContext(GlobalStateContext)
const { inputText, onChange } = useInput({})



useEffect(() => {
  requests.getAddress()
}, [])

const ordersRendering = states.cart.map((product) => {
    return <RestaurantProductCard product={product}/>
})


const ordersPrice = states?.cart?.reduce((accumulator, currentValue) => {
  return accumulator += currentValue.price
}, 0)

console.log(states.cart)

    const placeOrder = () => {
        const headers = {
            headers: {
                auth: localStorage.getItem('Token')
            }
        }

        const body = {
            body: {
                "products": [{
                    "id": states.cart[0].id,
                    "quantity": 1
                }],
                "paymentMethod": inputText.payment
            }
        }
    console.log(states.cart[0].id)
    console.log(inputText.payment)

    if(states.cart.length > 0) {
      axios.post(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants/${states.cart[0].id}/order`, headers, body)
        .then((res) => {
           console.log(res.data)
        }).catch((error) => {
          console.log(error.message)
        })
    } else {
      alert('deu ruim')
    }
        
    }

  return (
    <div>
      <header>
          <CartHeader>
          <div>
          <Icons src={signal}/>
          <Texto>Sketch</Texto>
          <Icons src={wifi}/>
          </div>
          <Texto>9:41PM</Texto>
          <div>
          <Icons src={bluetooth}/>
          <Texto>100%</Texto>
          <Icons src={fullBattery}/>
          </div>
          </CartHeader>
          <MeuCarrinho>Meu carrinho</MeuCarrinho> 
      </header>
      <AddressArea>
         <AddressPlaceHolder>Endereço de entrega</AddressPlaceHolder> 
         <Address>
           <Street>{`Rua ${states?.getUserAddress.street}, `}</Street>
           <Number>{states?.getUserAddress.number}</Number>
            <Neighbourhood>{` - ${states?.getUserAddress.neighbourhood}`}</Neighbourhood>
           </Address>

      </AddressArea>
      <PaymentMethod>{states.cart.length > 0 ? ordersRendering : 'Carrinho vazio'}</PaymentMethod>
      
      <Main>
      
      <Total>
        <TextTotal>Frete R$0,00</TextTotal>
        <SubTotal>
        <TextTotal>SUBTOTAL</TextTotal>
        <TextTotal>{`R$ ${ordersPrice.toFixed(2)}`}</TextTotal>
        </SubTotal>
      </Total>
      
      <PaymentMethod>Forma de pagamento</PaymentMethod>
      <hr />

      <PaymentChoice>
      <ChoicesContainer>
      <input onChange={onChange} value={'creditcard'} type="radio" name={"payment"} id="card"/>
      <Choices htmlFor="money">Cartão de crédito</Choices>
      </ChoicesContainer>
      <ChoicesContainer>
      <input onChange={onChange} value={'money'} type="radio" name="payment" id="money" />
      <Choices htmlFor="money">Dinheiro</Choices>
      </ChoicesContainer>
      </PaymentChoice>
      </Main>
      <Container>
      <ConfirmButton color={'secondary'} variant={'contained'} onClick={() => placeOrder()}>Confirmar</ConfirmButton>
      </Container>
    </div>
  );
};

export default Cart;
