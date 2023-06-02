import styled from "styled-components";


export const ButtonList = styled.ul`
  display: flex;
  gap: 20px;
  padding: 0;
 `;

export const ButtonItem = styled.button`
  padding: 10px 15px;

  font-size: 18px;
  font-weight: 600;
  color: var(--textColor);

  background-color: var(--itemBackgroundColor);
  border-radius: 5px;
  border: 2px solid transparent;
  box-shadow: var(--mainBoxShadow);

  cursor: pointer;

  transition: all 250ms ease-in-out;

  :hover {
    color: var(--accentTextColor);
    background-color: var(--mainBackgroundColor);
  }
`;