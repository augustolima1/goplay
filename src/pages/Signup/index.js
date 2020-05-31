import React from "react";
import { Link } from "react-router-dom";
import { FiMail,FiLock} from 'react-icons/fi'
import {
    Input,
    Button
  } from "~/components";

import './styles.css';

export default function Signup() {
 
 
  return (
             <div className="login-container">
                 <div className="login-body">
                     <div className="login-form">
                         <div className="login-form-body">
                                <div className="login-logo">Inscreva-se e comece a aprender!</div>
                                <form action="">
                                    
                                        <Input
                                            icon={<FiMail color={"#757575"} size={"17px"} />}
                                            placeholder={"Nome Completo"}
                                            onChange={e => console.log(e.target.value)}
                                        /> 

                                        <Input
                                            icon={<FiMail color={"#757575"} size={"17px"} />}
                                            placeholder={"E-mail"}
                                            onChange={e => console.log(e.target.value)}
                                        /> 
                                        <Input
                                            icon={<FiLock color={"#757575"}  size={"17px"} />}
                                            placeholder={"Senha"}
                                            onChange={e => console.log(e.target.value)}
                                        /> 

                                     <Button  styleButton='lg-fi-btn' disable={false} textButton='Cadastre-se' />

                                     <div className="login-footer signup-footer ">
                                     Já tem uma conta? <Link to="/login">Fazer login</Link>
                                    </div>
                                     
                                    
                                </form>
                         </div> 
                     </div>
                 </div>
             </div>
   
  );
}

