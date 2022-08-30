class SchoolsController < ApplicationController

    def index
        school = School.all
        render json: school
    end
end
