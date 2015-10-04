class UsersController < ApplicationController
  def search
    results = User.search_for(params[:query]).sort {|a,b| a.id <=> b.id}

    respond_to do |format|
      format.json {render json: results}
    end
  end
end
