import Container from "../ui/Container";
import Heading from "../ui/Heading";
import CampaignList from "../features/campaigns/CampaignList";

function Homepage() {
  return (
    <Container>
      <Heading as="h1" titleOf="homePage">
        Fundraising now
      </Heading>
      <CampaignList />
    </Container>
  );
}

export default Homepage;
