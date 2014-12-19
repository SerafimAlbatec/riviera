class RivieraController < ApplicationController
	def home
	end
	def about
	end
	def blog
	end
	def eventpage
		@event = Eventpage.where(:id => params[:event]).first
	end
	def event1
	end
	def menu
	end
	def gallery
	end
	def video
	end
	def contact
	end
	def send_mail
	  user_info = {:email_user => params[:email], :username => params[:onoma], :number => params[:noumero], :date => params[:mera], :people => params[:arithmos], :message => params[:koimeno]} 
      UserMailer.welcome_email(user_info).deliver #this will deliver the mail
      #redirect_to root_path, alert: "Watch it, mister!"
	end


end
