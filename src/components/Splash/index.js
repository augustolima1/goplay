import React, { useState, useEffect } from 'react'
import {Splash,SplashGroup,Spinner,SpinnerIcon,LoadingText} from './styles';

const Slash = () => {
   

  return (
    <>
      <Splash>
          <SplashGroup>
              <Spinner>
                  <SpinnerIcon>
                    <svg  version="1.1" viewBox="0 0 40 40" enable-background="new 0 0 40 40">
                        <path d="M37,23c-1.657,0-3-1.343-3-3c0-7.72-6.28-14-14-14c-1.657,0-3-1.343-3-3s1.343-3, 3-3c11.028,0,20,8.972,20,20C40,21.657,38.657,23,37,23z" fill="#fff"></path>
                    </svg>
                  </SpinnerIcon>                
              </Spinner>
              <LoadingText>Aguarde enquanto preparamos o Goplay pra você</LoadingText>
          </SplashGroup>
      </Splash>
    </>
  )
}


export default Slash