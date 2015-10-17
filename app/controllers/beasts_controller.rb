class BeastsController < ApplicationController
  before_action :get_beast, only: [:show, :edit, :destroy]

  def index
    @beasts = Beast.all

    respond_to do |format|
      format.json { render json: @beasts }
    end
  end

  def create
    beast = Beast.create(beast_params)

    respond_to do |format|
      if beast.persisted?
        format.json { render json: {status: 'ok', id: beast.id} }
      else
        format.json { head 422 }
      end
    end
  end

  def show
    respond_to do |format|
      format.json { render json: @beast }
    end
  end

  def update
  end

  def destroy
  end

  private
  def beast_params
    params.require(:beast).permit(:name, :challenge, :strategy)
  end

  def get_beast
    @beast = Beast.find(params[:id])
  end
end
