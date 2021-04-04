import React, { useContext } from 'react'
import InputLogin from './inputLogin/inputLogin'
import { DivPrincipal, ImgLogo } from './styles'
import brandLogo from '../../assets/brandLogo.png'
import GlobalStateContext from '../../globalState/globalStateContext'

const PaginaLogin = () => {

    const { hooks } = useContext(GlobalStateContext)

    const [email, onChangeEmail] = hooks.useInput("")
    const [senha, onChangeSenha] = hooks.useInput("")

    return (
        <DivPrincipal>
            <ImgLogo
                src={brandLogo}
                alt="FutureEats"
            />
            <InputLogin
                inputEmail={email}
                inputSenha={senha}
                onChangeEmail={onChangeEmail}
                onChangeSenha={onChangeSenha}
            />
            <a>Não possui cadastro? Cadastre-se</a>
        </DivPrincipal>
    )
}

export default PaginaLogin