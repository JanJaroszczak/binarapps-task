import styled from 'styled-components';

export const StyledGameBoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-auto-rows: 40px;
  margin: 0 auto;
  padding: 30px;
  width: 400px;
  gap: 30px;

  border: 1px solid black;

  @media (max-width: 450px) {
    grid-template-columns: repeat(3, auto);
    width: 300px;
  }
`;
