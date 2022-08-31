class TeachersController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        teachers = Teacher.all
        render json: teachers
    end
    def show
        teacher = Teacher.find_by(id: params[:id])
        render json: teacher
    end
    def create
        teacher = Teacher.create!(first_name: params[:first_name], last_name: params[:last_name], school_id: 1)
        render json: teacher
    end
    def update
        teacher = Teacher.find_by(id: params[:id])
        if teacher.update(teacher_params)
            render json: teacher
        else
            render json: {error: teacher.errors.full_messages}, status: 422
        end
    end
    private
    def teacher_params
        params.permit(:first_name)
    end
end
