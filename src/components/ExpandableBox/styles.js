import styled,{css} from "styled-components";

export const ExpandableBox = styled.div`
    
`;

export const ExpandableBoxProgress = styled.div`
    position: relative;
    width: 38px;
    height: 38px;
    flex-shrink: 0;
    background: rgb(0,0,0);
    border-radius: 50%;
`;


export const ExpandableBoxHeader = styled.div`
    min-height:62px;
    display: flex;
    align-items: center;
    cursor: pointer; 
    padding: 12px 16px; 

    ${({open}) =>
        open
        ? css`background:#272727;`
        : css`background:#393939;`
    };

   
`;

 
export const ExpandableBoxBody = styled.div`
   display: flex;
`;
