class CoursesController < ApplicationController

    def index
        course = Course.all 
        render json: course
    end
end
