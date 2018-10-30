class Category < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true

  has_many :workouts
  has_many :users, through: :workouts
end
