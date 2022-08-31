class SeatsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        seats = Seat.all
        render json: seats
    end
    def create
        seat = Seat.create!(course_id: params[:course_id], student_id: params[:student_id])
        render json: seat
    end
end
