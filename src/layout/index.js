import React from "react";
//import Sidebar from "./Sidebar";
 
import "./scss/Layout.scss";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
       
      {/*<Sidebar />*/}

      <div style={{marginBottom:30}}>
        {children} 
      </div>
    </React.Fragment>
  );
};

export default Layout;
