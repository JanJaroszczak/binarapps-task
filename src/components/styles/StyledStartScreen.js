import styled from 'styled-components';

export const StyledTitle = styled.h1`
  margin: 30px 0;
  text-align: center;
  font-size: 3rem;
  text-transform: capitalize;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledInput = styled.input`
  width: 400px;
  height: 40px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;

  @media (max-width: 430px) {
    width: 350px;
  }

  @media (max-width: 380px) {
    width: 300px;
  }

  @media (max-width: 330px) {
    width: 265px;
  }
`;
