require 'rails_helper'

RSpec.describe Campaign, type: :model do
  subject { FactoryGirl.build :campaign }

  it 'requires an owner' do
    subject.owner = nil
    expect(subject).to_not be_valid
  end

  it 'requires a name' do
    subject.name = nil
    expect(subject).to_not be_valid
  end

  it 'associates with users' do
    expect(subject).to respond_to :players
  end

  it 'associates with characters' do
    expect(subject).to respond_to :characters
  end
end
