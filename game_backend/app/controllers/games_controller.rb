class GamesController < ApplicationController
    def show
        game = Game.find(params[:id])
        render json: game
    end

    def create
        game = Game.create(game_params)
        render json: game
    end


    def index
        games = Game.all
        render json: games, methods: [:user]
    end

    def update
        # Locates current game
        # Save params in the database -> Update the User info
        game = Game.find(params[:id])
        game.update(game_params)
    end

    def game_params
        params.permit(
            :time,
            :score, 
            :user_id
            )
    end
end
