class StoryController < ApplicationController

	def index
		@story = Story.all
	end
end
