class GalleryController < ApplicationController
  def index
  	@gallery = Gallery.all
  end

  def gallery
  	@album = Album.where(:gallery_id => params[:album])
  	@gallery = Gallery.where(:id => params[:album]).first
  end
end
