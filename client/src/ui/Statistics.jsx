import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUserFriends } from "@fortawesome/free-solid-svg-icons";

const StyledStatistics = styled.div`
  font-size: 1.4rem;
  color: #4d4d4d;
  display: flex;
  margin: 1rem 0;
`;

const StatisticItem = styled.div`
  display: flex;
  align-items: center;
  &:last-child {
    margin-left: 2rem;
  }
`;

const P = styled.p`
  margin-left: 0.5rem;
  font-weight: 600;
`;

function Statistics({ supporters, daysLeft }) {
  return (
    <StyledStatistics>
      <StatisticItem>
        <FontAwesomeIcon icon={faUserFriends} />
        <P>{supporters}</P>
      </StatisticItem>
      <StatisticItem>
        <FontAwesomeIcon icon={faClock} />
        <P>
          {daysLeft === 0 && "expired"}
          {daysLeft !== 0 &&
            `${daysLeft} ${daysLeft === 1 ? "day" : "days"} left`}
        </P>
      </StatisticItem>
    </StyledStatistics>
  );
}

export default Statistics;
