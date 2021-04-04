import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { DivInput } from './styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    },
  },
}));

export default function InputLogin(props) {
  const classes = useStyles();

  return (
    
    <form className={classes.root}>
      <DivInput>
            <p>Entrar</p>
        <TextField
          style={{
            width: "328px",
            height: "56px",
            borderRadius: "2px"
          }}
          InputLabelProps={{
            shrink: true
          }}
            value={props.inputEmail}
            onChange={props.onChangeEmail}
            id="required"
            label="E-mail"
            type="email"
            placeholder="email@email.com"
            variant="outlined"
            required
          />
        <TextField
          style={{
            width: "328px",
            height: "56px",
            borderRadius: "2px"
          }}
          InputLabelProps={{
            shrink: true,
          }}
            value={props.inputSenha}
            onChange={props.onChangeSenha}
            id="required"
            label="Senha"
            type="password"
            placeholder="Minimo 6 caracteres"
            variant="outlined"
            required
        />
        <Button
          style={{
            width: "328px",
            height: "42px",
            padding: "12px 16px",
            borderRadius: "2px",
            backgroundColor: "#5cb646",
            color: "black"
          }}
          variant="contained"
          color="primary"
          className={classes.margin}
        >
          Entrar
        </Button>
      </DivInput>
    </form>
  );
}