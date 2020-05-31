import React from "react";
import Header                        from '~/components/Header';
import Sidebar                       from '~/layout/Sidebar';

import { FiChevronUp,FiChevronDown } from 'react-icons/fi'

import {
  Wrapper,
  Content

} from "./styles";
 

export default function Profile() {
 
 
  return (
    <>
    <Header title={"Home"}/>
  
    <Wrapper>
        
          <Sidebar></Sidebar>
          <Content></Content>
         
    </Wrapper>
    </>
  );
}

