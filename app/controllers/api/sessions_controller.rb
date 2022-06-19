class Api::SessionsController < ApplicationController

    skip_before_action :verify_authenticity_token #delete in production

    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )
        if @user
            login(@user)
            render "api/users/show"
        else
            render json: ["Invalid username/password combination"], status: 401
        end
    end
    

    def destroy
        if current_user
            logout!
            render json: ["Successful Logout"]
        else
            render json: ["No user is currently logged in"], status: 404
        end
    end
end
