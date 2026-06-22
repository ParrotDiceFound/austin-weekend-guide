// Parks and Rec Character Templates
// Each character has intros, tag-keyed quips, default quips, empty state, and filter reactions

const CHARACTERS = {
  ron: {
    id: "ron",
    name: "Ron Swanson",
    color: "#8B4513",
    emoji: "🥩",

    intros: [
      "I found some activities. You're welcome. Now leave me alone.",
      "Here's what I'd do this weekend. All of it involves being outside and away from the government.",
      "I've prepared a list. It's short, because most activities are unnecessary.",
      "The best things in life are simple: meat, wood, and fresh air. Here's where to find them in Austin.",
      "I was asked to help you plan your weekend. I will do so efficiently and without small talk."
    ],

    quips: {
      outdoors: [
        "Nature: the only government program I support.",
        "This is acceptable. It's outside, which is where people should be.",
        "Being outdoors is the only therapy a person needs.",
        "Any day spent outside is a day not wasted sitting in a government building."
      ],
      water: [
        "Swimming is the second-best activity a person can do. The first is canoeing alone at dawn.",
        "Cold water builds character. Barton Springs builds excellent character.",
        "A body of water, some silence, and no one asking you about your feelings. Perfect.",
        "If God didn't want us swimming in rivers, He wouldn't have made rivers."
      ],
      indoors: [
        "I generally oppose being indoors. But Texas heat is a worthy adversary.",
        "If you must be inside, at least do something productive. Build a chair.",
        "Indoor activities are for blizzards and funerals. But I respect the Austin summer."
      ],
      food: [
        "I'll only recommend this if they serve meat. Real meat. Not that turkey bacon nonsense.",
        "A proper restaurant serves breakfast all day and doesn't apologize for bacon grease.",
        "If the menu says 'plant-based,' keep walking. That's not food, it's a cry for help."
      ],
      kidFriendly: [
        "Children should play outside until they're exhausted. That's called good parenting.",
        "Kids don't need screens. They need dirt, sunlight, and a healthy fear of wildlife.",
        "Take your child somewhere they can run. Preferably far enough away that you can sit in peace."
      ],
      liveMusic: [
        "Music is fine as long as it's played by someone who looks like they've worked with their hands.",
        "I don't dance. But I'll sit in a chair, drink a whiskey, and nod approvingly.",
        "Live music should be loud enough to prevent conversation. That's its best feature."
      ],
      comedy: [
        "Comedy is people saying obvious things about the government that everyone already knows.",
        "I prefer unintentional comedy. Like watching a vegan try to order at a steakhouse."
      ],
      hiking: [
        "Walking in the woods is the purest form of human activity. No Wi-Fi, no meetings, no nonsense.",
        "A good hike should leave you tired, dirty, and at least three miles from the nearest person.",
        "Trails don't judge you. That's why they're better than most people."
      ],
      playground: [
        "Playgrounds teach children important lessons. Like gravity.",
        "A child on a playground is a child not inside bothering adults. Everyone wins."
      ],
      default: [
        "Acceptable.",
        "This will do.",
        "I approve. Reluctantly.",
        "Fine. Go do this."
      ]
    },

    emptyState: "Nothing matches your requirements. Perhaps your requirements are the problem. Lower your standards and go outside.",

    filterReactions: {
      water: "Water activities. Smart. Barton Springs is the crown jewel of Austin. I'll deny saying that.",
      indoors: "Indoors? I suppose if you must. Texas heat has humbled better men than you.",
      kidFriendly: "Teaching children to enjoy the outdoors is a noble pursuit. Better than teaching them TikTok.",
      food: "Eating is one of life's three essential activities. The other two are none of your business.",
      hiking: "Now you're talking. The trail doesn't care about your emails."
    }
  },

  leslie: {
    id: "leslie",
    name: "Leslie Knope",
    color: "#1E90FF",
    emoji: "🧇",

    intros: [
      "OH MY GOD, I've been waiting for someone to ask me this! I have a BINDER of Austin activities!",
      "Welcome to Leslie Knope's Weekend Activity Spectacular! I've organized everything into color-coded categories!",
      "This is literally the greatest city in Texas and I have SO MANY recommendations for you!",
      "I stayed up until 3 AM making this list because I care about your weekend that much. You're welcome!",
      "Fun fact: I have ranked every park in Austin on a scale of 1 to 'Barton Springs at sunset.' Let's DO this!"
    ],

    quips: {
      outdoors: [
        "Parks! PARKS! This is what I live for! This park is a gift to the people!",
        "The great outdoors of Austin are like a waffle — beautiful, layered, and perfect in every way.",
        "I want to be buried in an Austin park someday. Not anytime soon! But eventually!",
        "Every park is special. But some parks are MORE special. Like this one!"
      ],
      water: [
        "Swimming in Austin is a civic duty and a JOY. I should make it a city ordinance.",
        "Water activities bring people together! And togetherness is literally the point of community!",
        "Barton Springs is proof that nature loves Austin as much as I do."
      ],
      indoors: [
        "Indoor activities are great for planning your NEXT outdoor activity! But also fun on their own!",
        "Sometimes you need to recharge inside before you go back out and be AMAZING.",
        "This is perfect for a rainy day! And also a sunny day! It's perfect for ALL days!"
      ],
      food: [
        "Does this place have waffles? Because if it has waffles, it gets five stars from Leslie Knope.",
        "I have a ranked spreadsheet of every restaurant in Austin. This one is in the top tier!",
        "Food brings people together, and bringing people together is MY ENTIRE REASON FOR EXISTING."
      ],
      kidFriendly: [
        "Kid activities! I have a 47-page guide to kid-friendly Austin. Let me just find page one...",
        "Children are the future voters and park-goers of Austin and they deserve THE BEST!",
        "This is PERFECT for tiny humans! They're going to have the best day of their tiny lives!"
      ],
      liveMusic: [
        "Austin is the Live Music Capital of the World and I will fight anyone who says otherwise!",
        "Live music is the heartbeat of this city! Literally! I checked with the city planner!",
        "Every concert is a chance to feel alive and also to network with your community!"
      ],
      comedy: [
        "Laughter is the best medicine! After actual medicine! And waffles!",
        "Comedy shows are like council meetings but everyone's having fun! So, the opposite!"
      ],
      hiking: [
        "Hiking is walking but with PURPOSE and VIEWS! Two of my favorite things!",
        "I have hiked every trail in the Austin metro area and rated them all in my binder!",
        "Nature hikes are the perfect time to appreciate what makes Austin AUSTIN!"
      ],
      playground: [
        "Playgrounds are tiny parks and I love ALL parks regardless of size!",
        "Every playground in Austin has been personally inspected by... well, not me officially, but spiritually!"
      ],
      default: [
        "I am SO excited about this one! You're going to LOVE it!",
        "This gets an A+ in my binder! Which, to be fair, most things do!",
        "Ann Perkins would LOVE this! Actually, everyone would love this!",
        "This is literally one of my favorite things in Austin. Top 200 at LEAST!"
      ]
    },

    emptyState: "No results?! This is a CRISIS. This has never happened in the history of my binders! Try different filters and I PROMISE we'll find something amazing!",

    filterReactions: {
      kidFriendly: "Kid activities! YES! I have SO many ideas! Children deserve the BEST weekends!",
      water: "Water fun! Did you know Austin has more natural swimming holes per capita than... okay I made that up but it FEELS true!",
      food: "Restaurant time! I maintain a color-coded spreadsheet. The waffle column is the longest.",
      liveMusic: "LIVE MUSIC! Austin is the Live Music Capital of the WORLD and this is NOT up for debate!"
    }
  },

  andy: {
    id: "andy",
    name: "Andy Dwyer",
    color: "#FF8C00",
    emoji: "🎸",

    intros: [
      "Duuuude, I know SO many cool things to do! Well, like five. But they're REALLY cool!",
      "Okay so I don't technically 'plan' things but I DO know where the fun is! Let's go!",
      "WEEKEND! That's my favorite word! After 'pizza' and 'guitar' and 'April'!",
      "I'm basically an expert at having fun. It's like the one thing I'm really good at. That and falling.",
      "Burt Macklin, FBI, reporting for weekend duty! These are my top recommendations, classified level: AWESOME."
    ],

    quips: {
      outdoors: [
        "Dude, outside is where ALL the best stuff happens! Like frisbee! And finding things!",
        "I once spent an entire weekend in a park and it was the best weekend of my life. I think I lived there.",
        "Outside is awesome because you can yell and nobody cares! YEAH!"
      ],
      water: [
        "SWIMMING! I love swimming! I'm not great at it but I love it!",
        "Water stuff is the best because you can cannonball and everyone cheers! Or screams! Same thing!",
        "I once jumped into Barton Springs without checking how cold it was. It was very cold. I'd do it again."
      ],
      indoors: [
        "Indoor stuff is cool too because that's usually where the video games are!",
        "Being inside is great when it's hot. And in Austin it's hot like... always?",
        "Air conditioning is maybe the greatest invention ever. After guitars."
      ],
      food: [
        "FOOD! Food is my love language! Well, one of them! I have like twelve love languages!",
        "I would eat here every day if I could. Actually, I might have already tried that.",
        "This place is amazing. I've never had a meal I didn't like. Wait, that's not about this place, that's just about me."
      ],
      kidFriendly: [
        "Kids are just tiny people who are better at having fun than adults! We should learn from them!",
        "I'm basically a big kid so I'm an expert on kid-friendly activities!",
        "This is perfect for kids! And also for me! Because I am basically a kid!"
      ],
      liveMusic: [
        "LIVE MUSIC! That's my thing! I was in a band! We were called Mouse Rat! We were AWESOME!",
        "Going to see live music is the second-best thing after PLAYING live music!",
        "Every time I hear live music I want to start a new band. I've started like forty bands."
      ],
      comedy: [
        "Comedy is great because laughing is basically ab exercise!",
        "I love comedy shows! I once did an open mic! The audience loved it! ...I think!"
      ],
      hiking: [
        "Hiking is just walking but you get to pretend you're on an adventure! Which you ARE!",
        "I love trails because sometimes you find cool rocks! I have a rock collection! It's mostly just rocks!",
        "Nature is like a giant playground but without the rules! YEAH!"
      ],
      playground: [
        "Playgrounds! I LOVE playgrounds! The swings are my favorite! And the slides! And everything!",
        "I'm technically too big for most playground equipment but that has never stopped me!"
      ],
      default: [
        "This is awesome! I don't know why, but I can FEEL it!",
        "Dude. DUDE. You have to do this. Trust me!",
        "This is like a 10 out of 10! Maybe even an 11! Is that allowed?!",
        "Burt Macklin approves this activity. CASE CLOSED!"
      ]
    },

    emptyState: "Wait, nothing?! That can't be right! Did you press all the buttons? Try pressing fewer buttons! Or more buttons! I don't know how this works!",

    filterReactions: {
      water: "WATER STUFF! Let's get WET! Wait, that came out weird. Let's go SWIMMING!",
      liveMusic: "Music time! I should bring my guitar! Actually I always have my guitar! MOUSE RAT FOREVER!",
      food: "FOOD TIME! My favorite time! After music time! And nap time!",
      kidFriendly: "Kid stuff! I'm basically a professional at being a kid!"
    }
  },

  tom: {
    id: "tom",
    name: "Tom Haverford",
    color: "#9B59B6",
    emoji: "✨",

    intros: [
      "Alright alright alright, let Tommy show you how to do a weekend RIGHT.",
      "Welcome to the Tom Haverford Guide to Living Your Best Life in ATX. You're welcome.",
      "I've curated — yes, CURATED — the finest weekend experiences Austin has to offer.",
      "Listen, I know every hot spot, every hidden gem, every place where the aesthetic is *chef's kiss*.",
      "Tom Haverford here with your weekend itinerary. Dress code: fabulous. Minimum effort: maximum vibes."
    ],

    quips: {
      outdoors: [
        "Outdoor activities are great for the 'gram. Bring your best angles.",
        "Nature is fine as long as there's somewhere to charge your phone nearby.",
        "This spot has good lighting for photos. That's my primary rating criteria."
      ],
      water: [
        "Pool parties are where legends are made. Bring a float with your face on it.",
        "Water activities are cool but I'm NOT getting my hair wet. Style has a price.",
        "I only swim in pools where the vibe is immaculate. This qualifies."
      ],
      indoors: [
        "Indoor activities are my specialty. Climate-controlled excellence.",
        "AC is the greatest luxury of the modern age and I will not apologize for that take.",
        "This is the kind of place where you walk in and feel IMPORTANT."
      ],
      food: [
        "Okay THIS is what I'm talking about. Food is an EXPERIENCE, not just fuel.",
        "I would rename this place something cooler if I could. Like 'Food-ture' or 'Eat Haverford.'",
        "This spot is so fire it should be on my future restaurant mood board. Taking notes.",
        "If the presentation isn't Instagrammable, is it even food? This place gets it."
      ],
      kidFriendly: [
        "Kids are cool, I guess. They're like tiny people who don't appreciate branding yet.",
        "This is fine for kids. But also bring some style, people. Even toddlers can accessorize."
      ],
      liveMusic: [
        "Live music is essential for the Tom Haverford lifestyle. Front row or don't bother.",
        "Austin music scene? ELITE. This is where the cool people are. So, me.",
        "Every concert is a networking event if you have the right attitude."
      ],
      comedy: [
        "Comedy shows are great because laughing makes you look approachable. Brand strategy.",
        "I could do comedy. I'm hilarious. But I'm saving my talent for when the time is right."
      ],
      hiking: [
        "Hiking? With these shoes? ...Okay fine, I'll go. But I'm Instagramming the whole thing.",
        "Nature walks are acceptable if there's a coffee shop at the end of the trail."
      ],
      playground: [
        "Playgrounds are basically outdoor gyms for kids. It's called cross-training, look it up."
      ],
      default: [
        "This is very on-brand for a weekend well spent. I approve.",
        "Tom Haverford certified: this activity is PREMIUM.",
        "Treat yo'self to this one. Doctor's orders. Tom's orders. Same thing.",
        "This has major main-character energy. Go for it."
      ]
    },

    emptyState: "Nothing matches? That's never happened to me because I make EVERYTHING work. Try loosening your filters — Tom Haverford doesn't believe in limitations.",

    filterReactions: {
      food: "NOW we're talking. Restaurant recommendations are my GIFT to humanity.",
      liveMusic: "Music scene activated. Let me show you where the real ones go.",
      indoors: "Smart choice. The sun is great for photos but terrible for hair maintenance.",
      water: "Pool day? I hope you brought your designer swimwear. First impressions matter, even poolside."
    }
  },

  april: {
    id: "april",
    name: "April Ludgate",
    color: "#2E8B57",
    emoji: "💀",

    intros: [
      "Ugh, fine. Here are some things to do. I don't care if you go or not.",
      "I was forced to make this list. Some of these are actually okay. Don't tell anyone I said that.",
      "Weekend plans. Whatever. Here's some stuff that doesn't completely suck.",
      "I'd rather be at home with my dogs, but since you asked, here's what I'd tolerate doing.",
      "These are activities for people who leave their house voluntarily. Can't relate, but okay."
    ],

    quips: {
      outdoors: [
        "Outside is fine because there are fewer people per square foot than inside.",
        "Nature is the only thing I don't actively hate. It's quiet and doesn't try to talk to me.",
        "This is okay if you go early before the happy people show up."
      ],
      water: [
        "Swimming is acceptable because you can't hear people talking underwater.",
        "Water is dark and mysterious, like my soul. I'll allow it.",
        "This is fine. Cold water keeps the annoying people away."
      ],
      indoors: [
        "Indoor activities. My comfort zone. Because my actual comfort zone is my couch.",
        "Being inside means nobody can make you play frisbee. A win.",
        "Air conditioning and darkness. Two of my favorite things."
      ],
      food: [
        "This place is... fine. I'm not going to be weird and enthusiastic about food like Leslie.",
        "Eating is the most tolerable social activity because your mouth is too full to talk.",
        "I'd go here. Alone. Don't follow me."
      ],
      kidFriendly: [
        "Kids are basically tiny drunk people. They're the most honest humans alive. I respect that.",
        "This is fine for kids. They'll probably have more fun than the adults. That's always true.",
        "Children don't judge you for being weird. That's their one redeeming quality."
      ],
      liveMusic: [
        "Music is the only human art form I respect. Everything else is just people showing off.",
        "I'll go to a show if it's dark and loud enough that I don't have to make eye contact.",
        "This band is probably fine. All bands are basically the same. Except Mouse Rat."
      ],
      comedy: [
        "Comedy is people saying the dark things I'm already thinking. Finally, honesty.",
        "I only like comedy that makes other people uncomfortable. The darker the better."
      ],
      hiking: [
        "Hiking is just walking away from people but in nature. Literally my dream activity.",
        "I like trails where you don't see anyone else. The fewer humans, the better the hike.",
        "The best part of hiking is the silence. The worst part is when it ends and you're back in society."
      ],
      playground: [
        "Playgrounds are fine. At least kids have the decency to entertain themselves.",
        "Swings are underrated. You get to go high and ignore everyone. Perfect."
      ],
      default: [
        "Sure. Whatever. It doesn't suck.",
        "This is... acceptable. I guess.",
        "Fine. Go do this. Or don't. I'm not your mom.",
        "I'd do this. Alone. Don't make it weird."
      ]
    },

    emptyState: "Nothing found. Good. Stay home. That was always the better option anyway.",

    filterReactions: {
      hiking: "Hiking. Good. The further from civilization, the better.",
      indoors: "Indoor activities. Smart. The outside has too many people and too much sun.",
      water: "Water stuff. Fine. At least you can pretend you're on a deserted island.",
      kidFriendly: "Kid stuff. Fine. They're more bearable than adults at least."
    }
  },

  chris: {
    id: "chris",
    name: "Chris Traeger",
    color: "#DAA520",
    emoji: "🏃",

    intros: [
      "This is LITERALLY the best weekend planning experience of all time!",
      "I am SO excited to help you plan your weekend! My body is a microchip and it is READY for adventure!",
      "What a BEAUTIFUL day to be alive and planning activities in Austin, Texas!",
      "I have personally vetted these activities for fun, health, and overall life enrichment! You're welcome!",
      "Austin! LITERALLY the greatest city for weekend activities in the entire state! Let's optimize your joy!"
    ],

    quips: {
      outdoors: [
        "Being outdoors is LITERALLY the best thing you can do for your body, mind, and spirit!",
        "Fresh air! Vitamin D! Natural serotonin production! This activity has it ALL!",
        "Your cardiovascular system is going to LOVE this! I can feel it!",
        "Outdoor activities reduce cortisol by up to 21%! I read that in a journal! While jogging!"
      ],
      water: [
        "Swimming is LITERALLY a full-body workout disguised as fun! Your muscles will thank you!",
        "Water activities are excellent for joint health! Your future self is high-fiving your current self!",
        "Cold water immersion has been shown to boost immune function! Science is AMAZING!"
      ],
      indoors: [
        "Indoor activities are a GREAT way to cross-train your fun muscles! Rest is productive!",
        "Even though we're inside, I encourage you to maintain excellent posture! Stand tall!",
        "This is an outstanding use of climate-controlled leisure time!"
      ],
      food: [
        "Fuel is ESSENTIAL for the human body and this establishment provides EXCEPTIONAL fuel!",
        "Eating well is LITERALLY one of the pillars of a high-performance lifestyle!",
        "I hope they have a lean protein option! But whatever you eat, eat it with ENTHUSIASM!"
      ],
      kidFriendly: [
        "Children need approximately 60 minutes of physical activity per day! This helps achieve that!",
        "Family activities are LITERALLY the building blocks of a healthy, connected life!",
        "A child's developing brain needs new experiences! This is a NEURAL GROWTH OPPORTUNITY!"
      ],
      liveMusic: [
        "Music has been shown to increase dopamine production! This is LITERALLY a happiness prescription!",
        "Live music raises your heart rate in a POSITIVE way! It's like cardio for your SOUL!",
        "The vibrations of live music are LITERALLY good for your cellular health! Probably!"
      ],
      comedy: [
        "Laughter burns 10-40 calories per 15 minutes! Comedy is LITERALLY exercise!",
        "The endorphin release from laughing is comparable to a moderate jog! I LOVE science!"
      ],
      hiking: [
        "Hiking is LITERALLY the perfect activity! Cardio, strength, balance, AND nature exposure!",
        "Every step on a trail adds minutes to your life! I calculated this while hiking! While smiling!",
        "Trail walking at an incline burns 30% more calories than flat walking! Your glutes will be THRILLED!"
      ],
      playground: [
        "Playgrounds promote proprioceptive development in children! LITERALLY building better humans!",
        "Climbing, swinging, and running — playgrounds are nature's HIIT training for kids!"
      ],
      default: [
        "This is LITERALLY going to be the highlight of your weekend!",
        "I give this activity my highest personal recommendation! Which I give to most things! Because life is AMAZING!",
        "You are going to have an OUTSTANDING time! I can feel it in every fiber of my being!",
        "This activity is LITERALLY perfect for you! And for everyone! Life is a GIFT!"
      ]
    },

    emptyState: "No results yet! But that's OKAY because every obstacle is just an opportunity wearing a disguise! Try different filters and we WILL find your perfect activity!",

    filterReactions: {
      hiking: "HIKING! LITERALLY my favorite activity! Your VO2 max is going to be SO grateful!",
      water: "Water activities! EXCELLENT for low-impact cardiovascular training! Your joints are CELEBRATING!",
      food: "Dining out! Remember: eating is fueling! Choose wisely and ENJOY every bite! Your body is a MACHINE!"
    }
  }
};
