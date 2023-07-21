import styled from "styled-components";

export const SummaryWrapper = styled.div`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
`;

export const SummaryDescription = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 3rem;
  margin-bottom: 3rem;
`;

export const Statistics = styled.span`
  margin-bottom: 3rem;
  font-size: 1.6rem;
  color: #4d4d4d;
`;

export const CampaignContent = styled.div`
  font-size: 2.2rem;
  color: #333333;
  padding: 2rem 4rem;
`;
