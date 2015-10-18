defmodule Qgen.CampaignView do
  use Qgen.Web, :view

  def render("index.json", %{campaigns: campaigns}) do
    %{data: render_many(campaigns, Qgen.CampaignView, "campaign.json")}
  end

  def render("show.json", %{campaign: campaign}) do
    %{data: render_one(campaign, Qgen.CampaignView, "campaign.json")}
  end

  def render("campaign.json", %{campaign: campaign}) do
    %{id: campaign.id,
      name: campaign.name}
  end
end
