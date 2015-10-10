class CampaignsController < ApplicationController
  before_filter :authenticate_user!
  before_filter :get_user, only: [:show, :edit, :destroy]

  def new
  end

  def show
    @editable = @campaign.owner == current_user
  end

  def index
    user = current_user
    user = User.find(params[:user_id]) if params[:user_id]
    @campaigns = user.own_campaigns + user.campaigns

    respond_to do |format|
      format.json {render json: @campaigns}
    end
  end

  def create
    @campaign = Campaign.new(campaign_params)

    players = params[:players]
    players.each { |player_id| @campaign.players << User.find(player_id) } if players

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
    @players = @campaign.players

    redirect_to @campaign unless @campaign.owner == current_user
  end

  def destroy
    @campaign.destroy if @campaign.owner == current_user

    respond_to do |format|
      format.html { redirect_to :campaigns }
      format.json { render json: {status: 'ok'} }
    end
  end

  private
  def campaign_params
    params.require(:campaign).permit(:name)
  end

  def get_user
    @campaign = Campaign.find(params[:id])
  end
end
