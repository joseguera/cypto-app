import styled from "styled-components";
import plusIcon from "../../images/Iconly-Bulk-Plus.svg";

export const DataSummaryHolder = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  height: 303px;
  width: 437px;
`;

export const DataSummaryContainer = styled.div`
  margin-left: 38px;
  margin-top: 23px;
`;

export const MarketDataOne = styled.div`
  margin-bottom: 19px;
`;

export const MarketDataTwo = styled.div``;

export const MarketDataThree = styled.div``;

export const Symbol = styled.span`
  text-transform: uppercase;
`;

export const DataItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  height: 28px;
`;

export const PlusIcon = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 7px;
  background-image: url(${plusIcon});
  background-repeat: no-repeat;
  background-position: center;
  display: grid;
  justify-items: center;
  align-content: center;
`;

export const Item = styled.div`
  display: flex;
  gap: 4px;
`;

export const ItemTitle = styled.div`
  font-weight: 600;
`;