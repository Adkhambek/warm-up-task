import styled from "styled-components";

export const StyledCampaignListItem = styled.li`
  width: calc((100% - 10rem) / 3);
  border-radius: 1.6rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

export const Caption = styled.div`
  padding: 2rem;
`;

export const CaptionFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
