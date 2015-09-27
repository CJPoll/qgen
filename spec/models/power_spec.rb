require 'rails_helper'

RSpec.describe Power, type: :model do
  subject { FactoryGirl.build :power }

  it 'has a valid factory' do
    expect(subject).to be_valid
  end

  it 'requires a name' do
    subject.name = nil
    expect(subject).to_not be_valid
  end

  it 'does not require a description' do
    subject.description = nil
    expect(subject).to be_valid
  end

  it 'has a many to many relationship with characters' do
    expect(subject).to respond_to(:characters)
  end
end
