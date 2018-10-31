class Api::V1::CategoriesController < ApplicationController

  def index
    render json: Category.all, adapter: :json
  end

  def show
    render json: Category.find(params[:id])
  end

end
