import styled from "styled-components";
import Container from "../ui/Container";
import CampaignList from "../features/campaigns/CampaignList";

const H1 = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin: 2rem 0;
`;

function Homepage() {
  return (
    <Container>
      <H1>Fundraising now</H1>
      <CampaignList />
    </Container>
  );
}

export default Homepage;
