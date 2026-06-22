// Austin Weekend Guide — Activity Database
// Each activity follows the unified schema for both curated and future scraped events.
// Descriptions are 150-250 words capturing vibe, practical details, and what makes the place special.

const ACTIVITIES = [
  // ============================================================
  // WATER ACTIVITIES
  // ============================================================
  {
    id: "barton-springs",
    name: "Barton Springs Pool",
    description: "A three-acre natural spring-fed swimming pool in Zilker Park that stays a constant 68°F year-round. Fed by underground springs from the Edwards Aquifer, this pool has been a gathering spot for over a thousand years. The main pool is about 1,000 feet long and varies from a few inches to 18 feet deep. Lifeguards on duty. The south side is shallower and better for kids. There's a grassy hillside perfect for spreading out towels and having a picnic. The vibe is distinctly Austin — tattoos, dogs on leashes up on the hill, families, and college students all mixed together. Entry is $5 for adults, $3 for juniors/seniors, free for kids under 11. Opens at 5 AM for lap swimmers. Gets crowded on summer weekends by 11 AM — arrive early or come after 5 PM for the quieter evening session. Parking in Zilker fills up fast on weekends; consider biking or parking on Barton Springs Road and walking in.",
    link: "https://www.austintexas.gov/department/barton-springs-pool",
    neighborhood: "South Austin / Zilker",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "deep-eddy",
    name: "Deep Eddy Pool",
    description: "Austin's oldest swimming pool, fed by a natural spring and operating since 1915. Less crowded and more low-key than Barton Springs — a local favorite for people who want the spring-fed experience without the zoo. The main pool is a large rectangular lap pool kept at a refreshing temperature, plus there's a separate shallow wading pool that's perfect for toddlers and young kids. The vibe is chill and neighborhood-y — regulars come every morning, families spread out on the grass in the afternoons. Surrounded by mature pecan trees that provide actual shade, which is gold in Austin summers. There's a small concession stand. Entry is $5 for adults in summer, $3 off-season, free for kids under 11. Open year-round. The evening sessions in summer are magical — warm air, cool water, tree frogs singing. Street parking on Deep Eddy Avenue fills up but there's usually space within a block or two. Right next to Eilers Park which has a nice playground if the kids get bored of swimming.",
    link: "https://www.austintexas.gov/department/deep-eddy-pool",
    neighborhood: "West Austin",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "krause-springs",
    name: "Krause Springs",
    description: "A privately owned natural spring park about 30 miles west of Austin near Spicewood. There are 32 springs on the property feeding into a natural swimming hole surrounded by cypress trees draped with moss. It feels like stepping into a fairy tale — the kind of place where you half-expect to see elves. The main swimming area has a rope swing and a small waterfall. The water is cold and crystal clear. There's also a man-made pool if you want something more contained. The grounds are beautiful with walking paths through gardens and old-growth trees. You can camp overnight (tent sites with water and electric hookups). $9 per person for day use, $15 for camping. Cash or check only — no cards. Open daily from 9 AM to 8 PM in summer. Gets busy on hot weekends but never feels as packed as Barton Springs. Bring your own food and drinks, there's no concession stand. The drive out through the Hill Country is gorgeous, especially in spring when the wildflowers are out. Kid-friendly but no lifeguards, so watch your little ones.",
    link: "https://krausesprings.net",
    neighborhood: "Spicewood (30 min west)",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "ladybird-kayak",
    name: "Kayaking & Paddleboarding on Lady Bird Lake",
    description: "Lady Bird Lake (formerly Town Lake) runs right through downtown Austin and is one of the best urban paddling spots in Texas. No motorized boats allowed, so the water is calm and perfect for kayaks, paddleboards, and canoes. Several rental shops line the shore — Texas Rowing Center, Rowing Dock, and a few others. Single kayak rentals run about $15-20/hour, paddleboards similar. The lake is about 5 miles end to end so you can paddle for a while. You'll see turtles sunning on logs, herons fishing in the shallows, and the Austin skyline from the water. Early morning is best — glassy water, cooler temps, fewer people. Weekend afternoons get busy but it's still fun. Most rental places require kids to be at least 5-6 years old for kayaks. Bring sunscreen and water — there's no shade on the lake. The stretch near the Pfluger Pedestrian Bridge is especially scenic. If you've never paddleboarded before, the lake is perfect for learning — flat water, no current to speak of.",
    link: null,
    neighborhood: "Downtown / South Austin",
    cost: "moderate",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "san-marcos-tubing",
    name: "Float the River in San Marcos",
    description: "Tubing down the San Marcos River is a quintessential Texas summer experience. The river is spring-fed so the water stays a refreshing 72°F even in the worst of August. Several outfitters in San Marcos will rent you a tube ($15-25), shuttle you upstream, and you float back down over 2-3 hours. The river is mellow — no real rapids, just a gentle current that does the work for you. You'll float through beautiful pecan and cypress groves, past rope swings, and over shallow limestone stretches where you can see the bottom. Most outfitters allow cooler tubes so you can bring snacks and drinks. The Lions Club tube chute is a small dam that creates a fun little rapid — the highlight of the float for most people. Best to go during the week if you can; weekends in summer get packed with San Antonio and Austin crowds. San Marcos is about 45 minutes south of Austin. Don Julio's Mexican Restaurant in town is the traditional post-float meal. Not ideal for very young kids — wait until they can swim confidently.",
    link: null,
    neighborhood: "San Marcos (45 min south)",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },

  // ============================================================
  // OUTDOOR / COOL WEATHER
  // ============================================================
  {
    id: "zilker-park",
    name: "Zilker Park",
    description: "Austin's 350-acre crown jewel park sits right along Barton Creek and Lady Bird Lake. There's an enormous great lawn where people throw frisbees, fly kites, and spread out blankets. The Zilker Botanical Garden is tucked into the northeast corner and is worth a separate visit for the Japanese garden. The Zilker Eagle miniature train takes kids on a ride along the creek — a toddler favorite that returned in 2024 after a long closure. There are multiple playgrounds, including the big Zilker playground near the pool. The Barton Creek Greenbelt trailhead starts at the south end of the park, connecting to miles of hiking trails. On a nice Saturday, this park is Austin at its best — soccer games, drum circles, dog walkers, picnic blankets everywhere. Parking is the main challenge. The lot fills up fast on weekends; consider parking on Stratford Drive and walking in, or biking down the Butler Trail. During ACL Festival (October) and other events, portions of the park close to the public. The rest of the year it's wide open and free.",
    link: "https://www.austintexas.gov/department/zilker-metropolitan-park",
    neighborhood: "South Austin / Zilker",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "ladybird-trail",
    name: "Lady Bird Lake Hike & Bike Trail",
    description: "A roughly 10-mile loop trail that circles Lady Bird Lake right through the heart of downtown Austin. Paved the whole way, mostly flat, with gorgeous views of the skyline, the lake, and the bridges. The trail is used by runners, walkers, cyclists, stroller-pushers, and dog walkers — it's Austin's communal living room. The south shore section from Lamar to I-35 is the most scenic stretch, shaded by live oaks and running right along the water. The boardwalk section on the south side is a newer addition and it's stunning — elevated over the lake with dedicated pedestrian and cycling lanes. You don't have to do the whole loop; there are plenty of access points and bridges to cross back. Early morning is best for running; evenings are beautiful with the sunset over the water. The trail connects to the Pfluger Bridge, the Lamar pedestrian bridge, and multiple parks along the way. Free, open 24 hours, well-lit in most sections. This is probably the single thing that makes Austin livable in the heat — free access to 10 miles of lakeside trail.",
    link: null,
    neighborhood: "Downtown / South Austin",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "mt-bonnell",
    name: "Mount Bonnell",
    description: "At 775 feet, Mount Bonnell is one of the highest points in Austin and offers a panoramic view of the city, Lake Austin, and the Hill Country. The 'hike' is really a climb up about 100 limestone steps — short but steep. Takes about 5 minutes to get to the top. Once there, you're rewarded with one of the best views in the city. There are limestone outcroppings to sit on and a few benches. Popular spot for sunset watching and proposals (you'll see at least one couple taking photos every visit). The parking lot is tiny — maybe 15 spots — so go early on weekends or you'll be parking down the road. There's no water or restrooms at the top, so bring what you need. The steps are manageable for kids who can walk, but not stroller-friendly. Dogs welcome on leash. It's only about 15 minutes from downtown Austin. Free, open from 5 AM to 10 PM. Quick visit — most people spend 20-30 minutes at the top before heading back down. Pairs well with a meal at Hula Hut or Mozarts right down the hill on the lake.",
    link: null,
    neighborhood: "West Austin",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "south-congress",
    name: "Walk South Congress Avenue",
    description: "South Congress (SoCo) is Austin's most walkable strip of weird. About a mile of funky shops, food trailers, restaurants, and street art running south from the Congress Avenue Bridge. Highlights: Allen's Boots (massive cowboy boot shop), Uncommon Objects (vintage/antique wonderland), Jo's Coffee (famous 'I Love You So Much' mural), Home Slice Pizza, and a rotating cast of food trucks. The sidewalks are wide and browseable. On the first Thursday of every month, shops stay open late and the street has a festival atmosphere. During the day, the vibe is tourist-friendly but genuinely Austin — street musicians, eccentric shop owners, people wearing whatever they want. The strip is stroller-navigable and kid-friendly during the day (less so at night when the bars take over). Park in the lots off Mary or Monroe streets if you can't find street parking. Start at Jo's, walk south, eat lunch at Home Slice or Guero's, browse shops, and end with ice cream at Amy's. That's a solid 2-3 hour outing. Best on a cool day when walking is pleasant rather than a sweat-fest.",
    link: null,
    neighborhood: "South Austin",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "enchanted-rock",
    name: "Enchanted Rock State Natural Area",
    description: "A massive pink granite dome rising 425 feet above the surrounding Hill Country, about an hour and fifteen minutes west of Austin near Fredericksburg. The hike to the top of the main dome is steep but short — about 0.6 miles one way, doable in 30-40 minutes. The views from the top are extraordinary — 360 degrees of Hill Country rolling to the horizon. There are also longer trails (8+ miles of trails total) that loop around the base and explore the caves and smaller rock formations. On a clear night, the stargazing is phenomenal — minimal light pollution. The park is hugely popular and frequently hits capacity on weekends. You MUST make a reservation online ($8 per person, plus the day pass) before going, especially in spring and fall. Gates open at 6:30 AM and the early slot is the best — cooler temperatures, fewer people, magical morning light on the granite. Bring lots of water (no water available on the trails), sun protection, and proper shoes — the granite gets slippery. Kid-friendly for ages 5+ on the main dome trail. The town of Fredericksburg nearby has great German food and wine tasting if you want to make a day of it.",
    link: "https://tpwd.texas.gov/state-parks/enchanted-rock",
    neighborhood: "Fredericksburg (1.25 hrs west)",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "butler-pitch-putt",
    name: "Butler Pitch & Putt",
    description: "A charming 9-hole pitch and putt course right in the middle of Austin, next to Lady Bird Lake and Zilker Park. This isn't serious golf — it's casual, fun, and the kind of place where you bring a six-pack and take your time. The longest hole is about 100 yards. A round takes about an hour. Green fees are around $8 for adults, $4 for kids, club rentals available for a few bucks. The course is flat and easy to walk, fine for young kids and beginners. There's a small clubhouse with drinks and snacks. The setting is what makes it special — you're playing with the downtown skyline in the background and Lady Bird Lake just steps away. Perfect for a casual weekend morning or a low-key date. Pairs well with a walk on the hike and bike trail or a swim at Barton Springs, both of which are right there. Open year-round, first come first served. On nice weekend mornings there might be a short wait but it moves fast.",
    link: null,
    neighborhood: "South Austin / Zilker",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "pickleball-pan-am",
    name: "Pickleball at Pan American Park",
    description: "Pan American Park on East 3rd Street has dedicated pickleball courts that are free and open to the public. Austin's pickleball scene has exploded and this is one of the best public spots to play. Courts are first-come-first-served and the regulars are friendly — if you show up solo, you'll get absorbed into a game quickly. The skill range is wide, from beginners to serious players, so don't be intimidated. Bring your own paddle and balls, though someone usually has extras. Morning is the best time — by early afternoon in summer the courts are in full sun and it's brutal. The park also has a small playground and open green space. Free parking in the lot. If you've never played, pickleball is easy to pick up — it's like a smaller, slower tennis with a wiffle ball. The courts are well-maintained with good nets. East Austin location means you're near great tacos (Pueblo Viejo, Valentina's) for a post-game reward. Kids can play too — the smaller court and slower ball make it more accessible than tennis for younger players.",
    link: null,
    neighborhood: "East Austin",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },

  // ============================================================
  // INDOOR / HOT WEATHER
  // ============================================================
  {
    id: "alamo-drafthouse",
    name: "Alamo Drafthouse Cinema",
    description: "Austin's homegrown movie theater chain and one of the best cinema experiences in the country. The concept: full restaurant service at your seat during the movie. You order food and drinks from a menu on a clipboard, and servers deliver silently during the film. The food is way better than movie theater food has any right to be — proper burgers, pizzas, salads, plus themed menus for special screenings. They also serve a full bar including local craft beers. The thing that makes Alamo special beyond the food: they take the viewing experience seriously. Talking and texting get you kicked out — they've famously played angry voicemails from ejected customers before movies. They do creative programming beyond mainstream releases — quote-alongs, movie parties with props and callbacks, and classic film series. Multiple locations around Austin; the South Lamar original and the Mueller location are favorites. Ticket prices are similar to regular theaters ($12-15). Kid-friendly for appropriate movies, and they do special baby-friendly screenings ('Lil' Drafthouse') where the lights stay up and sound is lower. Hands-down the best way to see a movie in Austin.",
    link: "https://drafthouse.com/austin",
    neighborhood: "Multiple Locations",
    cost: "moderate",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "mesa-rim",
    name: "Mesa Rim Climbing Gym",
    description: "A large, modern indoor climbing gym on the east side of Austin. Bouldering walls (no ropes needed, thick crash pads below), top-rope and lead climbing walls, plus a dedicated kids' area. If you've never climbed before, bouldering is the easiest entry point — just shoes and chalk, try routes graded from V0 (easy) to V-impossible. Day passes are around $25 for adults, $18 for kids, shoe rentals available for $5. The gym is clean, well-maintained, and the route setters keep things fresh with new problems every few weeks. The community is welcoming — climbers are generally happy to share tips and cheer you on. There's also a weight room, yoga classes, and a stretching area. The kids' zone has age-appropriate walls and boulders that even toddlers can scramble on. Great for a hot day when you want physical activity but can't face the outdoor heat. The gym tends to be busiest on weekday evenings and Saturday mornings; Sunday mornings are usually mellow. Located near the airport, off 71.",
    link: "https://www.mesarim.com/austin",
    neighborhood: "East Austin",
    cost: "moderate",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "blanton-museum",
    name: "Blanton Museum of Art",
    description: "The largest university art museum in the country, located on the UT Austin campus. The permanent collection includes a strong Latin American art wing, Italian Renaissance paintings, and a growing contemporary collection. The standout piece is Ellsworth Kelly's 'Austin' — a freestanding 2,715 square-foot stone building with colored glass windows that floods the interior with stained-glass light. It's one of Austin's most beautiful spaces and worth the trip on its own. Admission is $12 for adults, $5 for students, free for UT students and kids under 12. Free on Thursdays. The museum is a manageable size — you can see everything in 90 minutes without rushing. There's a small café with decent coffee. The building itself is architecturally interesting, with a nice outdoor sculpture garden. Kid-friendliness depends on the kid — there's nothing hands-on for little ones, but the Kelly building is so visually striking that even toddlers react to the light. The air-conditioned galleries feel luxurious on a 105° day. Parking in the UT garage on MLK is the easiest option ($5-8).",
    link: "https://blantonmuseum.org",
    neighborhood: "UT Campus / Central",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "bullock-museum",
    name: "Bullock Texas State History Museum",
    description: "Three floors of Texas history from prehistoric times to the space program, located on Congress Avenue near the state capitol. The exhibits are well-designed and surprisingly engaging — not your dusty state museum. Highlights include the La Belle shipwreck (an actual 17th-century French ship pulled from Matagorda Bay), the oil boom exhibit with a full-scale drilling rig, and the Texas Revolution section. The first floor rotates special exhibits. There's also an IMAX theater and a 4D special effects theater — the IMAX alone is worth a visit if there's a good documentary playing. Admission is $13 for adults, $9 for kids 4-17, free for under 4. IMAX is extra ($10). Budget 2-3 hours for the museum, more if you do IMAX. The museum is very kid-friendly — interactive elements on every floor, and the Texas history content makes everything more interesting if your kid is old enough to care about cowboys and oil rigs. Air-conditioned, of course. Parking in the garage next door or along surrounding streets. Right next to the Capitol, so you can combine the visits.",
    link: "https://www.thestoryoftexas.com",
    neighborhood: "Downtown",
    cost: "moderate",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "austin-central-library",
    name: "Austin Central Library",
    description: "Even if you have zero interest in borrowing a book, the Austin Central Library on Cesar Chavez is worth visiting as a building. Opened in 2017, it's an architectural stunner — six stories of glass, steel, and concrete with a living green roof and a rooftop garden with panoramic views of Lady Bird Lake and downtown. The interior features a massive open atrium, a butterfly-pattern screen that filters light beautifully, and an art gallery. The children's section on the lower floors is exceptional — spacious, colorful, with reading nooks and interactive areas. There's a café on the ground floor. Free maker spaces, community rooms, and event spaces throughout. The rooftop is open to the public and has some of the best free views in Austin — bring a book and sit up there for an hour. Completely free to visit. Parking in the garage below is $2/hour, usually easy to find a spot. Open 7 days a week. It's air-conditioned perfection on a hot day, and genuinely one of the most beautiful public buildings in Texas. Great for kids — they can roam the children's section while you read upstairs.",
    link: "https://library.austintexas.gov/central-library",
    neighborhood: "Downtown",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "cidercade",
    name: "Cidercade Austin",
    description: "An arcade bar from Bishop Cider Co. with over 200 vintage and modern arcade games, all set to free play with your admission. Pay $12 at the door (free for kids under 8 with a paying adult) and play unlimited games — everything from Pac-Man and Street Fighter to skee-ball, pinball, and modern indie games. They also have a full bar with Bishop's craft ciders on tap (the crackberry is the crowd favorite) plus beer and cocktails. The space is huge — a converted warehouse with high ceilings, loud music, and an energetic vibe. Friday and Saturday nights skew 21+ and party; weekend afternoons are more family-friendly. There's outdoor seating and food trucks outside. The games are well-maintained, which isn't always the case at arcade bars. If you grew up in the '80s or '90s, the nostalgia hit is real. Great for dates, friend groups, or taking kids who are old enough to work an arcade cabinet. Located in the Burnet Road area. Gets loud and crowded on weekend evenings so go earlier if you want a mellower experience.",
    link: "https://www.cidercade.com/austin",
    neighborhood: "North Austin / Burnet",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },

  // ============================================================
  // FOOD & DRINK
  // ============================================================
  {
    id: "jester-king",
    name: "Jester King Brewery",
    description: "A farmhouse brewery on a 165-acre ranch in the Hill Country, about 25 minutes southwest of downtown Austin. Jester King specializes in wild ales and farmhouse-style beers fermented with wild yeast — their Atrial Rubicite (sour with raspberries) is world-class. But you don't have to be a beer nerd to enjoy it. The real draw is the setting: sprawling grounds with picnic tables under live oaks, a pizza kitchen turning out excellent wood-fired pies, lawn games (cornhole, giant Jenga), and a goat pen that kids love. There's also Stanley's Farmhouse Pizza on-site. The vibe is deeply relaxed — families, dogs, groups of friends all spreading out across the property. Live music some weekends. They're open Friday through Sunday only. You'll want to arrive early on Saturdays as it gets packed by early afternoon. Parking is in a big gravel lot. The beer is pricier than your typical brewery ($7-12 per glass) but the experience is worth it. One of the few Austin spots that feels like you've left the city entirely. Seasonal fruit beers rotate and are worth trying whatever's current.",
    link: "https://jesterkingbrewery.com",
    neighborhood: "Southwest Austin / Hill Country",
    cost: "moderate",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "lazarus-brewing",
    name: "Lazarus Brewing",
    description: "A family-friendly brewery on East 6th Street (the chill part, not the party part) with an excellent taproom, great tacos, and a shaded outdoor playground. This is the Austin brewery that actually works for families — the playground is right next to the patio so you can see your kids while you drink a beer. The beer selection leans creative — they do solid IPAs, lagers, and rotating specials. The on-site kitchen serves tacos, quesadillas, and snacks that are genuinely good, not afterthought pub food. The atmosphere is East Austin casual — artists, young families, folks working on laptops. There's also a second location on Airport Blvd. with a similar setup including a playground. Indoor and outdoor seating. Open daily. The East 6th location is walking distance from a lot of East Austin's best food and shops. Weekend afternoons are the sweet spot for families — busy enough to be lively but not so packed that finding a table is a problem. Happy hour during the week is a good deal. Dog-friendly patio.",
    link: "https://www.lazarusbrewing.com",
    neighborhood: "East Austin",
    cost: "moderate",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },

  // ============================================================
  // EVENING ACTIVITIES
  // ============================================================
  {
    id: "congress-bats",
    name: "Congress Avenue Bridge Bat Watching",
    description: "Every evening from March through October, roughly 1.5 million Mexican free-tailed bats emerge from under the Congress Avenue Bridge in a massive swirling cloud. It's one of the largest urban bat colonies in North America and it's completely free to watch. The bats fly out at sunset to feed on insects, and the emergence takes 20-45 minutes depending on the colony size. August is peak season — the baby bats have grown enough to fly, so the colony is at its largest. Get there 30-60 minutes before sunset to find a spot. You can watch from the bridge itself (north side gives the best view), from the lawn on the south shore, or from a kayak on the lake below. The Statesman Bat Observation Center on the south shore has viewing platforms. It's a genuinely spectacular natural event — the sheer number of bats streaming out is mesmerizing. Bring bug spray. The bridge area can smell a bit batty (literally) if the wind is wrong. Kids love it, though some very young ones might be scared by the volume of bats. Free. Parking along surrounding streets or in nearby garages.",
    link: null,
    neighborhood: "Downtown",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "broken-spoke",
    name: "The Broken Spoke",
    description: "Austin's legendary honky-tonk, operating since 1964. This is the real deal — a low-slung cinder block building on South Lamar that looks like it hasn't changed since LBJ was president (it hasn't, much). Live country and western music every night, with a dance floor that's seen more two-stepping than maybe any floor in Texas. The dance floor is wooden, scuffed, and perfect. They offer dance lessons early in the evening (usually 8-9 PM) so you don't have to know what you're doing. The crowd is a genuine mix — old-timers who've been coming for decades, college kids, tourists, and everyone in between. There's a small museum room in the back with photos of every country music legend who's played there (George Strait, Willie Nelson, Dolly Parton, the list goes on). Cover charge varies ($7-15 depending on the act). Drinks are cheap, service is quick, and the chicken-fried steak from the attached restaurant is exactly what you'd hope it would be. Not really a kid venue — go after bedtime. This is Austin at its most authentically Texan.",
    link: "https://www.brokenspokeaustintx.net",
    neighborhood: "South Lamar",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "skylark-lounge",
    name: "Skylark Lounge",
    description: "A dive bar on Airport Blvd that's one of Austin's best-kept secrets for live music. The Skylark specializes in blues, soul, funk, and jazz — the kinds of music that Austin's indie-rock reputation sometimes overshadows. The room is small and intimate, maybe 50 people at capacity, which means you're always close to the musicians. The bands are consistently good — local working musicians who can really play. No cover most nights, which is increasingly rare in Austin. Drinks are cheap and strong. The décor is vintage lounge — Christmas lights, dark wood, red vinyl booths. It feels like a place that time forgot in the best possible way. The crowd tends to be slightly older and more laid-back than the Red River music scene — people who actually came to listen. Open late. Free parking lot next to the bar. Not a kid venue. If you're the kind of person who thinks Austin's music scene peaked with Stevie Ray Vaughan, the Skylark is where you'll feel most at home. Check their social media for the weekly lineup.",
    link: null,
    neighborhood: "East Austin / Airport Blvd",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },

  // ============================================================
  // KID-FOCUSED
  // ============================================================
  {
    id: "mueller-lake-park",
    name: "Mueller Lake Park & Playground",
    description: "A beautiful urban park in the Mueller development (the old airport redevelopment area) in northeast Austin. The park wraps around a small lake and has two distinct playground areas. The main playground near the lake is large and modern with climbing structures, slides, and swings for a range of ages. There's also a separate nature-themed playground on the north side that's more adventurous — logs to climb on, boulders, sand areas. The lake itself has a paved walking trail around it (about a mile loop), and there's a splash pad that runs in summer. The surrounding Mueller development has shops, restaurants, and an Alamo Drafthouse within walking distance, so you can combine a playground trip with lunch. The Thinkery (Austin's children's museum) is right next door. Mueller has a farmers' market on Sundays that's one of the best in Austin. Free, with parking in the lots along Aldrich Street. The park is well-maintained and feels safe — lots of families, well-lit, clean. A good default 'what should we do Saturday morning' answer.",
    link: null,
    neighborhood: "Mueller / Northeast Austin",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "meanwhile-brewing",
    name: "Meanwhile Brewing",
    description: "A brewery and outdoor gathering space in Southeast Austin (Manchaca area) that was practically designed for families with young kids. The highlight is the enormous outdoor area — a huge grassy field with picnic tables, string lights, lawn games, and a dedicated fenced playground that's visible from the patio. You can sit with a beer and watch your kids play. The beer is solid — a range of styles from light lagers to IPAs, all brewed on-site. Food trucks rotate and are usually good. There's also a coffee bar for the non-drinkers. Live music some weekends on their outdoor stage. The vibe is 'backyard hangout with better beer and more space.' Dogs are welcome and there are always a dozen running around. Opens early on weekends. The playground has equipment for toddlers through grade-schoolers. Parking in their lot, which is big enough that you'll usually find a spot. Not fancy, not trying to be — just a great space for families to hang out on a weekend afternoon. Close to South Austin hiking trails if you want to combine activities.",
    link: "https://www.meanwhilebeer.com",
    neighborhood: "South Austin / Manchaca",
    cost: "moderate",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },

  // ============================================================
  // ENTERTAINMENT / GAMES
  // ============================================================
  {
    id: "vigilante",
    name: "Vigilante Bar & Board Game Lounge",
    description: "A board game bar in East Austin with a library of over 800 games — everything from Settlers of Catan to obscure indie gems you've never heard of. Pay a small table fee ($5-6 per person) and play as many games as you want. The staff are knowledgeable gamers who can recommend games based on your group size, skill level, and what you're in the mood for. Food and drink menu is better than it needs to be — craft cocktails, local beers, and a food menu with solid sandwiches and snacks. The space is dimly lit with a cozy, nerdy atmosphere. Gets busy on Friday and Saturday evenings so consider reserving a table. Two locations — the original on East 6th and a second spot on South Lamar. Great for groups, dates, or solo visits (they have a community table for pickup games). Weekend afternoons are the best time for families with kids — the vibe is more relaxed and there are plenty of kid-appropriate games. The game library is the star — well-organized, with everything from 5-minute party games to 3-hour strategy epics.",
    link: "https://www.vigilantebar.com",
    neighborhood: "East Austin / South Lamar",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "topgolf",
    name: "Topgolf Austin",
    description: "The driving range reimagined as a social entertainment venue. If you've never been: think bowling alley meets golf range. You get a climate-controlled hitting bay with comfy seating, order food and drinks to your bay, and hit microchipped golf balls at targets on the range for points. You don't need to be good at golf — the games are designed so a first-timer and an experienced golfer can compete and both have fun. Bays are rented by the hour ($30-50/hour depending on time, split among your group). The food is decent sports-bar fare and the drink menu is full. There's a rooftop bar with great views. Multiple levels, with the top level being the most fun (longer shots). Located near the Domain in North Austin. Gets very busy on weekend evenings — book ahead. Daytime weekends are more manageable. Kids are welcome during the day and they have shorter clubs for younger players. It's loud, bright, and high-energy. Not for purists who want a quiet golf experience, but perfect for groups who want to socialize with a golf-flavored activity.",
    link: "https://topgolf.com/us/austin/",
    neighborhood: "North Austin / Domain",
    cost: "moderate",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  }
];
