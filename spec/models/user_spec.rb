require 'rails_helper'

RSpec.describe User, type: :model do
  subject { FactoryGirl.build :user }

  it 'has many characters' do
    expect(subject).to respond_to :characters
  end

  it 'can own a campaign' do
    expect(subject).to respond_to :own_campaigns
  end

  it 'can play in a campaign' do
    expect(subject).to respond_to :campaigns
  end

  describe 'own campaigns' do
    let!(:own_campaign) { FactoryGirl.create :campaign, owner: subject }
    let!(:second_own_campaign) { FactoryGirl.create :campaign, owner: subject }
    let!(:played_campaign) { FactoryGirl.create :campaign, owner: FactoryGirl.create(:user) }

    before :each do
      subject.join_campaign(played_campaign)
    end

    it 'has two own_campaigns' do
      expect(subject.own_campaigns.count).to eq 2
    end

    it 'has one played campaign' do
      expect(subject.campaigns.count).to eq 1
    end
  end
end
