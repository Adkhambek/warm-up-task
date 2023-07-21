import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../ui/Container";
import ProgressBar from "../../ui/ProgressBar";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import Image from "../../ui/Image";
import Amount from "../../ui/Amount";
import { getCampaignBySlug } from "../../services/apiCampaigns";
import Spinner from "../../ui/Spinner";
import {
  SummaryWrapper,
  SummaryDescription,
  Statistics,
  CampaignContent,
} from "../../styles/SingleCampaign.styled";
import { IMAGE_URL } from "../../utils/constants";
import {
  formatNumberWithCommas,
  getCountdownDays,
  findPercentage,
} from "../../utils/helpers";

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
          <Heading as="h1" titleOf="campaignPage">
            {campaign.title}
          </Heading>
          <SummaryWrapper>
            <Image
              w="70%"
              h="60rem"
              src={`${IMAGE_URL}/${campaign.image}`}
              alt={campaign.title}
            />
            <SummaryDescription>
              <Amount type="pledgeLg">
                ${formatNumberWithCommas(campaign.price)}
              </Amount>
              <Amount type="total">
                funded of ${formatNumberWithCommas(campaign.fundedOf)} USD
              </Amount>
              <ProgressBar
                percentage={findPercentage(
                  campaign.supporters,
                  campaign.totalSupporters
                )}
              />
              <Statistics>
                <strong>{campaign.supporters}</strong> supporters,{" "}
                <strong>{getCountdownDays(campaign.deadline)}</strong> days left
              </Statistics>
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
