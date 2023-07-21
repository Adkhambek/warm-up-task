import styled from "styled-components";
import CampaignListItem from "./CampaignListItem";
import { getCampaigns } from "../../services/apiCampaigns";
import { useEffect, useState } from "react";
import Spinner from "../../ui/Spinner";

const StyledCampaignList = styled.ul`
  margin: 3rem 0;
  display: flex;
  align-items: start;
  gap: 5rem;
  flex-wrap: wrap;
`;

function CampaignList() {
  const [campaigns, setCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCampaigns();
        setCampaigns(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <StyledCampaignList>
      {isLoading && <Spinner />}
      {error && <p>{error}</p>}
      {!isLoading &&
        campaigns.map((campaign) => {
          return <CampaignListItem campaign={campaign} key={campaign.slug} />;
        })}
    </StyledCampaignList>
  );
}

export default CampaignList;
