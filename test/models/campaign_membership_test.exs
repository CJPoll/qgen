defmodule Qgen.CampaignMembershipTest do
  use Qgen.ModelCase

  alias Qgen.CampaignMembership

  @valid_attrs %{}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = CampaignMembership.changeset(%CampaignMembership{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = CampaignMembership.changeset(%CampaignMembership{}, @invalid_attrs)
    refute changeset.valid?
  end
end
