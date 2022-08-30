class SchoolsController < ApplicationController

    def index
        school = School.all
        render json: school.to_json(method: [:course])
    end
end
