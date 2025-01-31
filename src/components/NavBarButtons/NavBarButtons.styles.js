import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const OverviewContainer = styled.div`
  display: flex;
  width: 100%;
  margin-left: 47px;
  @media only screen and ${breakpoint.device.xs} {
    display: flex;
  }
  @media only screen and ${breakpoint.device.sm} {
    display: none;
  }
  @media only screen and ${breakpoint.device.lg} {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  .nav-link {
    text-decoration: none;
    border-radius: 10px;
  }
  @media only screen and ${breakpoint.device.xs} {
    display: none;
  }
  @media only screen and ${breakpoint.device.sm} {
    display: flex;
  }
  @media only screen and ${breakpoint.device.lg} {
    display: flex;
  }
`;

export const Button = styled.div`
  cursor: pointer;
  padding: 8px 32px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

export const ButtonText = styled.h2`
  font-size: 23px;
  font-weight: 600;
  line-height: 0px;
`;

export const CloseHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Cross = styled.div`
  cursor: pointer;
  width: 15px;
  height: 15px;
  line-height: 15px;
`;

export const CrossImg = styled.img`
  width: 15px;
  height: 15px;
  filter: invert(${({ theme }) => theme.colors.loopIcon}%);
`;