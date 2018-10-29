class User < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true

  has_many :workouts
  has_many :workout_categories, through: :workouts
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
