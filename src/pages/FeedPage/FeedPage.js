import React, {useEffect, useState} from 'react'
import FormPropsTextFields from '../../components/inputBusca/formSearch'
import bluetooth from '../../assets/bluetooth.png'
import fullBattery from '../../assets/full-battery.png'
import signal from '../../assets/signal.png'
import wifi from '../../assets/wifi.png'
import Divider from '@material-ui/core/Divider'
import { ContainerFeedPage,FeedPageHeader,Icons,Texto,SubHeaderFeed, Mainmenu } from './styles'
import axios from 'axios'
import useProtectedPage from '../../hooks/useProtectedPage'
import SimpleBottomNavigation from '../../components/barraInferior/bottomBar'

import FeedCard from "../../components/FeedCard/FeedCard"; /*** teste useParams ***/


const FeedPage = () => {

    const [restaurantName, setRestaurantName] = useState("") /*** teste useParams ***/

    useProtectedPage()
    useEffect(() => {

        const headers = {
            headers: {
                auth: localStorage.getItem('Token')
            }
        }
    
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants`, headers)
        .then((res) => {
            console.log(res.data)
            setRestaurantName(res.data) /*** teste useParams ***/
        })

    }, [])

    /*** teste useParams ***/

    const nameList = restaurantName.restaurants?.map((detail) => {
        return <FeedCard name={detail} id={detail}/>
    })

    /*** teste useParams ***/


    return (
        <ContainerFeedPage>
            <FeedPageHeader>
                <div>
                    <Icons src={signal} />
                    <Texto>Sketch</Texto>
                    <Icons src={wifi} />
                </div>
                <Texto>9:41PM</Texto>
                <div>
                    <Icons src={bluetooth} />
                    <Texto>100%</Texto>
                    <Icons src={fullBattery} />
                </div>
            </FeedPageHeader>
            <SubHeaderFeed>
                <p>FutureEats</p>            
            </SubHeaderFeed>
            <Divider/>
            <FormPropsTextFields />
            <Mainmenu>
                <div>
                    <ul>
                        <li>Burger</li>
                        <li>Asiática</li>
                        <li>Massas</li>
                        <li>Saudáveis</li>
                    </ul>
                </div>
            </Mainmenu>

            <div>{nameList}</div> {/* /*** teste useParams ***/}

            <SimpleBottomNavigation /> 
        </ContainerFeedPage>
    )
    
}

export default FeedPage