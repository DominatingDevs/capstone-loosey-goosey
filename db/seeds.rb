user = User.where(email: 'test@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')

listings = [
    {
        location_name: 'Starlite',
        location_category: "Cocktails",
        happy_hours: "Daily until 6PM",
        specials: "$2 off all specialty cocktails & select glass of red or white wine ($8)",
        location_image: 'https://s3-media0.fl.yelpcdn.com/bphoto/lJTQEKsRZ3O7yXwuOeD0Tg/l.jpg',
    },
    {
        location_name: 'Dunedin',
        location_category: 'Restaurant',
        happy_hours: 'Mon-Fri 3PM-6PM',
        specials: '$7 Draft Beer & House Wine $9 Margarita, Moscow Mule, Old Fashioned $8 Sliders: Meso Tasty, Hog n Heffers, Lamb or Kiwilango, Calamari, Hummus & Pita, Pretzel Bites w/Jalapeno Cheese, Classic New Zealand Onion Dip w/Fresh House Made Potato Chips',
        location_image: 'https://s3-media0.fl.yelpcdn.com/bphoto/lJTQEKsRZ3O7yXwuOeD0Tg/l.jpg',
    },
    {
        location_name: 'Taste & Thirst',
        location_category: 'Bar and Restaurant',
        happy_hours: 'Daily 3PM - 8PM ',
        specials: '1/2 Off All Drinks1/2 Off All Beers, $1 Off All Burgers, $2 Off Boneless Wings, $3 Off Quesadillas, $4 Chicharrones, $5 Lemon Pepper Fries, $6 Truffle Tots',
        location_image: 'https://s3-media0.fl.yelpcdn.com/bphoto/lJTQEKsRZ3O7yXwuOeD0Tg/l.jpg',
    },
    {
        location_name: 'Zinqué',
        location_category: 'Bites & Cocktails',
        happy_hours: 'Mon-Fri 4PM - 6:30PM',
        specials: 'All dishes and drinks ring in under $10, Wines by the glass are all $8 except the rosé, which is $9, beers are $5 and aperitifs (Sangria and Spritzes) $8',
        location_image: 'https://s3-media0.fl.yelpcdn.com/bphoto/lJTQEKsRZ3O7yXwuOeD0Tg/l.jpg',
    },
  ]

  listings.each do |each_listing|
    user.listings.create each_listing
    puts "creating listing #{each_listing}"
  end
