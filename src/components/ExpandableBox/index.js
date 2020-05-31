import React, { useState } from "react";
import { FiChevronUp,FiChevronDown } from 'react-icons/fi'

import {
  ExpandableBox as ExpandableBoxStyle,
  ExpandableBoxProgress,
  ExpandableBoxBody,
  ExpandableBoxHeader,
  
} from "./styles";

const ExpandableBox = props => {
  const [open, setOpen] = useState(!!props.open || false);

  return (
       <ExpandableBoxStyle>
         <ExpandableBoxHeader  open={open} onClick={() => setOpen(!open)}>
                 {props.header}
                
                {open ? (
                    <FiChevronUp  color="#87868B" size="20px"/>
                ) : (
                    <FiChevronDown color="#87868B" size="20px"/>
                )}
          </ExpandableBoxHeader>

          {open && <ExpandableBoxBody>{props.body}</ExpandableBoxBody>}

       </ExpandableBoxStyle>
  );
};

export default ExpandableBox;
