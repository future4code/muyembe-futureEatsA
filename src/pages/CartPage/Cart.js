import { Button } from "@material-ui/core";
import React from "react";
import {CartHeader} from './styled'
import bluetooth from '../../assets/bluetooth.png'
import fullBattery from '../../assets/full-battery.png'
import signal from '../../assets/signal.png'
import wifi from '../../assets/wifi.png'
import {Icons, Total, Address, Main, Texto, MeuCarrinho, AddressArea, AddressPlaceHolder} from './styled'


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
      <p>Carrinho vazio</p>
      <Main>
      <Total>
        <span>SUBTOTAL</span>
        <span>Frete R$0,00</span>
        <span>R$0,00</span>
      </Total>
      <p>Forma de pagamento</p>
      <hr />
      <div>
        <input type="radio" />
        <input type="radio" />
      </div>
      </Main>

      <Button>Confirmar</Button>
    </div>
  );
};

export default Cart;
