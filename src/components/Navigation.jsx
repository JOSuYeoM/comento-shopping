import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navigation = ({ name, back }) => {
  const navigate = useNavigate();
  return (
    <NavigationStyled>
      {back && <BackButton onClick={() => navigate(-1)}>{`<`}</BackButton>}
      <div onClick={() => navigate("/")}> {name}</div>
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

const BackButton = styled.div`
  position: absolute;
  left: 18px;
  top: 18px;
  color: #000000;
`;

export default Navigation; 