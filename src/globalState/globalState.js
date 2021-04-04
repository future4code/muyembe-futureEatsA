import React, { useState } from 'react'
import GlobalStateContext from './globalStateContext'

const GlobalState = (props) => {

   const useInput = (initialValue) => {
    const [valorInput, setValorInput] = useState(initialValue)

    const onChangeValorInput = (event) => {
        setValorInput(event.target.value)
    }

    return [valorInput, onChangeValorInput]

   }

    const hooks = {useInput}

    const dados = { hooks }
    
    return(
        <GlobalStateContext.Provider value={dados}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState