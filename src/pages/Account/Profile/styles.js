import styled from "styled-components";
 

export const Wrapper = styled.div`
    
    flex-direction: row;  
    transition: margin .5s ease;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    position: relative;
    overflow: hidden; 
    margin: 0 5%;
     
    
    @media screen and (min-width: 1024px)  {
        -ms-flex-direction: row;
        flex-direction: row;
        margin: 0 8%;

    }
`; 


export const Menu = styled.div`
    width: auto;
    visibility: visible;
    -ms-flex-preferred-size: 25%;
    flex-basis: 25%;
    min-height: 100%;
    display: block;
`; 

export const Content = styled.div`

    background-color: #ffffff; 
    padding:30px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    
    @media screen and (min-width: 768px){
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }

`; 