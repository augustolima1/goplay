import React, { Suspense } from "react";
import ReactDOM   from 'react-dom';
import { Router } from "react-router-dom";
import history    from "./services/history";
import App        from './App';

import Splash from './components/Splash';


ReactDOM.render(
     <Router history={history}>
          <Suspense fallback={<Splash/>}>
             <App />
          </Suspense>
      </Router>,
     document.getElementById('root')
 );