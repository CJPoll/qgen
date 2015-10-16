require 'rails_helper'

RSpec.describe Beast, type: :model do
  subject { FactoryGirl.build :beast }

  it 'has a valid factory' do
    expect(subject).to be_valid
  end

  it 'requires a name' do
    subject.name = nil
    expect(subject).to_not be_valid
  end

  it 'requires a unique name' do
    subject.save
    second = FactoryGirl.build(:beast, name: subject.name)
    expect(second).to_not be_valid
  end

  describe '#challenge' do
    it 'can not be nil' do
      subject.challenge = nil
      expect(subject).to_not be_valid
    end

    it 'can be easy' do
      subject.challenge = 'easy'
      expect(subject).to be_valid
    end

    it 'can be moderate' do
      subject.challenge = 'moderate'
      expect(subject).to be_valid
    end

    it 'can be challenging' do
      subject.challenge = 'challenging'
      expect(subject).to be_valid
    end

    it 'can be epic' do
      subject.challenge = 'epic'
      expect(subject).to be_valid
    end

    it 'can not be anything else' do
      subject.challenge = 'invalid'
      expect(subject).to_not be_valid
    end
  end

  it 'does not require a strategy' do
    subject.strategy = nil
    expect(subject).to be_valid
  end
end
