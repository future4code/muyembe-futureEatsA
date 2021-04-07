import React from 'react'
import { useInput } from '../../hooks/useInput'
import { TextField, Button } from '@material-ui/core'
import {
  ContainerForm,
  Container,
  ContainerEditAddressPage,
  SubHeaderEditAddress,
  EditAddressPageHeader,
  Icons,
  Texto

} from './styles'
import bluetooth from '../../assets/bluetooth.png'
import fullBattery from '../../assets/full-battery.png'
import signal from '../../assets/signal.png'
import wifi from '../../assets/wifi.png'
import back from '../../assets/back.png'
import Divider from '@material-ui/core/Divider';

const EditAddressPage = () => {


  // hook de formulário
  const { inputText, onChange } = useInput({
    street: '',
    number: '',
    complement: '',
    neighbourhood: '',
    city: '',
    state: '',
  })


  return (
    <>
      <Container>
        <ContainerEditAddressPage>
          <EditAddressPageHeader>
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
          </EditAddressPageHeader>
          <SubHeaderEditAddress>
            <Icons src={back} />
            <p>Editar</p>
            <div></div>
          </SubHeaderEditAddress>
          <Divider />
        </ContainerEditAddressPage>
        <ContainerForm >
          <TextField
            variant="outlined"
            size="small"
            label="Logradouro"
            value={inputText.street}
            type="text"
            name="street"
            placeholder="Rua/Av."
            onChange={onChange}
            style={{ margin: '0.5rem 0', width: '18rem' }}
            required
          />
          <TextField
            variant="outlined"
            size="small"
            label="Número"
            value={inputText.number}
            type="text"
            name="number"
            placeholder="Número"
            onChange={onChange}
            style={{ margin: '0.5rem 0' }}
            required
          />
          <TextField
            variant="outlined"
            size="small"
            label="Complemento"
            value={inputText.complement}
            type="text"
            name="complement"
            placeholder="Apto/Bloco"
            onChange={onChange}
            style={{ margin: '0.5rem 0' }}
          />
          <TextField
            variant="outlined"
            size="small"
            label="Bairro"
            value={inputText.neighbourhood}
            type="text"
            name="neighbourhood"
            placeholder="Bairro"
            onChange={onChange}
            style={{ margin: '0.5rem 0' }}
            required
          />
          <TextField
            variant="outlined"
            size="small"
            label="Cidade"
            value={inputText.city}
            type="text"
            name="city"
            placeholder="Cidade"
            onChange={onChange}
            style={{ margin: '0.5rem 0' }}
            required
          />
          <TextField
            variant="outlined"
            size="small"
            label="Estado"
            value={inputText.state}
            type="text"
            name="state"
            placeholder="Estado"
            onChange={onChange}
            style={{ margin: '0.5rem 0' }}
            required
          />
          <Button type={'submit'} variant="contained" color="secondary">
            Salvar
            </Button>
        </ContainerForm>
      </Container>
      )
    </>
  )
}

export default EditAddressPage