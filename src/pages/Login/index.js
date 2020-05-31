import React from "react";
import { Link } from "react-router-dom";
import { FiChevronUp,FiChevronDown,FiMail,FiLock} from 'react-icons/fi';
import {
    Input,
    Button
  } from "~/components";

import './styles.css';

export default function Profile() {
 
 
  return (
             <div className="login-container">
                 <div className="login-body">
                     <div className="login-form">
                         <div className="login-form-body">
                                <div className="login-logo">Faça login em sua conta!</div>
                                <form action="">
                                    
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

                                   <Link to="/dashboard">
                                       <Button styleButton='lg-fi-btn' disable={false} textButton='Entrar' />
                                   </Link>    

                                    
                                    <Link to="/forgot">Esqueci minha senha</Link>

                                    <div className="login-footer">
                                        Não tem uma conta?  <Link to="/signup">Cadastre-se</Link>
                                    </div>

                                    <div className="login-or">Ou</div>

                                    <Button styleButton='lg-fi-btn' disable={false} textButton='Facebook' />
                                    
                                </form>
                         </div> 
                     </div>
                 </div>
             </div>
   
  );
}

