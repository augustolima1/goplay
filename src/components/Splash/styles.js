
import styled from "styled-components";

export const Splash = styled.div`
    background: #191919;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 30;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
`;


export const SplashGroup = styled.div` 
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
`;



export const Spinner = styled.div` 
    height: 3vw;
    width: 3vw;
    margin: 2px;
    display: inline-block;
    line-height: normal;
    animation: fadein .75s linear both;
    display: block;
    margin: 0 auto 4vw;
`;


export const SpinnerIcon = styled.figure`
@keyframes infinite-spinning {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
    animation-name: infinite-spinning;
    animation-duration: .5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
    animation-play-state: running;
    margin: 0;
`;

export const LoadingText = styled.p`
    color: #cecece;
    font-family: Open Sans,sans-serif;
    font-weight: 300;
    font-size: .8rem;
    height: 1em;
`;    

