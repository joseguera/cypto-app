import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const ModalBackground = styled.div`
  background: black;
  opacity: 0.5;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
  animation: 1s ease-out 0s 1 normal none running grDYJ;
  cursor: auto;
  @media only screen and ${breakpoint.device.xs} {
    width: 100%;
    height: 100%;
  }
  @media only screen and ${breakpoint.device.sm} {
    width: 1519px;
    height: 713px;
  }
  @media only screen and ${breakpoint.device.lg} {
    width: 1519px;
    height: 713px;
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 155px;
  background: ${({ theme }) => theme.colors.buttonFill};
  box-shadow: rgb(0 0 0 / 30%) 0px 19px 38px, rgb(0 0 0 / 22%) 0px 15px 12px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.text};
  z-index: 11;
  animation: 0.5s ease-out 0s 1 normal none running dOuzSV;
  cursor: auto;
  @media only screen and ${breakpoint.device.xs} {
    top: 75px;
    left: 36px;
    width: 318px;
    height: 675px;
  }
  @media only screen and ${breakpoint.device.sm} {
    left: 324.5px;
    width: 870px;
    height: 450px;
    padding-bottom: 18px;
  }
  @media only screen and ${breakpoint.device.lg} {
    left: 324.5px;
    width: 870px;
    height: 450px;
    padding-bottom: 18px;
  }
`;

export const ModalBody = styled.div`
  position: relative;
  padding-top: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  justify-content: center;
`;

export const TitleHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 817.5px;
  @media only screen and ${breakpoint.device.xs} {
    width: 285px;
  }
  @media only screen and ${breakpoint.device.sm} {
    width: 817.5px;
  }
  @media only screen and ${breakpoint.device.lg} {
    width: 817.5px;
  }
`;

export const TitleItems = styled.div`
  display: flex;
  gap: 292px;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 28px;
  line-height: 0%;
  font-weight: bold;
  @media only screen and ${breakpoint.device.xs} {
    display: none;
  }
  @media only screen and ${breakpoint.device.sm} {
    display: inherit;
  }
  @media only screen and ${breakpoint.device.lg} {
    display: inherit;
  }
`;

export const Cross = styled.div`
  cursor: pointer;
`;

export const CrossImg = styled.img`
  width: 31px;
  height: 31px;
`;

export const ModalUtilities = styled.div``;

export const UtilityHolder = styled.div`
  display: flex;
  gap: 41px;
  @media only screen and ${breakpoint.device.xs} {
    flex-direction: column;
  }
  @media only screen and ${breakpoint.device.sm} {
    flex-direction: row;
  }
  @media only screen and ${breakpoint.device.lg} {
    flex-direction: row;
  }
`;

export const Utilities = styled.div`
  display: flex;
  gap: 39px;
  flex-direction: column;
`;

export const FormHolder = styled.form`
  width: 406px;
  height: 53px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

export const Form = styled.div`
  width: 408px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  gap: 16px;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
`;

export const Input = styled.input`
  margin-left: 27px;
  background: none;
  border: none;
  height: 16px;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};
  &:focus {
    outline: none;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding-bottom: 24px;
  flex-direction: row;
  .button {
    height: 48px;
    width: 235px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    line-height: 0%;
    font-weight: bold;
    cursor: pointer;
  }
  .close-button {
    color: ${({ theme }) => theme.colors.portfolioText};
    background: ${({ theme }) => theme.colors.portfolioBackground};
  }
  .save-button {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.portfolioButton};
  }
  @media only screen and ${breakpoint.device.xs} {
    flex-direction: column;
  }
  @media only screen and ${breakpoint.device.sm} {
    flex-direction: row;
  }
  @media only screen and ${breakpoint.device.lg} {
    flex-direction: row;
  }
`;
