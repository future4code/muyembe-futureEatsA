import React from 'react'
import GlobalStateContext from './globalStateContext'
import axios from 'axios'

const GlobalState = (props) => {

    const login = (body) => {
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/login", body)
            .then((res) => {
                window.localStorage.setItem("Token", res.data.token)
            }).catch((err) => {
                console.log(err)
            })
    }

    const requests = { login }

    const data = { requests }
    
    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState