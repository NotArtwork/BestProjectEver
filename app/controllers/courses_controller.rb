class CoursesController < ApplicationController

    def index
        course = Course.all 
        render json: course, include: [:teacher, :school]
    end


end
