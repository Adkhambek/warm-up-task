import { API_URL } from "../utils/constants";

export async function getCampaigns() {
  const res = await fetch(`${API_URL}/campaigns`);

  if (!res.ok) throw new Error("Failed getting campaigns");

  const { campaigns } = await res.json();
  return campaigns;
}

export async function getCampaignBySlug(slug) {
  const res = await fetch(`${API_URL}/campaigns/${slug}`);

  if (!res.ok) throw new Error("Couldn't find campaign");

  const { campaign } = await res.json();
  return campaign;
}
