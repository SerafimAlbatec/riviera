class EventsController < ApplicationController

	def index
		@event = Event.all
	end

	def event
		@event = Event.where(:id => params[:diaskedasi]).first
	end
end
