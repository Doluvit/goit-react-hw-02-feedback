import styled from "styled-components";


export const StatisticsList = styled.ul`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 30%;
  border: solid 2px transparent;
  border-radius: 5px;
  box-shadow: var(--insetBoxShadow);
`;


export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: row;
  `;


export const StatisticsText = styled.span`
  margin-right: 10px;
  font-size: large;
  font-weight: 500;
  color: var(--textColor);
`;