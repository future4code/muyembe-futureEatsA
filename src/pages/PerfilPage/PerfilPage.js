import React, { useEffect, useState } from 'react'
import { ContainerPerfilPage } from './styles'
import PerfilDetail from '../../components/PerfilDetail/PerfilDetail'
import axios from 'axios'

const PerfilPage = () => {
    const [address, setAddress] = useState({})
    const [user, setUser] = useState({})
    const [listRequests, setListRequests] = useState(
        [{
            name: 'Bullgueer Vila Madalena',
            date: '23  outubro 2019',
            subtotal: 'R$ 57,00'
        }
        ])

    const getAddress = () => {
        const headers = {
            headers: {
                auth: localStorage.getItem('Token')
            }
        }
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile/address', headers)
            .then((response) => {
                setAddress(response.data.address)
            })
            .catch((error) => {
                console.log(error.data)
            })
    }

    const getUser = () => {
        const headers = {
            headers: {
                auth: localStorage.getItem('Token')
            }
        }
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile', headers)
            .then((response) => {
                setUser(response.data.user)
            })
            .catch((error) => {
                console.log(error.data)
            })
    }

    useEffect(() => {
        getAddress()
        getUser()
    }, [])

    return (
        <ContainerPerfilPage>
            <PerfilDetail address={address} user={user} listRequests={listRequests} />
        </ContainerPerfilPage>
    )
}

export default PerfilPage