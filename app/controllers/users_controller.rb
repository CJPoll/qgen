class UsersController < ApplicationController
  def search
    if params[:query] == ''
      results = []
    else
      results = User.search_for(params[:query]).sort {|a,b| a.id <=> b.id}
    end

    respond_to do |format|
      format.json {render json: results}
    end
  end
end
