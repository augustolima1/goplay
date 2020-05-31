import React from 'react';
import {Header as _header,Icon,Logo,Title,AlignItem,Item} from './styles';
import { Link, withRouter } from "react-router-dom";

import {FaBars} from 'react-icons/fa';

const Header = ({title}) => {
    return (
          <_header>
             {/*<Logo>App</Logo>            
             <AlignItem>
                    <Icon>
                        <FaBars size="1.6em"/>
                    </Icon> 
                  <Title>{title}</Title>
              </AlignItem>*/}
              <Item> <Title><Link to="/dashboard">  Goplay</Link></Title></Item>
              <Item>
                 <Link to="/account/profile">
                   <div><span></span><span>augusto.pbl14@gmail.com</span></div>
                    <img src="https://avatars1.githubusercontent.com/u/62573696?v=4"></img>
                 </Link>

              </Item>
           </_header>
          );
};
  
export default Header;