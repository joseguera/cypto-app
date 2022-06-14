import styled from "styled-components";

export const GraphGrid = styled.div`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 45px;
    margin: 20px;
`;

export const GraphCell = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 602px;
    height: 359px;
    padding: 13px;
    position: relative;
    border-radius: 10px;
    background: white;
`;

export const GraphHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const DateButtonHolder = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 331px;
    height: 43px;
    background: #2C2F36;
    color: #FFFFFF;
    border-radius: 10px
`;

export const ChartHolder = styled.div`
    width: 520px;
    height: 220px;
`;