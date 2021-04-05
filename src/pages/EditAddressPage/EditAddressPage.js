import React, { useState } from 'react'
import { useInput } from '../../hooks/useInput'
import { TextField, Button } from '@material-ui/core'
import { Title, ContainerForm, Container } from './styles'

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
          <ContainerForm >
            <Title>Endereço</Title>
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