import styled from "styled-components";

export const Container_ = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Box = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;
`;


export const Message = styled.h1`
  
`;


export const Teste = styled.div`
    height:50px;
`;

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
    
    @media screen and (min-width: 1024px)  {
        -ms-flex-direction: row;
        flex-direction: row;
        margin: 0 8%;
    }
`; 

export const Container = styled.div` 
    transition: width .5s ease,flex-basis .5s ease;
    transition: width .5s ease,flex-basis .5s ease,-ms-flex-preferred-size .5s ease;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;

    
    -ms-flex-preferred-size: 70%;
    flex-basis: 70%;
    -ms-flex-order: 1;
    order: 1;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    

    @media screen and (min-width: 1024px)  {
        width:70%;
    }    
`; 
 

export const Video = styled.div` 
      position: relative; 
      padding-bottom: 56.25%; 
      height: 0;
      overflow: hidden; 
      max-width: 100%;
      background:#2e2e32;
      background: #141414;

      iframe,  object,  video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
    }

`;
 
export const PanelWrapper = styled.div`
    display: -ms-flexbox;
    -ms-flex-order: 2;
    order: 2;
    position: relative;
    overflow: hidden;
    background: #141414;
    border-radius:8px;
    display: initial;
    width: 100%;
    margin: 20px 0px 0px;

    @media screen and (min-width: 1024px)  {
          margin:0 0 0 30px;
          display: initial;
          width:26%;
          
    }

    svg {
    flex-shrink: 0;
    margin-left: auto;
    }

    div + div  {
      margin-top: 10px;
    }
   
`; 

export const PanelHeader = styled.header`
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      padding: 30px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      font-size: 16px;
      font-weight: bold;
`; 

 

export const PlayListProgress = styled.div`
      position: relative;
      width: 38px;
      height: 38px;
      flex-shrink: 0;
      background: rgb(0, 0, 0);
      border-radius: 50%;
`;  

export const PlayListDescription= styled.div`
      
      margin: 0px 20px !important;
     
      span{
        display:block;
      }
      @media (max-width: 1130px){
          span:first-child {
            font-size: 14px;
        }
      }
      span:first-child {
          font-size: 16px;
          font-weight: bold;
      }

      span:last-child {
          font-size: 12px;
          color: rgb(135, 134, 139);
          margin-top: 2px;
      }
`;  



export const PlayList = styled.ul`
    position: relative;
    margin: 30px;
    padding:0;

    li + li {
        margin-top: 20px;
      }

      li+li::before, li::after {
        content: "";
        left: 4px;
        width: 2px;
        top: 50%;
        height: calc(100% + 5px);
        position: absolute;
        background:rgb(58, 56, 63);
      }
      
      li+li::before {
         top: auto;
         bottom: 50%;
      }

      .active > button{
        background:#1ed760;
     }
     .active > a {
         color:#1ed760 !important;
     }        

     .current > button{
        background:#FFF;
     }
     .current > a {
         color:#FFF !important;
     }      
     
`;

export const PlayListLi = styled.li`
 
      font-size: 14px;
      font-weight: 600;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      position: relative;
      z-index: 5;
      color: #535353;



      a {
       color: #b3b3b3;
       cursor:pointer;
      }
      a:hover{
        color:#FFF;
      }
    
     button:hover {
       box-shadow: rgba(255, 255, 255, 0.05) 0px 0px 0px 6px;
     }
     
     button::before {
       content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 250%;
        height: 250%;
        transform: translate(-50%, -50%);
     }

    
`;  

export const PlayListButton = styled.button`
    position: relative;
    cursor: pointer;
    width: 10px;
    height: 10px;
    margin-right: 30px;
    flex-shrink: 0;
    z-index: 2;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    border-radius: 50%;
    transition: all 0.2s ease 0s;
    background:rgb(68, 67, 75);

 

`;     
