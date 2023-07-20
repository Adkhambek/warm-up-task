import styled from "styled-components";

const Button = styled.button`
  background-color: #4aa567;
  color: #fff;
  border-radius: 3rem;
  padding: 1rem 2rem;
  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: 600;
  transition: all 0.4s;
  cursor: pointer;
  border: none;
  width: 100%;
  &:hover {
    background-color: #3a8251;
  }
`;

export default Button;
