class CoursesController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        courses = Course.all 
        render json: courses
    end
    def show
        course = Course.find_by(id: params[:id])
        render json: course
    end
    def show_students
        course = Course.find_by(id: params[:id])
        students = course.students
        render json: students
    end
    def create
        course = Course.create!(name: params[:name], capacity: params[:capacity], teacher_id: params[:teacher_id], school_id: params[:school_id])
        render json: course
    end
    def update
        course = Course.find_by(id: params[:id])
        if course.update(course_params)
            render json: course
        else
            render json: {error: course.errors.full_messages}, status: 422
        end
    end
    private
    def course_params
        params.permit(:name)
    end
end
