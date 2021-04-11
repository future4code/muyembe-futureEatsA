import React, { useEffect, useContext } from 'react'
import { ContainerPerfilPage } from './styles'
import PerfilDetail from '../../components/PerfilDetail/PerfilDetail'
import axios from 'axios'
import useProtectedPage from '../../hooks/useProtectedPage'
import GlobalStateContext from '../../globalState/globalStateContext'

const PerfilPage = () => {
    useProtectedPage()
    const{setters} = useContext(GlobalStateContext) 
    
    const getAddress = () => {
        const headers = {
            headers: {
                auth: localStorage.getItem('Token')
            }
        }
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile/address', headers)
            .then((response) => {
                setters.setAddress(response.data.address)
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
                setters.setUser(response.data.user)
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
            <PerfilDetail />
        </ContainerPerfilPage>
    )
}

export default PerfilPage