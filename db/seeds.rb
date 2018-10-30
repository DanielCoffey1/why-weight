# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

categories_seeds = [
  {title: "BodyBuilding", description: "Weight lifting, cardio, and diet"},
  {title: "Crossfit", description: "Olympic lifting"},
  {title: "Powerlifting", description: "Workouts to improve your squat, bench, and deadlift"}
]

categories_seeds.each do |seed|
  Category.create(seed)
end

users_seeds = [
  {first_name: "Bill", last_name: "Thrill", email: "thrillydillybilly@gmail.com", password: 123456 },
  {first_name: "Donnie", last_name: "Waite", email: "gigspotter46@gmail.com", password: 123456 },
  {first_name: "Rad", last_name: "Chad", email: "chadizrad@gmail.com", password: 123456 }
]

users_seeds.each do |seed|
  User.create(seed)
end


workouts_seeds = [
  {title: "Intro Workout", description: "Bench Press 3 sets of 5 reps", user_id: 1, category_id: 1},
  {title: "Fun Workout", description: "Squat till you drop", user_id: 2, category_id: 3},
  {title: "Bad Workout", description: "Bench Press 33 sets of 55 reps", user_id: 2, category_id: 2}
]

workouts_seeds.each do |seed|
  Workout.create(seed)
end
