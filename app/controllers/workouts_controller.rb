class WorkoutsController < ApplicationController

  def index
    @category = Category.find(params[:category_id])
    render json: @category.workouts, adapter: :json
  end

end
