class CampaignsController < ApplicationController
  before_filter :authenticate_user!
  before_filter :get_user, only: [:show, :edit, :destroy]

  def new
  end

  def show
  end

  def index
    @campaigns = current_user.own_campaigns + current_user.campaigns 
  end

  def create
    @campaign = Campaign.new(campaign_params)

    current_user.make_campaign(@campaign)

    respond_to do |format|
      if @campaign.save
        format.html { redirect_to @campaign }
        format.json { render json: {id: @campaign.id, status: 'ok'} }
      else
        format.html { render :new }
        format.html { render status: 401 }
      end
    end
  end

  def edit
  end

  def destroy
  end

  private
  def campaign_params
    params.require(:campaign).permit(:name)
  end

  def get_user
    @campaign = Campaign.find(params[:id])
  end
end
