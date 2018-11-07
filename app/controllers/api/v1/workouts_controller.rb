class Api::V1::WorkoutsController < ApplicationController

  def index
    render json: Workout.all, adapter: :json
    # render json: Workout.find(params[:id])
    # @category = Category.find(params[:category_id])
    # render json: @category.workouts, adapter: :json
  end

  def show
    # binding.pry
    @workout = Workout.find(params[:id])
    # render json: Workout.find(params[:id])
    # render json: Workout.find(params[:id])
  end

  private

  def workout_params
    params.require(:workout).permit(:title, :description)
  end

end
