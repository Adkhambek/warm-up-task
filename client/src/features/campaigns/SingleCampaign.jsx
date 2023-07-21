import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Container from "../../ui/Container";
import ProgressBar from "../../ui/ProgressBar";
import Button from "../../ui/Button";
import { getCampaignBySlug } from "../../services/apiCampaigns";
import Spinner from "../../ui/Spinner";
import { IMAGE_URL } from "../../utils/constants";
import {
  formatNumberWithCommas,
  getCountdownDays,
  findPercentage,
} from "../../utils/helpers";

const H1 = styled.h1`
  font-size: 3.4rem;
  font-weight: 500;
  color: #333333;
  text-align: center;
  width: 70%;
  margin: 3rem auto;
`;

const SummaryWrapper = styled.div`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
`;

const Image = styled.img`
  width: 70%;
  height: 60rem;
  object-fit: cover;
`;

const SummaryDescription = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 3rem;
  margin-bottom: 3rem;
`;

const PledgeAmount = styled.span`
  display: block;
  color: #333333;
  font-size: 6rem;
`;

const TotalAmount = styled.span`
  display: block;
  font-size: 1.6rem;
  color: #4d4d4d;
`;

const P = styled.span`
  margin-bottom: 3rem;
  font-size: 1.6rem;
  color: #4d4d4d;
`;

const CampaignContent = styled.div`
  font-size: 2.2rem;
  color: #333333;
  padding: 2rem 4rem;
`;

function SingleCampaign() {
  const { slug } = useParams();
  const [campaign, setCampaign] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCampaignBySlug(slug);
        setCampaign(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [slug]);

  return (
    <Container>
      {isLoading && <Spinner />}
      {error && <p>{error}</p>}
      {!isLoading && !error && (
        <>
          <H1>{campaign.title}</H1>
          <SummaryWrapper>
            <Image
              src={`${IMAGE_URL}/${campaign.image}`}
              alt={campaign.title}
            />
            <SummaryDescription>
              <PledgeAmount>
                ${formatNumberWithCommas(campaign.price)}
              </PledgeAmount>
              <TotalAmount>
                funded of ${formatNumberWithCommas(campaign.fundedOf)} USD
              </TotalAmount>
              <ProgressBar
                percentage={findPercentage(
                  campaign.supporters,
                  campaign.totalSupporters
                )}
              />
              <P>
                <strong>{campaign.supporters}</strong> supporters,{" "}
                <strong>{getCountdownDays(campaign.deadline)}</strong> days left
              </P>
              <Button>Support</Button>
            </SummaryDescription>
          </SummaryWrapper>
          <CampaignContent>{campaign.description}</CampaignContent>
        </>
      )}
    </Container>
  );
}

export default SingleCampaign;
