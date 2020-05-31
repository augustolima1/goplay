import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    max-width: 1426px;
    padding: 30px;

    @media (max-width: 625px){
        padding: 10px;
   
    }
`;


export const ContainerBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: minmax(392px, auto);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));

    @media (max-width: 1120px){
           /*grid-template-columns: 1fr;*/
            /*grid-template-rows: repeat(4, minmax(300px, auto));*/
        
    }

    @media (max-height: 825px){
              
            /*grid-template-rows: minmax(392px, auto);*/
   }

`;

export const ContainerBoxIntern = styled.div`
            position: relative;
            text-align: center;
            flex-direction: column;
            -webkit-box-pack: justify;
            justify-content: space-between;
            border-radius: 8px;
            transition: all 0.2s ease 0s;
            border-width: 2px;
            border-style: solid;
            border-color: #a4a4a4;
            border-image: initial;
            border-left: 4px solid #005eb8;
            
             
            cursor: pointer;

            ::after {
                width: 0%;
                background: #005eb8;
            }

            ::before, ::after {
                    content: "";
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    width: 0%;
                    height: 3px;
                    transition: width 0.4s ease-in-out 0s, color 0.2s ease 0s;
            }  
            
            :hover::after {
                width: 100%;
                }

            :hover{
                border: 2px solid #005eb8;
                border-left: 4px solid #005eb8;
                margin-top: -6px;
                margin-bottom: 6px;
            } 

            
            
            p{
                max-width: 270px;
                text-align: center;
                color: rgb(135, 134, 139);
                font-size: 16px;
                line-height: 26px;
            }

            
`;


export const ContainerBody = styled.div`
                display: flex;
                flex-direction: column;
                -webkit-box-align: center;
                align-items: center;
                flex: 1 1 0%;
                padding:64px 20px 64px;

                            
`;


export const ContainerImage = styled.div`
                height: 30vh;
                background-color: #e0e6eb;
                /*background-position: center center;*/
                background-repeat: no-repeat;
                background-size: cover;
                border-radius: 0 4px 0 0;
                position: relative;
                background-image: url(${({img})=>img });
 
`;