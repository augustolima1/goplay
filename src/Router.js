import React from "react";
import { Route,Switch} from "react-router-dom"; 

import Login             from "./pages/Login";
import Signup            from "./pages/Signup";
import Forgot            from "./pages/Forgot";


import Dashboard         from "./pages/Dashboard";
import Home              from "./pages/Home";
import Main              from "./pages/Main";
import Profile           from "./pages/Account/Profile";

 



export default function Routes() {
  return (
   
    <Switch>
      <Route path="/"                    exact component={Login} />
      <Route path="/login"                    exact component={Login} />
      <Route path="/signup"              exact component={Signup} />
      <Route path="/forgot"              exact component={Forgot} />


      <Route path="/Dashboard"           exact component={Dashboard} />
      <Route path="/main"                exact component={Main} />
      <Route path="/home"                exact component={Home} />
      <Route path="/account/profile/"    exact component={Profile} />
       
      {/*<Route path="/" component={() =><h1>Desculpe, um erro ocorreu. Estaremos verificando o que aconteceu.</h1>} />*/}
    </Switch>
    
  );
}
