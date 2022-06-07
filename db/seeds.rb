user = User.where(email: 'test@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')

listings = [
    {
        location_name: 'Starlite',
        location_category: "Cocktails",
        happy_hours: "Daily until 6PM",
        specials: "$2 off all specialty cocktails & select glass of red or white wine ($8)",
        location_image: 'https://images.squarespace-cdn.com/content/v1/58b486539f74562a52de3b52/1491084648801-RXL0ZLPJ31ATPHRCNL1P/STARLITE20170226_1072.jpg?format=1000w',
    },
    {
        location_name: 'Dunedin',
        location_category: 'Restaurant',
        happy_hours: 'Mon-Fri 3PM-6PM',
        specials: '$7 Draft Beer & House Wine, $9 Margarita, Moscow Mule, and Old Fashioned $8 Sliders: Meso Tasty, Hog n Heffers, Lamb or Kiwilango, Calamari, Hummus & Pita, Pretzel Bites w/Jalapeno Cheese, Classic New Zealand Onion Dip w/Fresh House Made Potato Chips',
        location_image: 'https://s3-media0.fl.yelpcdn.com/bphoto/lJTQEKsRZ3O7yXwuOeD0Tg/l.jpg',
    },
    {
        location_name: 'Home & Away',
        location_category: 'Bar and Restaurant',
        happy_hours: 'Mon-Fri from 3PM-6PM ',
        specials: '$6 cocktails (Old Fashioned, Margarita, Mojito), $4 beers and $6 wines',
        location_image: 'https://eventective-media.azureedge.net/2389758_lg.jpg',
    },
    {
        location_name: 'Zinqué',
        location_category: 'Bites & Cocktails',
        happy_hours: 'Mon-Fri 4PM - 6:30PM',
        specials: 'Wines by the glass are $8 except the rosé, which is $9, beers are $5 and aperitifs (Sangria and Spritzes) $8',
        location_image: 'https://images.squarespace-cdn.com/content/v1/5de685d1cb12b120cc11acd4/1575401126299-QF4VAZG5A5K95NTATUTP/zinque-san+diego.jpg?format=2500w',
    },
    {
        location_name: 'Casero Taqueria',
        location_category: 'Bar and restaurant',
        happy_hours: 'Tues all-day',
        specials: 'Draft beers and starters $1 off, signature margaritas, select wines and imported beer $2 off',
        location_image: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/66293708/Casero_Taqueria.0.jpg',
    },
    {
        location_name: 'Alec 101',
        location_category: 'Bar and restaurant',
        happy_hours: 'Daily 4PM-6PM',
        specials: 'Signature margarita $10, Colimita Lager $5, and select wine $9',
        location_image: 'https://cdn.vox-cdn.com/thumbor/EYwKFcdY3mZtj-5DqG-3sZQVdeo=/0x0:750x1000/970x728/filters:focal(262x357:382x477):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/66293711/Alce_101.0.jpg',
    },
    {
        location_name: 'Cloak & Petal',
        location_category: 'Bar & Restaurant',
        happy_hours: 'Mon-Fri 4PM-6PM',
        specials: 'Sushi rolls $10, wine by the glass $7, sake $5 ',
        location_image: 'https://pbs.twimg.com/media/DtMUekCWsAA2hR-?format=jpg&name=4096x4096',
    },
    {
        location_name: 'Queenstown Public House',
        location_category: 'Restaurant',
        happy_hours: 'Mon-Fri 3PM-6PM',
        specials: 'All food $6, drinks $8',
        location_image: 'https://queenstownpublichouse.com/wp-content/uploads/2013/04/QPH-HOUSE-e1466174433919.png',
    },
    {
        location_name: 'Camino Rivera',
        location_category: 'Bar & Restaurant',
        happy_hours: 'Mon-Fri 9PM-11PM',
        specials: '$5 well drinks',
        location_image: 'https://media.sandiegoreader.com/img/photos/2022/03/28/camino_patio.jpg',
    },
    {
        location_name: 'Herringbone',
        location_category: 'Restaurant',
        happy_hours: 'Wed-Sun 4PM-6PM and Thursdays all day',
        specials: 'Half-off Bottles of Wine (dinner only), $1 oysters',
        location_image: 'https://p2d7x8x2.stackpathcdn.com/content/uploads/2014/09/herringbone057-fef30431.jpgw945.jpeg',
    },
    
  ]
  

  listings.each do |each_listing|
    # user.listings.create each_listing
    Listing.where(location_name: each_listing[:location_name]).first_or_create(
       location_category: each_listing[:location_category],
        happy_hours: each_listing[:happy_hours], 
        specials: each_listing[:specials], 
        location_image: each_listing[:location_image], 
        user: user
    )
    puts "creating listing #{each_listing}"
  end