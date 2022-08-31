class Seat < ApplicationRecord
    belongs_to :course
    belongs_to :student, optional: true
end
