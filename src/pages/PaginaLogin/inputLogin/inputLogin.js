import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { DivInput } from './styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function InputLogin() {
  const classes = useStyles();

  return (
    
    <form className={classes.root} noValidate autoComplete="off">
      <DivInput>
        <p>Entrar</p>
        <TextField
          style={{
            width: "328px",
            height: "56px",
            borderRadius: "2px"
          }}
          InputLabelProps={{
            shrink: true,
          }}
            required
            id="required"
            label="E-mail"
            type="email"
            placeholder="email@email.com"
            variant="outlined"
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
            required
            id="required"
            label="Senha"
            type="password"
            placeholder="Minimo 6 caracteres"
            variant="outlined"
        />
      </DivInput>
    </form>
  );
}