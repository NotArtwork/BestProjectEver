class Course < ApplicationRecord
    has_many :seats
    belongs_to :teacher
    has_many :students, through: :seats
end
