class Teacher < ApplicationRecord
    has_many :courses   
    has_many :schools, through: :courses
end
