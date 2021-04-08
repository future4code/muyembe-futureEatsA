import React, { useEffect, useState } from 'react'
import { ContainerPerfilPage } from './styles'
import PerfilDetail from '../../components/PerfilDetail/PerfilDetail'
import axios from 'axios'

const PerfilPage = () => {
    const [address, setAddress] = useState({})
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

    useEffect(() => {
        getAddress()
    }, [])
    
    return (
        <ContainerPerfilPage>
            <PerfilDetail address={address} />
        </ContainerPerfilPage>
    )
}

export default PerfilPage