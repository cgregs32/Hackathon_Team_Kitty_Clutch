class Api::BioController < ApplicationController
  def index
    @bios = current_user.bios
    render json: @bios
  end

  def create
    @bio = current_user.bios.create(post_params)
    if @bio.save
      render json: @bio
    else
      render json: { errors: @bio.error.full_messages.join(',') }, status: 422
    end
  end
end
