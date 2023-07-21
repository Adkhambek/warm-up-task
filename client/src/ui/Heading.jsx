import styled, { css } from "styled-components";

const titleOf = {
  campaignCard: css`
    min-height: 6rem;
  `,
  homePage: css`
    margin: 2rem 0;
  `,
  campaignPage: css`
    text-align: center;
    width: 70%;
    margin: 3rem auto;
  `,
};

const Heading = styled.h1`
  color: #333333;
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3.4rem;
      font-weight: 700;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2.2rem;
      font-weight: 600;
    `}
  ${(props) => titleOf[props.titleOf]}
`;

export default Heading;
