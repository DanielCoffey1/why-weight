class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.string :title, null: false
      t.text :description, null: false

      t.timestamps null: false

      t.belongs_to :user
      t.belongs_to :category
    end
  end
end
