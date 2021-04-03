import React, { useState } from "react";
import { useInput } from "../../hooks/useInput";
import {
    InputLabel,
    IconButton,
    InputAdornment,
    OutlinedInput,
    FormControl,
    TextField,
    Button
    
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import Logo from '../../assets/brandLogo.png'
import { Title, ContainerForm, Container,ImageLogo } from "./styles";

function Register() {

    // hook de formulário
    const { inputText, onChange, clearInput } = useInput({
        name: "",
        email: "",
        cpf: "",
        password: "",
        confirmPassword: ""
    });

    //Estado das senhas
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    //visibilidade das senhas
    const clickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const clickShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
    // console.log(inputText.password) um teste para conferir se o hook estava funcionando

    // Validação das senhas
    const validation = (event) => {
        const password = inputText.password
        const confirmationPassword = inputText.confirmPassword
        event.preventDefault()
        if (password === confirmationPassword) {
            alert("Cadastro feito com sucesso")
            clearInput()
        } else {
            alert("Por favor, confira sua senha")
            clearInput()
        }
    }


    return (
        <Container>
             <ImageLogo src={Logo} alt={'labe-food logo'}/>
            <ContainerForm onSubmit={validation}>

                <Title>Cadastrar</Title>

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
                    style={{ margin: "0.5rem 0" }}
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
                    style={{ margin: "0.5rem 0" }}
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
                    style={{ margin: "0.5rem 0" }}
                />

                <FormControl
                    variant="outlined"
                    required="true"
                    style={{ margin: "0.5rem 0" }}
                >
                    <InputLabel htmlFor="outlined-adornment-password"
                        margin="dense" >
                        Senha
          </InputLabel>

                    <OutlinedInput
                        margin="dense"
                        label="Senha"
                        value={inputText.password}
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Mínimo 6 caracteres"
                        onChange={onChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={clickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <FormControl
                    variant="outlined"
                    required="true"
                    style={{ margin: "0.5rem 0" }}
                >
                    <InputLabel htmlFor="outlined-adornment-password" margin="dense">
                        Confirmar
          </InputLabel>

                    <OutlinedInput
                        margin="dense"
                        label="Confirmar"
                        value={inputText.confirmPassword}
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirme a senha anterior"
                        onChange={onChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={clickShowConfirmPassword}
                                    edge="end"
                                >
                                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                <Button variant="contained" color="primary">
                    Criar
      </Button>

            </ContainerForm>
        </Container>
    );
}

export default Register;
