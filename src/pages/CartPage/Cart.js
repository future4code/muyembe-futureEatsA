import { Button } from "@material-ui/core";
import React from "react";
import {CartHeader} from './styled'
import bluetooth from '../../assets/bluetooth.png'
import fullBattery from '../../assets/full-battery.png'
import signal from '../../assets/signal.png'
import wifi from '../../assets/wifi.png'
import {Icons, Container, ConfirmButton, Choices, ChoicesContainer, PaymentChoice, SubTotal, Total, PaymentMethod, Address, Main, Texto, MeuCarrinho, AddressArea, AddressPlaceHolder, TextTotal} from './styled'


const Cart = () => {
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
         <Address>Rua Alessandra Vieira, 42</Address>

      </AddressArea>
      <PaymentMethod>Carrinho vazio</PaymentMethod>
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
      <Choices htmlFor="cartao">Cartão de crédito</Choices>
      <input type="radio" name="cartao" id="cartao"/><br/>
      </ChoicesContainer>
      <ChoicesContainer>
      <Choices htmlFor="dinheiro">Dinheiro</Choices>
      <input type="radio" name="dinheiro" id="dinheiro" /><br/>
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
