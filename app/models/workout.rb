class Workout < ApplicationRecord
  validates :title, presence: true
  validates :description, presence: true

  belongs_to :user
  belongs_to :category
end
