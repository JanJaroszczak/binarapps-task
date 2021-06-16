import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledQuestion = styled.h3`
  margin: 35px auto 30px;
  font-size: 2rem;
  text-transform: capitalize;
`;

export const StyledGameBoardWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-auto-rows: 40px;
  gap: 30px;
  margin: 0 auto;
  padding: 30px;
  width: 500px;
  border-radius: 5px;

  border: 1px solid black;

  @media (max-width: 550px) {
    grid-template-columns: repeat(3, auto);
    width: 400px;
  }

  @media (max-width: 410px) {
    width: 350px;
    padding: 20px;
  }

  @media (max-width: 360px) {
    width: 265px;
  }
`;

export const StyledAlert = styled.span`
  position: absolute;
  bottom: -27px;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  width: 270px;
  font-size: 1.2rem;
  color: red;
  text-align: center;
`;
