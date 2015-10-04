require 'rails_helper'

RSpec.describe User, type: :model do
  subject { FactoryGirl.build :user }

  it 'has many characters' do
    expect(subject).to respond_to :characters
  end

  it 'requires a first name' do
    subject.first_name = nil
    expect(subject).to_not be_valid
  end

  it 'requires a last name' do
    subject.last_name = nil
    expect(subject).to_not be_valid
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

  describe 'search' do
    let!(:first_user) { FactoryGirl.create :user, first_name: 'Cody', last_name: 'Poll' }
    let!(:second_user) { FactoryGirl.create :user, first_name: 'Andrew', last_name: 'Ferguson' }
    let!(:third_user) { FactoryGirl.create :user, first_name: 'Nathan', last_name: 'Waters' }

    describe 'first name' do
      it 'returns only relevant results' do
        results = User.search_for 'ody'
        expect(results.length).to eq 1
        expect(results).to eq([first_user])
      end

      it 'searches without regard to case' do
        results = User.search_for 'cody'
        expect(results.length).to eq 1
        expect(results).to eq([first_user])
      end
    end

    it 'can find a user by last name'
    it 'can find a user by a mixture of names'
  end
end
