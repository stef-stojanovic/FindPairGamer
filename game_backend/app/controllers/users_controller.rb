class UsersController < ApplicationController
    
    def index
        users = User.all
        render json: users
    end

    def create
        user = User.create(params)
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def update
        # Find the player
        # Save params in the database -> Update the player we find
        user = User.find(params[:id])
        user.update(user_params)
    end

    def new
    end

    def user_params
        params.permit( :name )
    end
end
