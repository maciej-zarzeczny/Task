import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 4rem;
`;

export const LoaderWrapper = styled.div`
  text-align: center;
`;

export const DataRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const Button = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  color: #fff;
  background-color: #123abc;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  font-size: 0.75rem;
  padding: 0.5rem 0.75rem;

  &:hover {
    opacity: 0.8;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Info = styled.div`
  border-radius: 15px;
  background-color: #f4f4f4;
  padding: 2rem;
  min-width: 10%;
  text-align: center;
`;
