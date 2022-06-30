class Api::PinBoardsController < ApplicationController

    skip_before_action :verify_authenticity_token

    def index
        if params[:board_id]
            board = Board.find_by(id: params[:board_id])
            @pins = board.pins
            render "api/pins/index"
        else
            render json: ["Something went wrong"], status: 422
        end
    end

    def create
        new_pin_on_board = PinBoard.new(pin_board_params)
        @board = Board.find_by(id: params[:pin_board][:board_id])

        if @board && new_pin_on_board.save
            render "api/boards/show"
        else
            render json: ["Something went wrong"], status: 422
        end
    end

    def destroy
        @board ||= Board.find_by(id: params[:board_id])
        @pin ||= Pin.find_by(id: params[:pin_id])
        if !@board || !@pin
            render json: ["Something went wrong"], status: 422
        end
        if @board.remove_pin(@pin)
            render "api/boards/show"
        else
            render json: ["Something went wrong"], status: 422
        end

    end

    private
    def pin_board_params
        params.require(:pin_board).permit(:board_id, :pin_id)
    end
end
