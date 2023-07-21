import styled, { css } from "styled-components";

const type = {
  pledge: css`
    color: #333333;
    font-size: 2.4rem;
  `,
  pledgeLg: css`
    color: #333333;
    font-size: 6rem;
  `,
  total: css`
    color: #4d4d4d;
    font-size: 1.6rem;
  `,
};

const Amount = styled.span`
  display: block;
  ${(props) => type[props.type]}
`;

export default Amount;
