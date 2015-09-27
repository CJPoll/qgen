class PowersController < ApplicationController
  def index
    @powers = Power.order('name')

    respond_to do |format|
      format.json {render json: @powers}
    end
  end
end
