import React from 'react'
import { useInput } from '../../hooks/useInput'
import { TextField, Button } from '@material-ui/core'
import {
  ContainerForm,
  Container,
  EditUserPageHeader,
  SubHeaderEditUser,
  Icons,
  Texto,
  ContainerEditUserPage
} from './styles'
import bluetooth from '../../assets/bluetooth.png'
import fullBattery from '../../assets/full-battery.png'
import signal from '../../assets/signal.png'
import wifi from '../../assets/wifi.png'
import back from '../../assets/back.png'
import Divider from '@material-ui/core/Divider';

const EditUserPage = () => {
  // hook de formulário
  const { inputText, onChange } = useInput({
    name: '',
    email: '',
    cpf: '',
  })

  return (
    <Container>
      <ContainerEditUserPage>
        <EditUserPageHeader>
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
        </EditUserPageHeader>
        <SubHeaderEditUser>
          <Icons src={back} />
          <p>Editar</p>
          <div></div>
        </SubHeaderEditUser>
        <Divider />
      </ContainerEditUserPage>
      <ContainerForm >
        <TextField
          variant="outlined"
          size="small"
          label="Nome"
          value={inputText.name}
          type="text"
          name="name"
          placeholder="Nome e sobrenome"
          onChange={onChange}
          required
          style={{ margin: '0.5rem 0', width: '18rem' }}
        />

        <TextField
          variant="outlined"
          size="small"
          label="E-mail"
          value={inputText.email}
          type="email"
          name="email"
          placeholder="email@email.com"
          onChange={onChange}
          required
          style={{ margin: '0.5rem 0' }}
        />

        <TextField
          variant="outlined"
          size="small"
          label="CPF"
          value={inputText.cpf}
          name="cpf"
          placeholder="000.000.000-00"
          pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
          onChange={onChange}
          required
          style={{ margin: '0.5rem 0' }}
        />
        <Button variant="contained" color="secondary">
          Criar
        </Button>
      </ContainerForm>
    </Container>
  )
}

export default EditUserPage
