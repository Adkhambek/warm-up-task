import styled from "styled-components";

const Image = styled.img`
  height: ${(props) => props.h || "auto"};
  width: ${(props) => props.w || "100%"};
  object-fit: cover;
  display: block;
`;

export default Image;
