import styled from "styled-components";
import Statistics from "../../ui/Statistics";
import ProgressBar from "../../ui/ProgressBar";
import LinkButton from "../../ui/LinkButton";

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

function CampaignListItem() {
  return (
    <StyledCampaignListItem>
      <Image src="https://picsum.photos/500" alt="random image" />
      <Caption>
        <H2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</H2>
        <Statistics supporters={20} daysLeft={3} />
        <ProgressBar percentage={40} />
        <CaptionFooter>
          <div>
            <PledgeAmount>$200</PledgeAmount>
            <TotalAmount>funded of $20k</TotalAmount>
          </div>
          <LinkButton to="/campaign">Support</LinkButton>
        </CaptionFooter>
      </Caption>
    </StyledCampaignListItem>
  );
}

export default CampaignListItem;
