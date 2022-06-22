class Api::PinsController < ApplicationController

    skip_before_action :verify_authenticity_token

    def index
        @pins = Pin.all
    end

    def show
        @pin = Pin.find_by(id: params[:id])
    end

    def create
        @pin = Pin.new(pin_params)
        byebug
        if current_user
            @pin.uploader_id = current_user.id
        else
            return render json: ["You naughty naughty"], status: 401
        end
        byebug
        if @pin.save
            render :show
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end

    def update
        @pin = Pin.find_by(id: params[:id])
        if @pin.update(pin_params)
            render :show
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end

    def destroy
        @pin = Pin.find_by(id: params[:id])
        if @pin && @pin.destroy
            render json: ["Successfully Deleted"], status: 200
        else
            render json: ["Pin does not exist"], status: 404
        end
    end


    private
    def pin_params
        params.require(:pin).permit(:title, :description, :image)
    end
    
end
