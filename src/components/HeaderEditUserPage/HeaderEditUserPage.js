import React from 'react'
import{
    ContainerHeaderEditUserPage,
    HeaderEditUser,
    Icons,
    Texto,
    SubHeaderEditUser
} from './styles'
import bluetooth from '../../assets/bluetooth.png'
import fullBattery from '../../assets/full-battery.png'
import signal from '../../assets/signal.png'
import wifi from '../../assets/wifi.png'
import back from '../../assets/back.png'
import Divider from '@material-ui/core/Divider';

const HeaderEditUserPage = () => {
    return (
        <ContainerHeaderEditUserPage>
            <HeaderEditUser>
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
            </HeaderEditUser>
            <SubHeaderEditUser>
                <Icons src={back} />
                <p>Editar</p>
                <div></div>
            </SubHeaderEditUser>
            <Divider />
        </ContainerHeaderEditUserPage>
    )
}

export default HeaderEditUserPage