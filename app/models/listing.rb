class Listing < ApplicationRecord
  belongs_to :user

  validates :location_name, presence: true
end
