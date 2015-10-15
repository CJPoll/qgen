class CharactersController < ApplicationController
  before_filter :authenticate_user!
  before_filter :get_character, only: [:show, :destroy]

  def index
    user = current_user
    user = User.find(params[:user_id]) if params[:user_id]
    @characters = user.characters

    respond_to do |format|
      format.json { render json: @characters }
    end
  end

  def create
    char_params = character_params
    character = Character.new(character_params)
    params[:character][:powers].each do |p|
      character.powers << Power.find(p[:id])
    end

    campaign_id = params[:character][:campaignId] if params[:character] && params[:character][:campaignId]
    character.campaign = Campaign.find(campaign_id) if campaign_id && campaign_id != 0

    character.background = Background.find(params[:character][:background][:id])

    current_user.characters << character
    respond_to do |format|
      if character.save!
        format.json { render status: 200, json: {status: 'ok', id: character.id} }
      else
        format.json { render status: 401 }
      end
    end
  end

  def new
    render layout: 'character_creator'
  end

  def show
    @deleteable = @character.user == current_user
    @campaigns = current_user.campaigns

    respond_to do |format|
      format.json { render json: @character, include: [:background, :campaign, :powers, :user] }
    end
  end

  def destroy
    if @character.user == current_user
      @character.destroy

      respond_to do |format|
        format.json { render json: { status: 'ok' } }
      end
    else
      head :unauthorized
    end
  end

  def update
    campaign_id = params[:character][:campaign_id]
    campaign = current_user.campaigns.where(id: campaign_id).first
    character = current_user.characters.where(id: params[:id]).first

    character.campaign = campaign
    character.save!

    respond_to do |format|
      format.json { render json: {status: 'ok', currentCampaign: campaign} }
    end
  end

  private
  def character_params
    params.require(:character).permit(:backstory, :first_name, :last_name)
  end

  def get_character
    @character = Character.find(params[:id])
  end
end
