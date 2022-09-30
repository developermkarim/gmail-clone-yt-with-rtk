import { Switch } from '@mui/material';
import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Mail from './Mail';
import MailList from './MailList';
import Sidebar from './Sidebar';
import './mail.css'
function App() {
  return (
     <Router>
   
    <div className="App">

    <Header/>
  
    <div className="app_body">

    <Sidebar/>


    {/* <Switch> */}
      {/* <Route path='/mail'> */}
      <Mail/>
      {/* </Route> */}

    {/* <Route path='/'> */}
      <MailList/>
    {/* </Route> */}
    {/* </Switch> */}
      </div>

      </div>
     </Router>

  );
}

export default App;
