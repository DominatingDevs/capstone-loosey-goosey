class ListingsController < ApplicationController
    def index
        listings = Listing.all
        render json: listings
    end

    def create
        listing = current_user.listings.new(listing_params) 

        if listing.save
          render json: listing
        else
          render json: listing.errors, status: :unprocessable_entity
        end
    end

    private
    def listing_params
        params.require(:listing).permit(:location_name, :location_category, :happy_hours, :specials, :location_image)
    end
end

