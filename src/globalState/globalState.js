import React, { useState } from 'react'
import GlobalStateContext from './globalStateContext'
import axios from 'axios'

const GlobalState = (props) => {
    const [address, setAddress] = useState({})
    const [user, setUser] = useState({})
    const [listRequests, setListRequests] = useState(
        [{
            name: 'Bullgueer Vila Madalena',
            date: '23  outubro 2019',
            subtotal: 'R$ 57,00'
        }
        ])

    const login = (body) => {
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/login", body)
            .then((res) => {
                window.localStorage.setItem("Token", res.data.token)
            }).catch((err) => {
                console.log(err)
            })
    }

    const requests = { login }
    const states = { address, user, listRequests }
    const setters = { setAddress, setUser, setListRequests }

    const data = { requests, states, setters }

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState