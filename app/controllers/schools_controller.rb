class SchoolsController < ApplicationController

    def index
        school = School.all
        render json: school.to_json(methods: [:course])
    end

    def show
        school = School.all
        render json: school
    end
    
end
