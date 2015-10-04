class StaticController < ApplicationController
  before_filter :authenticate_user!

  def landing
    @campaigns = current_user.all_campaigns
  end
end
