import styled from "styled-components";

export const RestaurantProductContainer = styled.div`
    display: grid;
    justify-content: center;
`

export const ProductCategory = styled.div`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: -0.39px;
  color: #000000;
  border-bottom: 1px solid #000000;
  margin: 16px 0px 8px 0px;

`

export const ProductContainer = styled.div`
    width: 328px;
    height: 112px;
    border: solid 1px #b8b8b8;
    border-radius: 8px;
    display:grid;
    grid-template: 1em / 96px 77px 77px 77px;
    
    text-align: center;
`

export const ProductImg = styled.img`
    width: 96px;
    height: 112px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    grid-column: 1/2;
`

export const ProductName = styled.h4`
    font-size: 16px;
    font-family: Roboto;
    font-weight: normal;
    color: #5cb646;
    grid-column: 2/3;
    margin: 20px 0px 8px 16px;
    
`

export const ProductDescription = styled.h4`
    font-size: 12px;
    font-family: Roboto;
    font-weight: normal;
    color: #b8b8b8;
    grid-column: 2/4;
    margin: 28px 0px 8px 16px;
`

export const ProductPrice = styled.h4`
    font-size: 16px;
    font-family: Roboto;
    font-weight: normal;
    color: #000000;
    grid-column: 2/3;
    margin-left: 16px;
    display:grid;
`

export const AddButton = styled.button`
    width: 90px;
    height: 31px;
    border: solid 1px #5cb646;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    grid-column: 3/4;
    margin-left: 64px;
`