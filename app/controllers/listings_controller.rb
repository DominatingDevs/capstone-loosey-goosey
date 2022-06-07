class ListingsController < ApplicationController
    def index
      listings_for_me = params["me"]

      if listings_for_me == "true"
       listings = current_user&.listings || []
      else 
        listings = Listing.all
      end

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

    def update
      listing = current_user.listings.find(params[:id])

      if listing.update(listing_params)
        render json: listing
      else
        render json: listing.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      listing = current_user.listings.find(params[:id])
      listing.destroy
      render json: listing
    end

    private
    def listing_params
        params.require(:listing).permit(:location_name, :location_category, :happy_hours, :specials, :location_image)
    end
end

