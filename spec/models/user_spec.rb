require 'rails_helper'

RSpec.describe User, type: :model do
  subject { FactoryGirl.build :user }

  it 'has many characters' do
    expect(subject).to respond_to :characters
  end
end
