import styled from "styled-components";

const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 0.5rem;
  background-color: #dfe9f3;
  overflow: hidden;
  margin: 2rem 0;
`;

const ProgressBarFill = styled.div`
  width: ${(props) => (props.percentage ? `${props.percentage}%` : "0")};
  height: 100%;
  background-color: #4aa567;
  transition: width 0.3s ease-in-out;
`;

const ProgressBar = ({ percentage }) => {
  return (
    <ProgressBarWrapper>
      <ProgressBarFill percentage={percentage} />
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
