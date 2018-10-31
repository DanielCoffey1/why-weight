class CategoriesController < ApplicationController
  def index
    @categories = Category.all
  end

def show
  @category = Category.find(params[:id])
  # @category = "#{@category.title}\n #{@category.description}"
end

private

def category_params
  params.require(:user).permit(:title, :description)
end

end
