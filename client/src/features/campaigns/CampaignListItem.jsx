import styled from "styled-components";
import Statistics from "../../ui/Statistics";
import ProgressBar from "../../ui/ProgressBar";
import LinkButton from "../../ui/LinkButton";
import { IMAGE_URL } from "../../utils/constants";
import {
  formatNumberWithCommas,
  formatCompactNumber,
  getCountdownDays,
  truncateText,
} from "../../utils/helpers";

const StyledCampaignListItem = styled.li`
  width: calc((100% - 10rem) / 3);
  border-radius: 1.6rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

const Image = styled.img`
  height: 30rem;
  object-fit: cover;
`;

const Caption = styled.div`
  padding: 2rem;
`;

const H2 = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  min-height: 6rem;
`;

const CaptionFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PledgeAmount = styled.p`
  font-size: 2.4rem;
`;

const TotalAmount = styled.p`
  font-size: 1.6rem;
  color: #4d4d4d;
`;

function CampaignListItem({ campaign }) {
  return (
    <StyledCampaignListItem>
      <Image src={`${IMAGE_URL}/${campaign.image}`} alt={campaign.title} />
      <Caption>
        <H2>{truncateText(campaign.title, 50)}</H2>
        <Statistics
          supporters={campaign.supporters}
          daysLeft={getCountdownDays(campaign.deadline)}
        />
        <ProgressBar percentage={40} />
        <CaptionFooter>
          <div>
            <PledgeAmount>
              ${formatNumberWithCommas(campaign.price)}
            </PledgeAmount>
            <TotalAmount>
              funded of ${formatCompactNumber(campaign.fundedOf)}
            </TotalAmount>
          </div>
          <LinkButton to={`/campaign/${campaign.slug}`}>Support</LinkButton>
        </CaptionFooter>
      </Caption>
    </StyledCampaignListItem>
  );
}

export default CampaignListItem;
