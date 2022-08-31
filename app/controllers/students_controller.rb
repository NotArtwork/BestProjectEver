class StudentsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        students = Student.all
        render json: students
    end
    def create
        student = Student.create!(first_name: params[:first_name], last_name: params[:last_name])
        render json: student
    end
end
