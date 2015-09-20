require 'rails_helper'

RSpec.describe Background, type: :model do
  subject { FactoryGirl.build :background }

  it 'has a valid factory' do
    expect(subject).to be_valid
  end

  it 'requires a name' do
    subject.name = nil
    expect(subject).to_not be_valid
  end

  it 'requires a description' do
    subject.description = nil
    expect(subject).to_not be_valid
  end

  it 'will not allow duplicate names' do
    subject.save
    second = FactoryGirl.build :background, name: subject.name
    expect(second).to_not be_valid
  end
end
