import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import {BottomBar} from './styles'

const useStyles = makeStyles({
  // root: {
  //  // width: 500,
  // },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
      <BottomBar>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
            <BottomNavigationAction label="Home" icon={<HomeRoundedIcon/>} />
            <BottomNavigationAction label="Carrinho" icon={<ShoppingCartRoundedIcon />} />
            <BottomNavigationAction label="Perfil" icon={<PersonRoundedIcon />} />
        </BottomNavigation>
    </BottomBar>
  );
}