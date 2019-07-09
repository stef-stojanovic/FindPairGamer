class GamesController < ApplicationController
    def show
        game = Game.find(params[:id])
        render json: game
    end

    def update
        # Find the player
        # Save params in the database -> Update the player we find
        game = Game.find(params[:id])
        game.update(game_params)
    end

    def game_params
        params.permit( :time, :score, :user_id )
    end
end
