class BackgroundsController < ApplicationController
  def index
    @backgrounds = Background.order('name')

    respond_to do |format|
      format.json { render json: @backgrounds }
    end
  end
end
