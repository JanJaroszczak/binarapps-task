import styled from 'styled-components';

export const StyledGameBoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  margin: 0 auto;
  width: 600px;
  gap: 20px;

  border: 1px solid black;
`;
