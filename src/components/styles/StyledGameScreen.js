import styled from 'styled-components';

export const StyledQuestion = styled.h3`
  margin: 30px 0;
  text-align: center;
  font-size: 2rem;
  text-transform: capitalize;
`;

export const StyledGameBoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-auto-rows: 40px;
  margin: 0 auto;
  padding: 30px;
  width: 500px;
  gap: 30px;

  border: 1px solid black;

  @media (max-width: 550px) {
    grid-template-columns: repeat(3, auto);
    width: 400px;
  }

  @media (max-width: 430px) {
    grid-template-columns: repeat(2, auto);
    gap: 20px;
    width: 300px;
    padding: 20px;
  }

  @media (max-width: 330px) {
    width: 260px;
  }
`;
