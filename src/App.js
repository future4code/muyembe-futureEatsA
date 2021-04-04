import React from 'react';
import './App.css';
import Router from './Routes/router'
import {Container} from './AppStyles'
import GlobalState from './globalState/globalState'

function App() {
  return (
    <GlobalState>
        <Container>        
            <Router/>        
        </Container>
    </GlobalState>
  );
}

export default App;