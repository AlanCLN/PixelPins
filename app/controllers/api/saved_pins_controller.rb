class Api::SavedPinsController < ApplicationController

    skip_before_action :verify_authenticity_token
    before_action :require_logged_in, only: [:index, :create, :destroy]

    def index
        if params[:user_id]
            user = User.find_by(id: params[:user_id])
            @pins = user.saved_pins
            render "api/pins/index"
        else
            render json: ["Something went wrong"], status: 422
        end
    end


    def create
        @pin = Pin.find_by(id: params[:pin_id])
        @user = current_user
        if @pin && @user.save_pin(@pin)
            render "api/users/show"
        else
            render json: ["Something went wrong"], status: 422
        end
    end

    def destroy
        @pin = Pin.find_by(id: params[:id])
        @user = current_user
        @spr = @user.savedpin_relationships.find_by(pin_id: @pin.id)

        if @pin && @spr
            @spr.destroy
            render "api/users/show"
        else
            render json: ["Something went wrong"], status: 422
        end
    end
end
