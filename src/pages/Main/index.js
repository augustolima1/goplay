import React from "react";
import {
  Header,
  ExpandableBox
} from '~/components';

import { FiChevronUp,FiChevronDown } from 'react-icons/fi'
 
import {
  Box,
  Message,
  Wrapper,
  Container,
  PanelWrapper,
  PanelHeader,
  Video,
  PlayList,
  PlayListLi,
  PlayListButton,
  PlayListProgress,
  PlayListDescription,
  Teste

} from "./styles";
 

export default function Main() {
 
 
  return (
    <>
    <Header title={"Home"}/>
    <Teste></Teste>
    <Wrapper>
       <Container>
          <Video>
            <iframe  src="https://www.youtube.com/embed/NLcXijzqP9M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Video>
       </Container>
 
       <PanelWrapper> 
         <PanelHeader>Curso JavaScript</PanelHeader> 
              <ExpandableBox
                  open={true} 
                  header={
                    <>
                      <PlayListProgress></PlayListProgress>
                      <PlayListDescription>
                            <span>Titulo 2</span>
                            <span>lorem ipson</span>
                      </PlayListDescription>
                    </>
                    }

                    body={
                        <PlayList>
                              <PlayListLi className="active">
                                <PlayListButton />
                                <a>Introdução</a>
                              </PlayListLi> 
            
                              <PlayListLi className="current">
                                <PlayListButton/>
                                <a>Iniciando aplicação</a>
                              </PlayListLi> 
                              
                              <PlayListLi>
                                <PlayListButton/>
                                <a>Introdução</a>
                              </PlayListLi>                        
                              <PlayListLi>
                                <PlayListButton/>
                                <a>Introdução</a>
                              </PlayListLi>                        
                              <PlayListLi>
                                <PlayListButton/>
                                <a>Introdução</a>
                              </PlayListLi>                        
                              <PlayListLi>
                                <PlayListButton/>
                                <a>Introdução</a>
                              </PlayListLi> 
                              <PlayListLi>
                                <PlayListButton/>
                                <a>Introdução</a>
                              </PlayListLi>                                                                      
                        </PlayList>                  
                    }

                />

<ExpandableBox
                   
                  header={
                    <>
                      <PlayListProgress></PlayListProgress>
                      <PlayListDescription>
                            <span>Titulo</span>
                            <span>lorem ipson</span>
                      </PlayListDescription>
                    </>
                    }

                    body={
                        <PlayList>
                              <PlayListLi className="active">
                                <PlayListButton />
                                <a>Introdução</a>
                              </PlayListLi> 
            
                              <PlayListLi className="current">
                                <PlayListButton/>
                                <a>Iniciando aplicação</a>
                              </PlayListLi> 
                              <PlayListLi>
                                <PlayListButton/>
                                <a>Introdução</a>
                              </PlayListLi> 
                              <PlayListLi>
                                <PlayListButton/>
                                <a>Introdução</a>
                              </PlayListLi>                                                                      
                        </PlayList>                  
                    }

                />
               

              
       </PanelWrapper>


    </Wrapper>
    </>
  );
}

