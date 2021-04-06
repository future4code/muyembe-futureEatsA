import styled from 'styled-components'

export const ContainerSearchPage = styled.div`
        p{
            text-align:center;
        }
`
export const SearchPageHeader = styled.header`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 5vh;
        margin: 5px 5px 0 5px;
        padding: 0 5px 0 5px;
`
export const Icons = styled.img`
        width: 16.5px;
        height: 16.5px;
        border-radius: 1px;
`
export const Texto = styled.span`
        margin: 0 5px 0 5px;
`
export const SubHeaderSearch = styled.div`
        margin: 10px 18px;
        display:grid;
        grid-template-columns:auto 1fr 1fr;
        justify-items:flex-end; 
        column-gap:120px;       
`
