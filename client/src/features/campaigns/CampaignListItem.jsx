import Statistics from "../../ui/Statistics";
import ProgressBar from "../../ui/ProgressBar";
import LinkButton from "../../ui/LinkButton";
import Heading from "../../ui/Heading";
import Image from "../../ui/Image";
import Amount from "../../ui/Amount";
import {
  StyledCampaignListItem,
  Caption,
  CaptionFooter,
} from "../../styles/CampaignListItem.styled";
import { IMAGE_URL } from "../../utils/constants";
import {
  formatNumberWithCommas,
  formatCompactNumber,
  getCountdownDays,
  truncateText,
  findPercentage,
} from "../../utils/helpers";

function CampaignListItem({ campaign }) {
  return (
    <StyledCampaignListItem>
      <Image
        h="30rem"
        src={`${IMAGE_URL}/${campaign.image}`}
        alt={campaign.title}
      />
      <Caption>
        <Heading as="h2" titleOf="campaignCard">
          {truncateText(campaign.title, 50)}
        </Heading>
        <Statistics
          supporters={campaign.supporters}
          daysLeft={getCountdownDays(campaign.deadline)}
        />
        <ProgressBar
          percentage={findPercentage(
            campaign.supporters,
            campaign.totalSupporters
          )}
        />
        <CaptionFooter>
          <div>
            <Amount type="pledge">
              ${formatNumberWithCommas(campaign.price)}
            </Amount>
            <Amount type="total">
              funded of ${formatCompactNumber(campaign.fundedOf)}
            </Amount>
          </div>
          <LinkButton to={`/campaign/${campaign.slug}`}>Support</LinkButton>
        </CaptionFooter>
      </Caption>
    </StyledCampaignListItem>
  );
}

export default CampaignListItem;
