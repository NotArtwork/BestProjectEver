class TeachersController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        teachers = Teacher.all
        render json: teachers
    end
    def create
        teacher = Teacher.create!(first_name: params[:first_name], last_name: params[:last_name])
        render json: teacher
    end

end
