import React,{Component} from 'react';
import { Link, withRouter } from "react-router-dom";

import history from "../../services/history";


const Sidebar = props => {
  const { pathname } = props.location;
 
  const routes = [
    {
      title: "Home",
      path: "/" 
    },
    {
      title: "menu.cities",
      path: "/cities" 
    },
    {
      title: "menu.area",
      path: "/area" 
    },
    
    {
      title: "menu.news",
      path: "/news" 
    },
    {
      title: "menu.donations",
      path: "/donations" 
    }
  ];

 
  return ( 
       <div className="sidebar">
        <nav className="navbar">
            <ul className="navbar-nav">
                  {routes.map(route => (
                  <li key={route.title} className="nav-item active">
                    <Link
                        to={route.path}
                    >
                      <span className="link-text">{route.title}</span>
                    </Link>
                  </li>
                ))}
            </ul>
        </nav>
        </div> 
      );
  };

 
export default withRouter(Sidebar);