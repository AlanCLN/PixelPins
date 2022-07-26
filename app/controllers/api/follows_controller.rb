class Api::FollowsController < ApplicationController

    skip_before_action :verify_authenticity_token
    before_action :require_logged_in, only: [:create, :destroy]

    def index
        if params[:followee_id]  #given a user that is a followee, fetch the user's followers
            user = User.find_by(id: params[:followee_id])
            @users = user.followers
            render "api/users/follows"
        elsif params[:follower_id] #given a user that is a follower, fetch the user's followings
            user = User.find_by(id: params[:follower_id])
            @users = user.followings
            render "api/users/follows"
        else
            render json: ["Something went wrong"], status: 422
        end
    end

    def create
        @current_user = current_user
        @followee = User.find_by(id: params[:followee_id])
        ids = [@current_user.id, @followee.id]

        @users = User.find(ids)

        if @followee && @current_user.follow(@followee)
            render "api/users/follows"
        else
            render json: ["Something went wrong"], status: 422
        end
    end

    def destroy
        @current_user ||= current_user
        @followee ||= User.find_by(id: params[:followee_id])
        ids = [@current_user.id, @followee.id]

        @users = User.find(ids)

        if @followee && @current_user.unfollow(@followee)
            render "api/users/follows"
        else
            render json: ["Something went wrong"], status: 422
        end
    end
end
