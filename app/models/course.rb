class Course < ApplicationRecord
    has_many :seats
    belongs_to :teacher
    belongs_to :school
    has_many :students, through: :seats
end
