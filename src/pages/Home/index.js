import React from "react";
import Header                        from '~/components/Header';

import { FiChevronUp,FiChevronDown } from 'react-icons/fi'

import './styles.css';
 

export default function Home() {
 
 
  return (
    <>
    <Header title={"Home"}/>

    <div className="curso-container">
        <div className="video-container">

        </div>

        <div className="play-list">
             <ul>
               <li></li>
               <li></li>
               <li></li>
             </ul>
       </div>
    </div>
    
    </>
  );
}

