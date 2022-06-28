class Api::PinsController < ApplicationController

    skip_before_action :verify_authenticity_token
    before_action :require_logged_in, only: [:show, :create, :update, :destroy]

    def index
        @pins = Pin.with_attached_image.all

        if params[:user_id]
            @pins = Pin.where('uploader_id = ?', params[:user_id]).with_attached_image
        end
    end

    def show
        @pin = Pin.with_attached_image.find_by(id: params[:id])
    end

    def create
        @pin = Pin.new(pin_params)
        if current_user
            @pin.uploader_id = current_user.id
        else
            return render json: ["You naughty naughty"], status: 401
        end
        if @pin.save
            render :show
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end

    def update
        @pin = Pin.with_attached_image.find_by(id: params[:id])
        if @pin.uploader_id != current_user.id
            return render json: ["Stop it"], status: 401
        end
        if @pin.update(pin_params)
            render :show
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end

    def destroy
        @pin = Pin.find_by(id: params[:id])
        if @pin.uploader_id != current_user.id
            return render json: ["Stop it"], status: 401
        end
        if @pin && @pin.destroy
            render json: ["Successfully Deleted"], status: 200
        else
            render json: ["Pin does not exist"], status: 404
        end
    end

    private
    def pin_params
        params.require(:pin).permit(:title, :description, :image, :uploader_id)
    end
    
end
