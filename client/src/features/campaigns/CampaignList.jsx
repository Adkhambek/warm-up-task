import styled from "styled-components";
import CampaignListItem from "./CampaignListItem";

const StyledCampaignList = styled.ul`
  margin: 3rem 0;
  display: flex;
  align-items: start;
  gap: 5rem;
  flex-wrap: wrap;
`;

function CampaignList() {
  return (
    <StyledCampaignList>
      <CampaignListItem />
      <CampaignListItem />
      <CampaignListItem />
      <CampaignListItem />
      <CampaignListItem />
    </StyledCampaignList>
  );
}

export default CampaignList;
