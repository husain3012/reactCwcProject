import React from "react";
import { useState } from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
const FaqBody = styled.div`
  max-height: ${(props) => (props.isExpanded ? "300px" : "0")};
  overflow: hidden;
  transition: max-height 0.4s ease-out;
  max-width: 50ch;
`;

const FaqComponent = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div itemProp="mainEntity" itemScope="" itemType="https://schema.org/Question">
      <div className="wealth-faq-collapse-header" id="heading-0">
        <div onClick={() => setIsExpanded((prevValue) => !prevValue)} aria-expanded="true" className="d-flex align-content-center flex-row p-0 text-left wealth-section-description collapsed">
          <p className="m-0" itemProp="name">
            {props.faq.ques}
          </p>
          <div className="arrow-down ms-auto">{isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}</div>
        </div>
      </div>
      <FaqBody isExpanded={isExpanded}>
        <div className="wealth-faq-collapse-content" itemProp="text">
          {props.faq.ans}
        </div>
      </FaqBody>
    </div>
  );
};

export default FaqComponent;
