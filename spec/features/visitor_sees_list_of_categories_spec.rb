require 'rails_helper'

feature "visitor sees a list of categories" do
  scenario "sees a list of categories" do
    testuser = User.create!(first_name: 'Name', last_name: 'last', email: 'happyboi@gmail', password: '12345678')
    category_1 = Category.create!(title: "BodyBuilding", description: "Weight lifting, cardio, and diet")
    category_2 = Category.create!(title: "Crossfit", description: "Olympic lifting")

    visit categories_path

    expect(page).to have_content "BodyBuilding"
    expect(page).to have_content "Crossfit"

  end
end
