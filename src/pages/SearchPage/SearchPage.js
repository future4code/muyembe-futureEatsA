import React from 'react'
import FormPropsTextFields from '../../components/inputBusca/formSearch'
import {ContainerSearchPage} from './styles'

const SearchPage = ()=>{
    
    return(
        <ContainerSearchPage>              
            <FormPropsTextFields/> 
            <p>Busque por nome de restaurante</p>          
        </ContainerSearchPage>
    )
}

export default SearchPage