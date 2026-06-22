// Austin Weekend Guide — Indoor Activities, Evening Entertainment, Food/Drink, Cultural Venues
// Ready to merge via ALL_ACTIVITIES in app.js

const INDOOR_EVENING_ACTIVITIES = [
  // ============================================================
  // MUSEUMS & CULTURAL INDOOR
  // ============================================================
  {
    id: "thinkery",
    name: "Thinkery — Austin Children's Museum",
    description: "Austin's premier children's museum in the Mueller development, designed for kids ages 0-11. The exhibits are hands-on and genuinely clever — there's a water play area (bring a change of clothes), a light and shadow room, a maker space with real tools, a music lab, and rotating special exhibits. The outdoor area has a splash pad and climbing structures. Unlike many children's museums that feel tired after an hour, the Thinkery keeps kids engaged for 2-3 hours easily. The building itself is beautiful — modern, well-lit, thoughtfully laid out. Admission is $16 for adults and kids (free for under 1). Members get unlimited visits which pays for itself in 2-3 trips. Open Tuesday through Sunday. Weekend mornings are the busiest — Tuesday and Wednesday are the quietest days. There's a small café inside with decent coffee and kid-friendly food. Parking in the Mueller lots nearby is free. The museum is right next to Mueller Lake Park, so you can combine a Thinkery visit with playground time and lunch at one of the nearby restaurants. Pro tip: the Tuesday evening sessions (5-7 PM) are less crowded and great for after-daycare visits.",
    link: "https://thinkeryaustin.org",
    neighborhood: "Mueller / Northeast Austin",
    cost: "moderate",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "lbj-library",
    name: "LBJ Presidential Library",
    description: "One of the most engaging presidential libraries in the country, located on the UT Austin campus. The permanent exhibits cover LBJ's presidency through the civil rights era, Vietnam, the Great Society programs, and the Space Race. The highlight is a full-scale replica of the Oval Office during LBJ's tenure — surprisingly moving to stand in. The Lady Bird Johnson exhibit on the top floor covers her environmental conservation work and has beautiful views of the campus. There's also a rotating exhibit gallery that brings in high-quality national exhibitions. The museum does an excellent job of presenting the complexity of LBJ's legacy — the civil rights achievements alongside Vietnam. It's intellectually honest in a way that's rare for presidential libraries. Admission is free (one of the few free presidential libraries). Open daily 9 AM to 5 PM. Budget 90 minutes to 2 hours. The building is a Brutalist concrete monolith that's architecturally distinctive if not beautiful. Parking in the UT garage on Red River is easiest ($3-5). Can be combined with the Blanton Museum, which is a short walk away. Kid-friendliness depends on age — the Oval Office replica and space exhibits engage younger kids, but most content is best for ages 10+.",
    link: "https://www.lbjlibrary.org",
    neighborhood: "UT Campus / Central",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "umlauf-sculpture",
    name: "UMLAUF Sculpture Garden & Museum",
    description: "A hidden gem tucked into the trees along Barton Creek near Zilker Park. The garden displays over 60 sculptures by Charles Umlauf (a beloved UT art professor) spread across a beautifully landscaped outdoor space with native plants, towering trees, and a koi pond. The indoor gallery rotates contemporary exhibitions. The vibe is tranquil and contemplative — the opposite of a loud Austin weekend. It's a small enough space that you can see everything in 45-60 minutes, making it perfect to pair with a Barton Springs swim or Zilker Park visit. Admission is $7 for adults, $3 for students, free for kids under 6. Free on the first Tuesday of each month. The garden paths are stroller-navigable. There's a small outdoor amphitheater that hosts occasional events. The combination of art, nature, and quiet makes this one of the most restorative spots in central Austin — you forget you're minutes from downtown. Best on a cool morning when the light through the trees is golden. Limited street parking on Barton Springs Road; the Zilker lots are a short walk away.",
    link: "https://umlaufsculpture.org",
    neighborhood: "South Austin / Zilker",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "contemporary-austin",
    name: "The Contemporary Austin",
    description: "Austin's contemporary art museum operates two locations: the downtown Jones Center on Congress Avenue and the Laguna Gloria lakeside campus. Laguna Gloria is the star for a family outing — it works almost like a beautiful park with art scattered through it. The 14-acre sculpture garden wraps around a 1916 Italianate villa on the Lake Austin shoreline, with shaded paths, lawns, large outdoor installations, and room for a toddler to wander without treating the visit like a formal museum trip. The Art School at Laguna Gloria offers classes and workshops, and the museum has family backpacks with art activities, games, and puzzles for exploring the grounds. The Jones Center downtown hosts rotating contemporary exhibitions across multiple floors. Members get unlimited admission to both locations; regular admission is $10 for adults, $5 for seniors and students, and free for kids under 18. Everyone gets in free on Thursdays. Budget 60-90 minutes for Laguna Gloria. The grounds are stroller-friendly but hilly in parts. Parking is in a small lot that fills on weekends. Pair it with Mayfield Park next door for an easy art-and-nature morning.",
    link: "https://thecontemporaryaustin.org",
    neighborhood: "Downtown / West Austin",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "mexic-arte",
    name: "Mexic-Arte Museum",
    description: "A small but vibrant museum on Congress Avenue dedicated to Mexican, Latino, and Latin American art and culture. Founded in 1984, it's one of the few museums in the U.S. focused specifically on this tradition. The exhibitions rotate regularly and range from traditional folk art to cutting-edge contemporary work. The annual Día de los Muertos celebration in October/November is their signature event and draws thousands — elaborate altars, live music, food, and community art. The museum is just two gallery rooms so a visit takes 30-45 minutes, but the quality is consistently high and the focus is distinctive. Admission is $7 for adults, $4 for students, free for kids under 12. Free on Sundays. Located on Congress Avenue between 4th and 5th, making it easy to combine with a walk up to the Capitol or down to South Congress. The gift shop is excellent for unique, culturally grounded gifts. Air-conditioned, downtown, quick visit — perfect to tuck into a larger downtown itinerary on a hot day.",
    link: "https://mexic-artemuseum.org",
    neighborhood: "Downtown",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "texas-capitol",
    name: "Texas State Capitol",
    description: "The Texas State Capitol is taller than the U.S. Capitol (Texans insisted) and one of the most beautiful statehouses in the country. The building is pink granite, topped with a statue of the Goddess of Liberty, and surrounded by 22 acres of landscaped grounds. Free guided tours run every 30-45 minutes on weekdays and Saturdays, covering the history of the building, the legislature, and Texas politics. Self-guided visits are available anytime the building is open (7 AM to 10 PM on weekdays, 9 AM to 8 PM weekends). The rotunda is stunning — look straight up at the dome interior with the letters T-E-X-A-S receding into the ceiling. The grounds are pleasant for a walk, with monuments, old trees, and views down Congress Avenue to the river. The Capitol Extension underground holds committee rooms and additional exhibits. Security screening at the entrance is quick. Free visitor parking is available in the garage on 12th Street (enter from San Jacinto). The whole visit takes about an hour with a tour. Great for out-of-town guests, and surprisingly engaging even if you've lived in Austin for years.",
    link: "https://tspb.texas.gov/prop/tc/tc/capitol.html",
    neighborhood: "Downtown",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },

  // ============================================================
  // BOWLING, ESCAPE ROOMS, INDOOR ENTERTAINMENT
  // ============================================================
  {
    id: "westgate-lanes",
    name: "Westgate Lanes",
    description: "A classic Austin bowling alley that's been around since 1960. No flashy gimmicks, no laser lights — just honest lanes, cold beer, and the satisfying crack of pins. The interior has that perfect retro-bowling-alley feel: wood paneling, neon signs, classic scoring tables. They have a full bar and the prices are reasonable — games run around $5-7 per person, shoe rental $4. League nights are Monday through Thursday; casual bowling is best on weekend afternoons or late evenings. The crowd is a genuine Austin mix — families during the day, date nights and friend groups in the evening. The lanes are well-maintained and the ball return works (not always a given at vintage alleys). There's a small arcade area and a snack bar with surprisingly decent food. Air-conditioned and entertaining for all ages — a reliable hot-day activity. Located on South Lamar near Barton Springs Road, making it easy to combine with other South Austin activities. No reservations needed for casual bowling but weekends can get busy after 7 PM.",
    link: null,
    neighborhood: "South Lamar",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "highland-lanes",
    name: "Highland Lanes",
    description: "Another classic Austin bowling alley, this one in the Highland neighborhood north of UT. Operating since 1962, Highland Lanes has 40 lanes and the kind of worn-in charm that corporate bowling centers can't replicate. Black lights and glow bowling on Friday and Saturday nights give it a party atmosphere. Weekday afternoons are mellow and family-friendly. Prices are similar to Westgate — around $5-7 per game, $4 shoe rental. They have a decent bar and grill serving burgers, pizza, and bar snacks. The arcade section has a mix of classic and modern games. Highland Lanes tends to be slightly less crowded than Westgate, especially on weekend afternoons. Plenty of parking in their lot. The location near Airport Blvd and I-35 makes it accessible from most of Austin. Good for birthday parties — they have party packages. The staff is friendly and used to helping beginners and kids. One of those places that reminds you Austin still has genuine neighborhood spots that haven't been gentrified into oblivion.",
    link: null,
    neighborhood: "North Central / Highland",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "escape-game-austin",
    name: "The Escape Game Austin",
    description: "A polished escape room experience at the Domain with multiple themed rooms ranging from 'Prison Break' to 'The Heist' to 'Playground.' The production quality is a step above most escape rooms — the sets, lighting, and puzzle design feel like you're walking into a movie set. Games are 60 minutes and designed for groups of 2-8 players. Difficulty ranges from intermediate to expert, and the game guides provide hints via a screen if you get stuck (no shame in it). Booking in advance is strongly recommended, especially for weekends — rooms sell out. Prices are around $40-45 per person. Not the cheapest activity but the quality justifies it. Great for date nights, friend groups, or team outings. Kids can play but the puzzles are designed for adults — ages 12+ get the most out of it. The Domain location means you can combine it with shopping, dining, or Topgolf nearby. AC-blasted interiors make this a premium hot-day activity. Each room plays differently so repeat visits are worthwhile if you enjoy the format.",
    link: "https://theescapegame.com/austin/",
    neighborhood: "North Austin / Domain",
    cost: "expensive",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "pinballz-arcade",
    name: "Pinballz Arcade",
    description: "A massive arcade with over 200 pinball machines and 150+ classic and modern video games spread across multiple locations (the original on Burnet, Pinballz Lake Creek to the north, and Pinballz Kingdom in Buda). The Burnet Road location is the original and has the most character — dark, loud, and packed with machines in various states of beautiful decay. Games take quarters or tokens (most are $0.25-$1.00 per play, not the unlimited model). The selection is staggering — vintage pinball machines from the '70s through brand-new releases, classic arcade cabinets (Galaga, Donkey Kong, Street Fighter), and modern games. There's a bar with craft beer and cocktails. The Kingdom location in Buda is the largest and has a VR section, laser tag, and mini bowling alongside the arcade games. That location is better for families; the Burnet location skews more adult. Pinballz tends to attract genuine gaming enthusiasts alongside casual visitors, so the machines are generally well-maintained. No admission fee — you just pay per game. A fun $10-20 worth of quarters buys a solid hour of entertainment. Gets busy and loud on Friday/Saturday nights.",
    link: "https://pinballzarcade.com",
    neighborhood: "North Austin / Burnet",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "k1-speed",
    name: "K1 Speed Indoor Go-Karts",
    description: "Electric indoor go-kart racing in a large warehouse facility in North Austin. The karts are electric (not gas), which means they're quick off the line, relatively quiet, and the indoor air doesn't fill with exhaust. Top speeds around 45 mph. Races run on a timed format — you get a set number of laps and try to post the fastest time, racing against the clock rather than bumping into each other. There are two track configurations that they rotate. A single race is about $25, multi-race packages bring the per-race price down. You must be at least 48 inches tall to race (roughly age 7-8+). They also have a Junior kart program for smaller kids. The facility has a small lounge area with arcade games and a snack bar. It's genuinely fun even for non-car-people — the speed and competition are addictive. Weekend afternoons get busy with birthday parties and groups, so weekday visits or Saturday mornings are smoother. Closed-toe shoes required. The electric karts are surprisingly powerful and the racing gets competitive. Good for a rainy day, a hot afternoon, or anytime you want an adrenaline hit.",
    link: "https://www.k1speed.com/austin-location.html",
    neighborhood: "North Austin",
    cost: "moderate",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "peter-pan-mini-golf",
    name: "Peter Pan Mini Golf",
    description: "An Austin institution since 1948, Peter Pan is a quirky miniature golf course on Barton Springs Road with two 18-hole courses — one harder, one easier. The course features handmade concrete obstacles painted in bright primary colors, giant dinosaurs, a windmill, and various whimsical structures that haven't changed much in decades. It looks like a folk art installation that happens to also be a mini golf course. The 'hard' course is legitimately challenging with tricky angles and elevated greens. Open until midnight (or later) most nights, which makes it one of Austin's best late-night date activities — playing mini golf under string lights on a warm evening is hard to beat. Cash only for a long time, but they now accept cards. About $9-10 per adult, $7 for kids. BYOB is technically not allowed but... it's Austin. The location on Barton Springs Road means you're near Zilker Park, Barton Springs, and South Lamar restaurants. Very kid-friendly during the day, more date-night-vibes after dark. No reservations — first come, first served. Weekend evenings have short waits.",
    link: "https://peterpanminigolf.com",
    neighborhood: "South Austin / Zilker",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },

  // ============================================================
  // COMEDY VENUES
  // ============================================================
  {
    id: "esthers-follies",
    name: "Esther's Follies",
    description: "Austin's longest-running comedy show, performing on Dirty 6th Street since 1977. The show is a mix of sketch comedy, musical numbers, and political satire — think SNL meets vaudeville with a Texas twist. The signature move: the stage has a window behind it that opens onto 6th Street, and performers interact with unsuspecting passersby as part of the act. The political satire is sharp, equal-opportunity, and genuinely funny regardless of your politics. Shows run Thursday through Saturday, typically at 8 PM and 10 PM. Tickets are $30-45 depending on seating — reserve in advance for weekend shows. The venue is a small theater so every seat has a good sightline. There's a bar in the back. The show runs about 90 minutes. It's one of those Austin institutions that both tourists and longtime locals enjoy, which is rare. Not kid-appropriate (adult humor, language) but perfect for a date night or group outing. The 6th Street location means you can bar-hop before or after. If you have out-of-town guests, this is one of the best things to take them to.",
    link: "https://www.esthersfollies.com",
    neighborhood: "Downtown / 6th Street",
    cost: "moderate",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "creek-and-cave",
    name: "Creek and the Cave",
    description: "A comedy club that relocated from New York City to East Austin in 2021 and quickly became Austin's best venue for standup comedy. The programming is exceptional — national touring headliners (names you'd recognize from Netflix specials) several nights a week, plus strong local showcases and open mics. The room is purpose-built for comedy: intimate (about 200 seats), good sightlines from every table, proper sound and lighting. Full food and drink service at your seat, and the food is better than typical comedy club fare — actual entrees, not just fried apps. Ticket prices vary wildly depending on the act — local showcases can be $10-15, national headliners $30-60+. Two-drink minimum, which is standard for comedy clubs. Shows most nights of the week, usually 7:30 PM and 10 PM. The East Austin location on East 6th has easy parking compared to downtown. This is where Austin's comedy scene is centered now — if you like standup, check their calendar regularly. Not kid-friendly (adult content, two-drink minimum). Book popular headliners well in advance.",
    link: "https://www.creekandcave.com",
    neighborhood: "East Austin",
    cost: "moderate",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "velveeta-room",
    name: "The Velveeta Room",
    description: "A tiny, grimy, glorious comedy room on 6th Street next door to Esther's Follies. This is where Austin's underground comedy scene lives — the room holds maybe 80 people, the stage is barely elevated, and you're close enough to smell the comedian's fear. The programming leans alternative and experimental — you'll see edgier, weirder material here than at Creek and Cave. Open mics, showcases, and the occasional drop-in from a touring comedian who wants to try new material in a low-stakes room. Cover is usually $5-10, sometimes free for open mics. One drink minimum. The room has the energy of a punk rock show applied to comedy — anything could happen, and that's the point. Shows start late (9 PM, 10 PM) and the crowd tends to be comedy nerds, industry people, and late-night adventurers. Not polished, not comfortable, not for everyone — but if you want to see what Austin comedy feels like at its rawest, this is it. You might see the next big comedian working out material here for $7.",
    link: null,
    neighborhood: "Downtown / 6th Street",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "fallout-theater",
    name: "Fallout Theater",
    description: "Austin's home for improv and sketch comedy, located on East 7th Street. If you like Whose Line Is It Anyway or UCB-style improv, this is your spot. Multiple shows most nights — improv jams, sketch revues, and themed shows (horror improv, musical improv, competitive improv). The talent level is high; many performers have trained at UCB, iO, or Second City. Shows are typically $10-15, sometimes cheaper for student or experimental shows. The theater is small and intimate. BYOB is allowed, which is unique and wonderful — grab a six-pack from the store next door and bring it in. Shows start on time and run 60-90 minutes. The improv shows are interactive — expect to be asked for suggestions from the audience. The vibe is supportive and fun; even when bits don't land, the energy is positive. Thursday nights tend to be the most experimental, Saturday nights the most polished. Great date night option that's different from standup. Not specifically kid-appropriate but the content is usually PG-13 at most. One of Austin's best entertainment values.",
    link: "https://www.falloutcomedy.com",
    neighborhood: "East Austin",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },

  // ============================================================
  // LIVE MUSIC VENUES
  // ============================================================
  {
    id: "continental-club",
    name: "Continental Club",
    description: "The Continental Club on South Congress has been the heart of Austin's roots music scene since 1955. Originally a burlesque theater, it's now a darkly gorgeous music venue that books blues, country, rockabilly, soul, and Americana acts seven nights a week. The room holds about 200 people, the stage is at eye level, and the sound is superb — you're never more than 30 feet from the musicians. Happy hour shows (usually 6-7 PM) are free and feature some of Austin's best players; later shows have a cover of $5-20 depending on the act. Dale Watson, James McMurtry, and dozens of Austin legends have residencies here. The bar serves strong drinks at reasonable prices. The crowd is a beautiful mix of ages — tourists in from Nashville, old-timers who've been coming for decades, young musicians studying the craft. The Continental Gallery upstairs hosts separate shows (usually free). The South Congress location means you can grab dinner at any of a dozen good restaurants within walking distance before the show. Not kid-friendly (bar setting, late hours). This is Austin's most important music venue, full stop.",
    link: "https://continentalclub.com",
    neighborhood: "South Congress",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "stubbs",
    name: "Stubb's BBQ & Amphitheater",
    description: "Part restaurant, part indoor venue, part outdoor amphitheater — Stubb's is one of Austin's most iconic music venues. The outdoor amphitheater (Waller Creek Amphitheater) holds about 2,400 people and books major touring acts — this is where medium-to-big names play when they come through Austin. The indoor stage is smaller and more intimate for local acts and smaller tours. The BBQ is decent (not Franklin-level, but solid brisket and ribs) and the Sunday Gospel Brunch is a beloved Austin tradition — all-you-can-eat BBQ buffet with live gospel music ($25-30, reservations recommended). The outdoor venue has a great atmosphere under the Texas sky with the downtown skyline behind the stage. Sound quality is excellent. Tickets for the amphitheater shows range from $20-80+ depending on the act. The Red River location puts you in Austin's live music corridor — Mohawk, Cheer Up Charlies, and several other venues are within a block. Beer and cocktail selection is solid. For the amphitheater shows, there's a VIP balcony area that's worth the upgrade for popular shows. Check their calendar — something good is playing almost every night.",
    link: "https://stubbsaustin.com",
    neighborhood: "Red River / Downtown",
    cost: "moderate",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "antones",
    name: "Antone's Nightclub",
    description: "Founded in 1975 as Austin's 'Home of the Blues,' Antone's has hosted Muddy Waters, B.B. King, Buddy Guy, Stevie Ray Vaughan, and basically every blues legend who's ever toured. The current location on East 5th Street (its fifth home) is a proper music venue — great sound, a raised stage with good sightlines, and a capacity of about 350. While the blues roots are sacred, the booking has expanded to include rock, soul, funk, hip-hop, and Americana — all with an emphasis on musicianship. This is where you go to see artists who can really play. The room has a dance floor in front of the stage and seating in the back. Ticket prices range from $15-40 for most shows. The bar is full-service with a decent cocktail list. The walls are covered in music history photos. Weeknight shows are often the hidden gems — smaller acts, lower prices, more intimate. Antone's also does late-night DJ sets and dance parties. The legacy and the sound system make this one of the best rooms to hear live music in Austin. If you care about music as craft, put Antone's at the top of your list.",
    link: "https://antonesnightclub.com",
    neighborhood: "East 5th / Downtown",
    cost: "moderate",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "elephant-room",
    name: "Elephant Room",
    description: "Austin's premier jazz club, located in a basement on Congress Avenue downtown. You descend a narrow staircase into a low-ceilinged, dimly lit room that feels like it could be in 1950s Greenwich Village. The room is tiny — maybe 60 people at capacity — which means every seat is front row. Live jazz every night, no cover for happy hour sets (usually 6-9 PM), modest cover ($5-10) for the late sets. The musicians are exceptional — Austin has a deep bench of jazz talent and this is where they play. The cocktails are good, the bartenders are pros, and the atmosphere is pure old-school cool. No food, just drinks. The acoustics in the basement room are naturally warm and intimate. This is the kind of place where you realize why jazz exists — it needs a room like this. Dress however you want (it's Austin) but the room makes you feel like you should look sharp. Not for kids or loud groups — this is a listening room. Best experienced on a weeknight when the crowd is small and the music fills the space. One of the most special rooms in Austin.",
    link: "https://www.elephantroom.com",
    neighborhood: "Downtown / Congress",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "saxon-pub",
    name: "Saxon Pub",
    description: "A songwriter's venue on South Lamar that's been the heart of Austin's singer-songwriter scene since 1990. The room is modest — wood paneling, Christmas lights, maybe 150 capacity — but the booking is impeccable. This is where Austin's best songwriters play: Bob Schneider, Patty Griffin, Shawn Colvin, and dozens of lesser-known writers who are just as good. The 'Songwriter Serenade' showcases on certain nights feature four writers trading songs in the round — it's like being in the room where the songs are born. Shows start early (usually 7 or 8 PM) and the audience actually listens — this is a listening room, not a bar with background music. Cover is typically $5-15. The bar serves beer, wine, and basic cocktails. The Wednesday night residencies are often the best-kept secrets in Austin music. If the Continental Club is Austin's blues heart, the Saxon Pub is its folk/Americana soul. Not for kids (bar venue). Best for people who care about lyrics and craft. The South Lamar location has easy parking and is near several good restaurants.",
    link: "https://thesaxonpub.com",
    neighborhood: "South Lamar",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "cboys-heart-soul",
    name: "C-Boy's Heart & Soul",
    description: "A sweaty, joyful blues and soul venue on South Congress that feels like a juke joint teleported into Austin. The room is small and dark, the music is loud and excellent, and the dance floor fills up fast. C-Boy's books blues, soul, funk, and R&B with an emphasis on getting people dancing. The Tuesday night Soul Night residencies are legendary — the dance floor is packed with people who can actually dance. Many shows are free or have a small cover ($5-10). The bar is straightforward — beer, whiskey, basics. The upstairs room (Jade) hosts separate shows, often jazz or more experimental music. The South Congress location means it's surrounded by restaurants and other bars for a full evening out. Shows start around 9 PM and go late. The vibe is diverse, enthusiastic, and completely unpretentious — this is a place for people who love music and dancing, full stop. If you go on a Soul Night and don't end up dancing, check your pulse. Not for kids. One of the best regular-night-out options in Austin.",
    link: null,
    neighborhood: "South Congress",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "mohawk",
    name: "Mohawk",
    description: "An indoor/outdoor music venue on Red River Street that's become the anchor of Austin's indie rock and punk scene. The outdoor stage has a huge patio and a balcony with views over Red River — it's one of the best open-air concert settings in Austin. The indoor stage is smaller and louder — proper club shows. Mohawk books everything from local punk bands to touring indie acts to hip-hop. They're a major SXSW venue. The outdoor shows are all-ages and feel like a backyard party; the indoor shows skew 18+/21+. Ticket prices range from free (local showcases) to $30+ (bigger touring acts). Full bar with decent beer selection. Food trucks often set up outside. The Red River district is Austin's live music concentration — Stubb's, Cheer Up Charlies, and Hotel Vegas are all within walking distance, so you can venue-hop. The rooftop area is great for hanging out between sets. Sound quality is solid for both stages. Check their calendar — they have something almost every night and the free shows are often surprisingly good.",
    link: "https://www.mohawkaustin.com",
    neighborhood: "Red River / Downtown",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },

  // ============================================================
  // UNIQUE EVENING EXPERIENCES
  // ============================================================
  {
    id: "blue-starlite",
    name: "Blue Starlite Drive-In",
    description: "A mini urban drive-in theater that brings back the magic of watching movies under the stars. The Mueller location has spots for about 50 cars plus a walk-up area with blankets and lawn chairs. They screen a mix of classic films, cult favorites, and newer releases — the calendar tends toward crowd-pleasers and seasonal picks (horror in October, holiday movies in December, 80s classics year-round). The screen is smaller than a traditional drive-in but the intimacy is part of the charm. Audio comes through your car radio on an FM frequency, or you can use portable speakers for the lawn area. Admission is $10-15 per person; the best spots (front-row, premium positions) cost a bit more. There's a small concession stand with popcorn, candy, and drinks. Arrive 30-45 minutes early to get a good spot and settle in. The Mueller location has a neighborhood feel — families, couples, friend groups all mixed in. They also have a second location in Round Rock. It's BYOB-friendly for the lawn area. A genuinely unique Austin date night that works for couples, families, and friend groups alike.",
    link: "https://www.bluestarlitedrivein.com",
    neighborhood: "Mueller / Northeast Austin",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "chicken-shit-bingo",
    name: "Chicken Shit Bingo at Ginny's Little Longhorn",
    description: "Every Sunday from 4-8 PM, Ginny's Little Longhorn Saloon hosts one of Austin's weirdest and most beloved traditions: Chicken Shit Bingo. Here's how it works — you buy a number ($2), a live chicken is released onto a bingo board painted on a table, and wherever the chicken does its business, that number wins. Yes, really. The prize pot depends on how many numbers are sold. While waiting for the chicken to perform, there's live country music, cheap Lone Star tallboys ($3), and a crowd of regulars, tourists, and bewildered first-timers packed into a tiny honky-tonk dive bar. Ginny's is a no-frills establishment — concrete floors, Christmas lights, beer-only bar. The whole thing is so perfectly, absurdly Austin that it's become a bucket-list item. Arrive by 3:30 PM to get a spot inside; by 4 PM it's shoulder-to-shoulder. The bar is on Burnet Road in the Allandale neighborhood. Free to enter, $2 per bingo number. Not technically kid-friendly (bar setting) but families do bring kids on Sunday afternoons. Authenticity level: maximum.",
    link: null,
    neighborhood: "Allandale / Burnet",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },

  // ============================================================
  // BREWERIES & FOOD/DRINK VENUES
  // ============================================================
  {
    id: "celis-brewery",
    name: "Celis Brewery — Sunday Music Bingo",
    description: "A brewery in North Austin with a great taproom and one of the city's most fun recurring events: Music Bingo every Sunday from 4-6 PM. Instead of numbers, the bingo cards have song titles — the host plays clips and you mark them off. It's free to play, the prizes are Celis merch and gift cards, and the whole thing is surprisingly competitive and hilarious. The beer itself is excellent — Celis is a legacy name in Texas craft beer (Christine Celis revived her father Pierre's Belgian-style recipes). The Celis White witbier is their flagship and it's one of the best wheat beers you'll find anywhere. The taproom is spacious with indoor and outdoor seating, and there are food trucks on-site. Beyond Music Bingo, it's a solid brewery to hang out at any day — the grounds are family-friendly with space for kids to run around, and the beer selection is deep. Located on East 4th near the airport area. Parking in their lot. Not the hippest brewery space in Austin but the beer quality and Music Bingo make it a standout destination.",
    link: "https://www.celisbeers.com",
    neighborhood: "East Austin / Airport Area",
    cost: "moderate",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "pinthouse-pizza",
    name: "Pinthouse Pizza",
    description: "A brewery-restaurant hybrid that does both halves exceptionally well. The pizza is wood-fired, crispy, and genuinely good — not an afterthought to sell beer. The beer menu features their own excellent brews (Electric Jellyfish IPA is the crowd favorite and one of the best IPAs in Texas) plus a curated guest tap list. Three locations: South Lamar, Burnet Road, and Round Rock. All three have the same quality but different vibes — South Lamar is the original and most neighborhood-y, Burnet is larger and more family-oriented. The spaces are bright, modern, and comfortable with both indoor and patio seating. Great for families — kids eat free on certain nights and the pizza is crowd-pleasing for all ages. The beer selection rotates constantly with 30+ taps including limited releases. Prices are moderate — pizzas run $14-18, pints $6-8. It's one of the few places in Austin where the food and beer are both worth going out of your way for. Good for lunch, dinner, or a casual afternoon hang. No reservations; weekend dinner service can have a wait but it moves fast.",
    link: "https://pinthousetaproom.com",
    neighborhood: "South Lamar / Burnet / Round Rock",
    cost: "moderate",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "austin-beerworks",
    name: "Austin Beerworks",
    description: "One of Austin's most popular breweries with a large, well-designed taproom and beer garden in North Austin. The space is industrial-chic — concrete floors, high ceilings, long communal tables, and a massive bar. The beer lineup is strong across styles: Fire Eagle IPA is their flagship, Pearl Snap Pils is a perfect lager, and they rotate through creative seasonals. The outdoor area is spacious with shade sails, yard games, and room for kids to roam. Food trucks rotate on-site. They also host a disc golf course nearby (Sprinkle Valley, separate listing). The taproom vibe is energetic and social — good for groups, casual meetups, or just hanging out on a Saturday afternoon. Flights are a good way to sample the range ($10-12 for four). They do can releases for limited editions that draw lines. Open Thursday through Sunday. The North Burnet area location has plenty of parking. Dog-friendly patio. Combines well with nearby spots on Burnet Road for a full afternoon. One of Austin's most reliably good breweries for both beer quality and hangout quality.",
    link: "https://austinbeerworks.com",
    neighborhood: "North Austin / Burnet",
    cost: "moderate",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "st-elmo-brewing",
    name: "St. Elmo Brewing Company",
    description: "A neighborhood brewery in South Austin's St. Elmo district with a focus on clean, well-crafted lagers and ales. The taproom is modest but comfortable with a solid outdoor area. What sets St. Elmo apart from the trendier breweries is the beer itself — they focus on technical excellence rather than novelty. The lagers are some of the best in Austin. The surrounding St. Elmo area has become a mini food and drink district — Meanwhile Brewing, Skull Mechanix Jewelry, and several restaurants are within walking distance. Food trucks rotate on-site. The outdoor area is dog-friendly and has enough shade to be comfortable in shoulder seasons. Open Wednesday through Sunday. The crowd is local and laid-back — this is where South Austin drinks. Flights are the way to go for a first visit ($8-10). The taproom hosts occasional events, trivia nights, and live music. Parking in their lot. It doesn't have the flashiest space or the wildest beer menu, but the quality of what's in the glass is consistently excellent. Good for a quiet afternoon beer that doesn't require a strategy or a plan.",
    link: "https://www.stelmobrewing.com",
    neighborhood: "South Austin / St. Elmo",
    cost: "moderate",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "thicket-food-park",
    name: "Thicket Food Park",
    description: "A family-friendly neighborhood food park and community space at 7800 South 1st Street. The food trucks are the anchor, but the reason to include Thicket in an activity guide is that it is designed for lingering rather than grabbing food and leaving. Mature trees shade the seating and play areas, a small playground gives kids somewhere to move, and the outdoor stage hosts live music and occasional special events. The current trailer lineup spans coffee, tacos, Taiwanese food, Vietnamese food, vegan food, shawarma, pizza, smoothies, and desserts, so a mixed group can all find something without negotiating a single restaurant choice. There is also a community garden and plenty of picnic-table seating. Saturday mornings are an especially easy family outing: get coffee and breakfast, let the kids roam, and stay as long as the weather allows. Evenings work well when the stage is active or when you want a casual dinner outside. Individual truck hours vary, so check the site before making a trip for one specific vendor. Thicket is the durable place behind the saved South First baby-rave note: the events change, but the venue is worth keeping in the static guide.",
    link: "https://www.thicketaustin.com/",
    neighborhood: "South Austin / Dittmar",
    cost: "moderate",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "franklin-bbq",
    name: "Franklin Barbecue",
    description: "The most famous barbecue joint in America, and the brisket lives up to the hype. Aaron Franklin's oak-smoked brisket is a religious experience — bark like black velvet, fat that melts on contact, meat so tender it falls apart when you look at it. The problem is the line: people start queuing at 7-8 AM for an 11 AM opening, and they sell out every day (usually by 1-2 PM). On weekends the line can be 2-3 hours. Is it worth it? For the brisket, honestly yes — but you need to make a morning of it. Bring chairs, a cooler with drinks, a friend, and a good attitude. The line is part of the experience and the crowd is friendly. Prices are high for BBQ ($30+ per pound for brisket) but you're paying for the best. The menu is simple: brisket, pulled pork, ribs, turkey, sausage, a few sides. No reservations for walk-up. They DO offer preorders online for pickup — check their website for availability (limited, sells out fast). Located on East 11th Street. If you want Franklin-quality brisket without the line, la Barbecue and Micklethwait are excellent alternatives.",
    link: "https://franklinbbq.com",
    neighborhood: "East Austin",
    cost: "moderate",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "la-barbecue",
    name: "la Barbecue",
    description: "If Franklin is Austin BBQ's crown, la Barbecue is the less-crowded jewel right beside it. Run by LeAnn Mueller (of the Mueller BBQ dynasty), the brisket here rivals Franklin's — some locals actually prefer it. The line is shorter than Franklin (usually 30-60 minutes on weekends vs. 2-3 hours) and the quality is just as high. The beef rib is a showstopper if they have it — a massive, caveman-looking bone with impossibly tender meat. Brisket, pulled pork, sausage, and ribs round out the menu. Prices are similar to Franklin ($25-30/lb for brisket). Located on East Cesar Chavez in a permanent spot with covered outdoor seating. Open Wednesday through Sunday, 11 AM until sold out (usually 3-4 PM). The best strategy is to arrive by 10:30 AM on a weekend. They have a full bar with craft beer and cocktails, which is unusual for a BBQ joint and makes the wait more pleasant. Kid-friendly — the outdoor seating is casual and spacious. If you want world-class Austin BBQ without dedicating your entire morning to a line, this is the move.",
    link: "https://www.labarbecue.com",
    neighborhood: "East Austin",
    cost: "moderate",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "mueller-farmers-market",
    name: "Mueller Farmers Market (Sunday)",
    description: "Austin's best farmers market runs every Sunday from 10 AM to 2 PM in the Mueller development. It's a proper market — local farms selling seasonal produce, ranchers with grass-fed beef and pastured eggs, bakers with sourdough and pastries, plus prepared food vendors for immediate eating. The prepared food is the highlight for a weekend outing: wood-fired pizza, tamales, fresh pasta, Thai food, crepes, and more, all from vendors who take their food seriously. There's live music, a coffee vendor, and space to sit on the grass and eat. The market is well-organized with clear signage and a layout that flows well. Arrive by 10:30 AM for the best selection; the popular vendors (bread, pastries) can sell out by noon. Located in the Mueller development, so you can combine with a visit to Mueller Lake Park, the playground, or the Thinkery. Free parking in the Mueller lots. Dogs welcome (leashed). Stroller-navigable. It's genuinely community-building — you'll run into neighbors, kids will run around on the grass, and the food is good enough to make Sunday market a regular habit.",
    link: "https://www.texasfarmersmarket.org/mueller",
    neighborhood: "Mueller / Northeast Austin",
    cost: "moderate",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  // ============================================================
  // CULTURAL / UNIQUE EXPERIENCES
  // ============================================================
  {
    id: "texas-roller-derby",
    name: "Texas Roller Derby",
    description: "Austin is home to one of the original modern roller derby leagues, and the bouts are a genuinely thrilling spectator experience. The Texas Rollergirls play at various venues around Austin (check their schedule). Roller derby is a full-contact sport played on a flat oval track — two teams of five skaters each, with a 'jammer' trying to lap the opposing team while 'blockers' try to stop them. The action is fast, physical, and surprisingly strategic once you understand the rules. The league is good about explaining the rules to newcomers — announcements and programs break down what's happening. The crowd is enthusiastic and diverse — families, punks, sports fans, roller derby newcomers all mixed together. Ticket prices are usually $15-25. There's typically food trucks and a bar at the venue. The team names and skater names are part of the fun — creative, often punny, always spirited. Bouts usually happen on Saturdays, once or twice a month during the season (roughly March through September). Kid-friendly and a genuinely fun live sports experience that's unlike anything else in Austin.",
    link: "https://txrd.com",
    neighborhood: "Various Locations",
    cost: "moderate",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "canopy-art-tour",
    name: "Canopy Art Tour — First Saturday",
    description: "On the first Saturday of every month, Canopy — a large complex of artist studios in East Austin — opens its doors for a self-guided art tour. Over 50 working artists have studios in the converted industrial buildings, and during the open house they display their work, demonstrate their processes, and sell directly. You'll see painters, sculptors, ceramicists, printmakers, jewelers, metalworkers, and mixed-media artists. It's a rare chance to see where art is actually made and talk directly with the artists about their work. The quality ranges from emerging to established — some artists have gallery representation and museum exhibitions. The buildings are connected by courtyards with food trucks and sometimes live music. Free to attend. The walk-through takes 1-2 hours depending on how deeply you engage. Located on Springdale Road in East Austin. Parking in surrounding lots and streets. Kid-friendly — kids enjoy watching artists work and some studios have interactive elements. The first Saturday timing makes it easy to combine with other East Austin activities. One of Austin's best free cultural experiences and a genuine window into the city's art community.",
    link: "https://www.canopyaustin.com",
    neighborhood: "East Austin / Springdale",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "round-rock-express",
    name: "Round Rock Express Game",
    description: "Minor league baseball at Dell Diamond in Round Rock, about 20 minutes north of Austin. The Express are the Triple-A affiliate of the Texas Rangers, so the talent level is high — you're watching players one step below the majors. But the real draw is the experience: the stadium is beautiful, the tickets are cheap ($10-25 for good seats), and the atmosphere is family-friendly fun. There are theme nights, fireworks, dollar beer nights, and between-inning entertainment. The kids' area has a playground, bounce houses, and a splash pad in summer. Food is better than most minor league parks — local food trucks and vendors alongside the standard hot dogs. The lawn seating in the outfield is perfect for spreading a blanket and letting kids run around while you watch the game. Games are typically April through September, mostly evenings with some weekend day games. Parking is $10 in the lots around the stadium. This is the quintessential 'good time at a ballgame without spending $200' experience. Even non-baseball fans enjoy it for the atmosphere and value.",
    link: "https://www.milb.com/round-rock",
    neighborhood: "Round Rock (20 min north)",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "austin-fc",
    name: "Austin FC Soccer Game",
    description: "Austin's MLS team plays at Q2 Stadium in North Austin, and the atmosphere is electric. The supporter section (Los Verdes) brings drums, flags, chants, and non-stop energy for 90 minutes. Even if you're not a soccer fan, the matchday experience is impressive — 20,500 fans creating a wall of sound in a purpose-built stadium. The stadium was designed for soccer with steep seating that puts everyone close to the pitch. Concession options include local food vendors (Way South Philly, Patrizi's, Hopsquad) alongside standard stadium fare. Craft beer selection is solid. Tickets range from $25 for supporter section to $100+ for premium seats. The supporter section is standing-room-only and the most intense experience; family sections are elsewhere in the stadium with actual seats. Games are mostly Saturday evenings during the MLS season (March-October). The tailgate scene in the parking lots is lively — grills, music, Verde swag everywhere. Getting there early is key as traffic and parking can be challenging (consider rideshare or the shuttle from downtown). A genuinely thrilling live sports atmosphere.",
    link: "https://www.austinfc.com",
    neighborhood: "North Austin / Domain",
    cost: "moderate",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  }
];
