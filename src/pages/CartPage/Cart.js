import { Button } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import {CartHeader} from './styled'
import bluetooth from '../../assets/bluetooth.png'
import fullBattery from '../../assets/full-battery.png'
import signal from '../../assets/signal.png'
import wifi from '../../assets/wifi.png'
import {Icons, Container, ConfirmButton, Choices, ChoicesContainer, PaymentChoice, SubTotal, Total, PaymentMethod, Address, Main, Texto, MeuCarrinho, Neighbourhood, AddressArea, AddressPlaceHolder, TextTotal, Street, Number} from './styled'
import ProductCardCart from './productCard/ProductCardCart'
import GlobalStateContext from "../../globalState/globalStateContext";
import axios from "axios";

const Cart = () => {
const [orders, setOrders] = useState([])
const {requests, states} = useContext(GlobalStateContext)

useEffect(() => {
  requests.getOrders()
  requests.getAddress()
}, [])

// const ordersRendering = states.activeOrders.map((order) => {

// })



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
      <PaymentMethod>{orders > 0 ? <ProductCardCart/> : 'Carrinho vazio'}</PaymentMethod>
      
      <Main>
      
      <Total>
        <TextTotal>Frete R$0,00</TextTotal>
        <SubTotal>
        <TextTotal>SUBTOTAL</TextTotal>
        <TextTotal>R$0,00</TextTotal>
        </SubTotal>
      </Total>
      
      <PaymentMethod>Forma de pagamento</PaymentMethod>
      <hr />

      <PaymentChoice>
      <ChoicesContainer>
      <input type="radio" name="pagamento" id="cartao"/>
      <Choices htmlFor="cartao">Cartão de crédito</Choices>
      </ChoicesContainer>
      <ChoicesContainer>
      <input type="radio" name="pagamento" id="dinheiro" />
      <Choices htmlFor="dinheiro">Dinheiro</Choices>
      </ChoicesContainer>
      </PaymentChoice>
      </Main>
      <Container>
      <ConfirmButton color={'secondary'} variant={'contained'} >Confirmar</ConfirmButton>
      </Container>
    </div>
  );
};

export default Cart;
