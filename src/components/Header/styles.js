import styled from "styled-components";

export const _Header = styled.header`
    display: flex;
    position: relative;
    max-height: 100px;
    background-color:#282731;
    padding: 0 5%;
    z-index: 1030;
    height:78px;
    margin-bottom:60px;
`;

export const Header = styled.header`
   background-color:#282731;
   background: #141414;
    width: 100%;
    max-width: 1366px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    color: rgb(255, 255, 255);
    /*height:78px;*/
    max-height: 100px;
    padding: 12px 0px;
    padding:10px 5%;
    margin-bottom:20px;

    @media screen and (min-width: 1024px)  {
        padding:10px 8%;
    }

    

`;    
export const Icon = styled.div`
    visibility:hidden;
    padding: 14px 15px;
    display: -webkit-flex;
    display: none;
    float: left;
    cursor:pointer;

    :hover{
        background-color:#367fa9;
    }

    @media (max-width: 767px){
        display:flex;
    }

`; 

export const Logo = styled.div`
    -webkit-transition: width .3s ease-in-out;
    -o-transition: width .3s ease-in-out;
    transition: width .3s ease-in-out;
    display: block;
    float: left;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    width: 230px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    padding: 0 15px;
    font-weight: 300;
    overflow: hidden;

    background-color: #000;
    color: #fff;
    border-bottom: 0 solid transparent;

    @media (max-width: 767px){
        width: 100%;
        float: none;
    }
`; 
    



export const Title = styled.span`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: 1px;
  /*margin-left: 15px;*/
`;

export const AlignItem = styled.div`
  display: flex;
  align-items: center;
`;

export const Item = styled.div`
        display: flex;
        -webkit-box-align: center;
        align-items: center;

        a{
            display: flex;
           text-align: right; 
        }

        div {
            display: flex;
            flex-direction: column;
            margin-right: 18px;
            align-self: center;
        }

        img {
            width: 38px;
            height: 38px;
            border-width: 2px;
            border-style: solid;
            border-color: #1ed760;
            border-image: initial;
            border-radius: 50%;
        }

        div span:last-child {
            color: rgb(135, 134, 139);
            font-size: 12px;
        }
`;