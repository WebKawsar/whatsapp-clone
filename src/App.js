import './App.css';
import Chat from './Components/Chat/Chat';
import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import Login from './Components/Login/Login';
import { useStateValue } from './Redux/StateProvider';




function App() {
  const [{ user }, dispatch] = useStateValue();


  return (
    <div className="App">
      {
        !user ? (
          <Login />
        ):(

          <div className="app_body">

            <Router>
              <Switch>
                <Route path="/rooms/:roomId">
                  <Sidebar></Sidebar>
                  <Chat></Chat>
                </Route>
    
                <Route exact path="/">
                  <Sidebar></Sidebar>
                  <Chat />
                </Route>
    
              </Switch>
            </Router>
    
            
          </div>
        )
      }

    </div>
  );
}

export default App;
