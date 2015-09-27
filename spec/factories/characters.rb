FactoryGirl.define do
  factory :character do
    first_name 'MyString'
    last_name 'MyString'
    backstory 'MyText'
    background
    powers {[FactoryGirl.create(:power)]}
  end
end
