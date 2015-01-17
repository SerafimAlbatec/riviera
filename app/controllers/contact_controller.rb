class ContactController < ApplicationController
  def index
  end

  def send_mail
	  user_info = {:email_user => params[:email], :username => params[:onoma], :people => params[:arithmos], :message => params[:koimeno]} 
      UserMailer.welcome_email(user_info).deliver #this will deliver the mail
      #redirect_to root_path, alert: "Watch it, mister!"
	end
end
