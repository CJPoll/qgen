class UsersController < ApplicationController
  def logout
    sign_out current_user

    respond_to do |format|
      format.json { render json: {status: 'ok'} }
    end
  end

  def self_user
    respond_to do |format|
      format.json { render json: current_user }
    end
  end

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
