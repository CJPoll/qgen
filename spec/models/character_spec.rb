require 'rails_helper'

RSpec.describe Character, type: :model do
  subject { FactoryGirl.build :character }

  it 'has a valid factory' do
    expect(subject).to be_valid
  end

  it 'requires a first name' do
    subject.first_name = nil
    expect(subject).to_not be_valid
  end

  it 'does not require a last name' do
    subject.last_name = nil
    expect(subject).to be_valid
  end

  it 'does not require a backstory' do
    subject.backstory = nil
    expect(subject).to be_valid
  end

  it 'has a background association' do
    expect(subject).to respond_to :background
  end

  it 'requires a background' do
    subject.background = nil
    expect(subject).to_not be_valid
  end

  it 'requires at least one power' do
    subject.powers = []
    expect(subject).to_not be_valid
  end
end
