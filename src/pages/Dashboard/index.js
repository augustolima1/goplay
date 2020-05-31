import React from "react";
import { Link } from "react-router-dom";
import { FiChevronUp,FiChevronDown,FiMail,FiLock} from 'react-icons/fi';
import {
    Header,
    Input,
    Button
  } from "~/components";

import './styles.css';

import {Container,ContainerBox,ContainerBoxIntern,ContainerBody,ContainerImage} from './styles.js';

export default function Dashboard() {
 
 
  return (
       <>  <Header/>
             <Container>
                 <ContainerBox>
                 <Link to="/main">  
                    <ContainerBoxIntern>
                       <ContainerImage img="'https://m.sebrae.com.br/Sebrae/Portal%20Sebrae/EAD2/Thumb%20EAD2/Como%20criar%20um%20modelo%20de%20neg%C3%B3cio%20de%20impacto%20socioambiental.png'"></ContainerImage>
                        <ContainerBody>
                            <p><strong>Torne-se um programador desejado</strong> no mercado com esses cursos gratuitos</p>
                        </ContainerBody>    
                    </ContainerBoxIntern>
                   </Link> 
                  
                   <Link to="/main">  
                    <ContainerBoxIntern>
                       <ContainerImage img="https://m.sebrae.com.br/Sebrae/Portal%20Sebrae/Imagens%20SebraeNA/02-Aprenda%20a%20planejar%20as%20estrat%C3%A9gias%20do%20seu%20neg%C3%B3cio.png"></ContainerImage>
                        <ContainerBody>
                            <p><strong>Torne-se um programador desejado</strong> no mercado com esses cursos gratuitos</p>
                        </ContainerBody>    
                    </ContainerBoxIntern>
                    </Link>

                    <Link to="/main">  
                    <ContainerBoxIntern>
                       <ContainerImage img="https://m.sebrae.com.br/Sebrae/Portal%20Sebrae/Imagens%20SebraeNA/08-Lideran%C3%A7a%20como%20desenvolver%20times%20de%20alta%20performance.png"></ContainerImage>
                        <ContainerBody>
                            <p><strong>Torne-se um programador desejado</strong> no mercado com esses cursos gratuitos</p>
                        </ContainerBody>    
                    </ContainerBoxIntern>
                    </Link>

                    <Link to="/main">  
                    <ContainerBoxIntern>
                       <ContainerImage img="https://m.sebrae.com.br/Sebrae/Portal%20Sebrae/Imagens%20SebraeNA/Gest%C3%A3o%20financeira.png"></ContainerImage>
                        <ContainerBody>
                            <p><strong>Torne-se um programador desejado</strong> no mercado com esses cursos gratuitos</p>
                        </ContainerBody>    
                    </ContainerBoxIntern>
                    </Link>

                    <Link to="/main">  
                    <ContainerBoxIntern>
                       <ContainerImage img="https://m.sebrae.com.br/Sebrae/Portal%20Sebrae/Imagens%20SebraeNA/02-Aprenda%20a%20planejar%20as%20estrat%C3%A9gias%20do%20seu%20neg%C3%B3cio.png"></ContainerImage>
                        <ContainerBody>
                            <p><strong>Torne-se um programador desejado</strong> no mercado com esses cursos gratuitos</p>
                        </ContainerBody>    
                    </ContainerBoxIntern>
                    </Link>

                    <Link to="/main">  
                    <ContainerBoxIntern>
                       <ContainerImage img="https://m.sebrae.com.br/Sebrae/Portal%20Sebrae/Imagens%20SebraeNA/02-Aprenda%20a%20planejar%20as%20estrat%C3%A9gias%20do%20seu%20neg%C3%B3cio.png"></ContainerImage>
                        <ContainerBody>
                            <p><strong>Torne-se um programador desejado</strong> no mercado com esses cursos gratuitos</p>
                        </ContainerBody>    
                    </ContainerBoxIntern> 
                    </Link>                   

                 </ContainerBox>  
             </Container>
             </>
   
  );
}

