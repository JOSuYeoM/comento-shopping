import styled from "styled-components";
import React from "react";

const Navigation = () => {
  return (
    <NavigationStyled>
      <div> 코멘토 쇼핑</div>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.div`
  padding: 20px 120px;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #000000; 

  border-bottom: solid 1px #eeeeee; ;
`;

export default Navigation; 