class CoursesController < ApplicationController

    def index
        courses = Course.all 
        render json: courses
    end
    def create
        course = Course.create!(name: params[:name], capacity: params[:capacity], teacher_id: params[:teacher_id], school_id: params[:school_id])
        render json: course
    end
end
