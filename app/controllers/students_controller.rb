class StudentsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        students = Student.all
        render json: students
    end
    def show
        student = Student.find_by(id: params[:id])
        render json: student
    end
    def create
        student = Student.create!(first_name: params[:first_name], last_name: params[:last_name])
        render json: student
    end
    def update
        student = Student.find_by(id: params[:id])
        if student.update(student_params)
            render json: student
        else
            render json: {error: seat.errors.full_messages}, status: 422
        end
    end
    private
    def student_params
        params.permit(:first_name)
    end
end
