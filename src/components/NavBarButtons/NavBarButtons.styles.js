import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export const Button = styled.div`
  cursor: pointer;
  background: #2C2F36;
  border-radius: 10px;
  padding: 8px 32px;
  text-align: center;
`;

export const ButtonText = styled.h2`
  font-size: 23px;
  font-weight: 800;
  line-height: 0px;
`;

export const styledLink = {
  textDecoration: "none",
  color: "#FFFFFF"
}