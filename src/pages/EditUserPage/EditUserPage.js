import React from 'react'
import { useInput } from '../../hooks/useInput'
import { TextField, Button } from '@material-ui/core'
import {ContainerForm,Container} from './styles'
import HeaderEditUserPage from '../../components/HeaderEditUserPage/HeaderEditUserPage'

const EditUserPage = () => {
  // hook de formulário
  const { inputText, onChange } = useInput({
    name: '',
    email: '',
    cpf: '',
  })

  return (
    <Container>
      <HeaderEditUserPage/>      
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
          Salvar
        </Button>
      </ContainerForm>
    </Container>
  )
}

export default EditUserPage
