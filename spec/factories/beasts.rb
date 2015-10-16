FactoryGirl.define do
  factory :beast do
    name { Faker::Team.creature }
    challenge { ['easy', 'moderate', 'challenging', 'epic'].sample }
    strategy { Faker::Lorem.paragraph }
  end
end
