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
        @board ||= current_user_boards.find_by(
            id: params[:board_id]
        )
        pin_id = params[:pin_id]

        if @board && @board.add_pin(pin_id)
            render "api/boards/show"
        else
            render json: ["Something went wrong"], status: 422
        end
    end

    def destroy
        # @pbr = PinBoard.find_by(
        #     board_id: params[:board_id],
        #     pin_id: params[:pin_id]
        # )
        @board ||= current_user_boards.find_by(
            id: params[:board_id]
        )
        pin_id = params[:pin_id]

        if @board && @board.remove_pin(pin_id)
            render "api/boards/show"
        else
            render json: ["Something went wrong"], status: 422
        end

    end

    # private
    # def pin_board_params
    #     params.require(:pin_board).permit(:board_id, :pin_id)
    # end

    def current_user_boards
        current_user.boards
    end
end
