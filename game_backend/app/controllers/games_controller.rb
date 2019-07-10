class GamesController < ApplicationController
    def show
        game = Game.find(params[:id])
        render json: game
    end

    def index
        game = Game.all
        render json: game
    end

    def update
        # Locates current game
        # Save params in the database -> Update the User info
        game = Game.find(params[:id])
        game.update(game_params)
    end

    def game_params
        params.permit( :time, :score, :user_id )
    end
end
