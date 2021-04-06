import React from 'react'
import FormPropsTextFields from '../../components/inputBusca/formSearch'
import { ContainerSearchPage,SearchPageHeader,Icons,Texto,SubHeaderSearch } from './styles'
import bluetooth from '../../assets/bluetooth.png'
import fullBattery from '../../assets/full-battery.png'
import signal from '../../assets/signal.png'
import wifi from '../../assets/wifi.png'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const SearchPage = () => {

    return (
        <ContainerSearchPage>
            <SearchPageHeader>
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
            </SearchPageHeader>
            <SubHeaderSearch>
                <ArrowBackIosIcon/>
                <p>Busca</p>
            </SubHeaderSearch>
            <FormPropsTextFields />
            <p>Busque por nome de restaurante</p>
        </ContainerSearchPage>
    )
}

export default SearchPage