class Api::BoardsController < ApplicationController

    skip_before_action :verify_authenticity_token

    def index
        @boards = Board.where('user_id = ?', params[:user_id])
    end

    def show
        @board = Board.find_by(id: params[:id])
        render :show
    end

    def create
        @board = Board.new(board_params)
        if current_user
            @board.user_id = current_user.id
        else
            return render json: ["Stop it"], status: 401
        end

        if @board.save
            render :show
        else
            render json: ["Name can't be blank"], status: 422
        end
    end

    def update
        @board = Board.find_by(id: params[:id])
        if @board.update(board_params)
            render :show
        else
            render json: @board.errors.full_messages, status: 401
        end
    end

    def destroy
        @board = Board.find_by(id: params[:id])
        if @board && @board.destroy
            render json: ["Successfully Deleted"], status: 200
        else
            render json: ["Board does not exist"], status: 404
        end
    end

    private
    def board_params
        params.require(:board).permit(:name, :user_id)
    end
    
end
