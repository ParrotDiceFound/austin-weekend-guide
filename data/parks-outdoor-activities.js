// Austin Weekend Guide — Parks, Playgrounds, Trails, Pools, Disc Golf & Outdoor Activities
// Ready to merge into activities.js

const PARKS_OUTDOOR_ACTIVITIES = [
  // ============================================================
  // PARKS WITH NOTABLE PLAYGROUNDS
  // ============================================================
  {
    id: "pease-park",
    name: "Pease Park — Kingsbury Commons",
    description: "An 84-acre park just west of downtown that underwent a $15 million renovation completed in 2021, transforming Kingsbury Commons into one of Austin's best family destinations. The centerpiece is the Treescape — a two-level, roughly 40-foot diameter steel observation pod designed by Mell Lawrence Architects that brings you up into the tree canopy on a rope net. Kids lose their minds over it. The playground has wooden climbing structures, a life-size chess board, and inclusive design features including wheelchair-accessible pathways. There's a splash pad that runs May through October (free, 8 AM to 9 PM), a basketball court, an outdoor amphitheater, and the restored historic Tudor Cottage. The park runs along Shoal Creek with walking trails winding through mature pecan trees. Weekday mornings are quiet and shady; weekend mornings get busy with families. Free parking on Kingsbury Street and along Parkway, though spots fill fast on nice weekends. The park stretches far beyond Kingsbury Commons into wilder, less-developed areas along the creek — good for a longer walk after playground time. Austin Chronicle readers voted it Best Playground in 2024.",
    link: "https://peasepark.org/",
    neighborhood: "Central Austin / Old West Austin",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "mayfield-park",
    name: "Mayfield Park & Nature Preserve",
    description: "A compact, peaceful west Austin park built around a historic cottage, two acres of gardens, lily ponds, and a flock of free-roaming peafowl. The peacocks are the immediate draw for young kids — they wander through the grounds, perch on walls, and occasionally fan out their feathers — but the setting is worth the visit even when the birds are keeping a low profile. Beyond the formal gardens, the surrounding 21-acre preserve has short nature trails through the woods toward Lake Austin. The garden area is easy to explore with a toddler; the preserve trails are better with a carrier than a stroller. Admission is free and the park is open daily from 5 AM to 10 PM. Dogs and emotional-support animals are not allowed because the park is a wildlife sanctuary. Parking inside the gate is limited, with overflow street parking along West 35th Street. The best version of the outing is a slow morning wander followed by Laguna Gloria next door, which turns the same trip into a longer art-and-nature morning. This is not a playground park or an all-day destination. It is a reliable one-hour reset when you want somewhere beautiful, low-key, and distinctly Austin.",
    link: "https://www.austintexas.gov/parks/locations/mayfield-park",
    neighborhood: "West Austin / Lake Austin",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "bartholomew-park",
    name: "Bartholomew District Park",
    description: "A 57-acre park in Windsor Park that packs more amenities per acre than almost anywhere in Austin. The pool complex is the star — a recreational pool (3-12 feet), a separate wading pool for toddlers, an activity pool with zero-depth entry, two water slides, and shade structures. The pool is free, which makes it one of Austin's best-kept summer secrets. The playground has wheelchair-accessible playhouses and full-support swings. There's also a splash pad on the Berkman Drive side of the park (open May through October). Beyond the water features: a roller skating rink, baseball fields, basketball courts, tennis courts, and picnic areas with grills. The park also hosts one of the oldest disc golf courses in Texas — a 9-hole layout that's beginner-friendly and shaded. The whole complex has a neighborhood feel — regulars who come every weekend, kids running between activities, families grilling. Ample free parking. The Mueller development and its restaurants are a short drive away, making it easy to combine with lunch. Less crowded than Zilker or Barton Springs and arguably more kid-friendly.",
    link: "https://www.austintexas.gov/department/bartholomew-pool",
    neighborhood: "Windsor Park / Northeast Austin",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "circle-c-playground",
    name: "Circle C Metropolitan Park — Playground & Trails",
    description: "Circle C Metro Park in far southwest Austin recently got a fantastic playground renovation with two separate playscapes — one designed for younger kids (2-5) and one for older children — with soft, squishy ground surface that's easy on toddler tumbles. The highlight that sets it apart: a musical garden with drums and a xylophone that kids can actually play, plus a gravel pit, climbing structures, swings, and a ground-level merry-go-round. Beyond the playground, the park has 5.9 miles of paved and unpaved trails winding through the Slaughter Creek greenbelt, two basketball courts, two sand volleyball courts, seven soccer fields, and picnic areas with restrooms. It's also home to a serious 21-hole disc golf course (see separate entry). The park feels like it's at the edge of the Hill Country — more trees, more wildlife, and less crowded than parks closer to downtown. Parking in the lot on the west side near the restrooms. The drive from central Austin takes 20-25 minutes but the trade-off is space and quiet. Great for families who want to spend a whole morning outdoors without the Zilker crowds.",
    link: null,
    neighborhood: "Southwest Austin / Circle C",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "walnut-creek-park",
    name: "Walnut Creek Metropolitan Park",
    description: "A 293-acre park in northeast Austin that's become one of the city's best multi-use outdoor spaces. The playground was recently renovated with accessible play structures for all ages, including a fast slide that big kids love and smaller structures for toddlers. The park's signature feature is its first official Nature Play Space — the Fairy Pavilion, repurposed from a Lady Bird Johnson Wildflower Center Fortlandia exhibit, where kids can explore natural materials and open-ended play. But the real draw for many visitors is 15 miles of trails through thick forest with limestone canyons and creek crossings. The trails are popular with mountain bikers (ranging from beginner green circles to expert black diamonds), trail runners, and hikers. There's a 3.5-mile paved connector trail running north to Balcones District Park if you want a longer walk or ride. The park also has softball fields, a swimming pool, basketball courts, and picnic areas with BBQ pits. Plenty of shade year-round thanks to the dense tree cover. Free parking in the lot off North Lamar. One of the few large Austin parks where you can hike for an hour and barely see anyone.",
    link: null,
    neighborhood: "Northeast Austin",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "ramsey-park",
    name: "Ramsey Park",
    description: "A five-acre neighborhood park in the heart of the Rosedale neighborhood — the kind of park that makes you want to live on its block. Playground equipment for both toddlers and older children, two basketball courts, two tennis courts, picnic tables, BBQ pits, and a multipurpose field. Ramsey Pool sits in the southeast corner and is a neighborhood favorite for cooling off in summer. The vibe is quintessential Austin neighborhood — dogs, strollers, kids on bikes, people reading on blankets. It's small enough to feel safe and enclosed but big enough for kids to run. Mature live oak trees provide genuine shade, which matters when it's 102 outside. The surrounding Rosedale neighborhood is walkable with coffee shops and restaurants on Burnet Road a few blocks away. Street parking along 42nd Street, Rosedale Avenue, and the surrounding blocks. Not a destination park — more of a 'we need to get out of the house for an hour' park that reliably delivers a good morning. Close to Brentwood Park if you want to park-hop and let the kids compare playgrounds.",
    link: null,
    neighborhood: "Rosedale / Central Austin",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "mary-moore-searight-park",
    name: "Mary Moore Searight Metropolitan Park",
    description: "A sprawling 300-acre park in south Austin that feels like an escape from the city without the drive to the Hill Country. The 2.1-mile outer loop trail winds through oak and juniper forest — mostly shaded, easy terrain, popular with trail runners and dog walkers. Inner trails connect to create longer routes, and there are designated horseback riding trails if you're so inclined. The 18-hole disc golf course weaves through the wooded sections and offers technical challenges for experienced players while staying approachable for beginners — a dedicated volunteer crew keeps it in excellent shape. The playground near the main parking lot is basic but functional. Additional amenities include two basketball courts, two tennis courts, two volleyball courts, a soccer field, a fishing pier on a small pond, and plenty of picnic areas with BBQ pits. The park is less busy than Zilker or the Greenbelt, especially on weekday mornings. Good for combining a morning hike with disc golf or letting the kids play while you fish. Free parking in the main lot. Open dawn to dusk.",
    link: null,
    neighborhood: "South Austin / Slaughter Lane",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "bull-creek-park",
    name: "Bull Creek District Park",
    description: "A greenbelt park in northwest Austin built around Bull Creek, which carves through limestone creating swimming holes, small waterfalls, and shaded pools. The main swimming area near the parking lot has shallow, wadeable sections perfect for toddlers and deeper pools where older kids and adults can swim. After rain, the creek fills up and a small waterfall forms that kids love playing under. The Inga Van Nynatten Memorial Trail runs along the creek through the greenbelt — a mix of paved and natural surface paths good for a family walk or more serious trail running. There's a playground near the parking area with swings and climbing structures, plus picnic tables and grills. The park also functions as one of the only leash-free dog areas in northwest Austin, so expect plenty of dogs. Parking lot at 6701 Lakewood Drive fills up on hot weekend afternoons. The creek is seasonal — after a dry spell it can be just puddles, but after rain it's gorgeous. The water quality can vary after heavy storms, so use judgment. A genuine hidden gem that many central Austin residents don't know about.",
    link: null,
    neighborhood: "Northwest Austin",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "beverly-sheffield-park",
    name: "Beverly S. Sheffield Northwest District Park",
    description: "A large, well-equipped district park at 7000 Ardath Street in northwest Austin with something for every age. Multiple playgrounds are spread throughout the park, each designed for different age groups — toddler structures, bigger kid climbing and slides, swings. There's a municipal swimming pool, baseball field, basketball courts, tennis courts, a small pond, and the Great Northern Dam Off-Leash Dog Area. The park has a more suburban feel than the central Austin parks — wide open spaces, ample parking, less crowded. Good for families with kids of mixed ages because you can station yourself in the middle and let everyone scatter to their preferred activity. The pool is a solid neighborhood pool with summer hours and affordable entry. The walking paths through the park connect to the surrounding neighborhood. Picnic tables and shade structures make it viable even on warmer days. It's not going to show up on any 'best of Austin' list, but it's the kind of reliable, clean, spacious park that makes a weekday morning with toddlers genuinely pleasant. Free parking lot.",
    link: null,
    neighborhood: "Northwest Austin",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },

  // ============================================================
  // HIKING TRAILS
  // ============================================================
  {
    id: "greenbelt-twin-falls",
    name: "Barton Creek Greenbelt — Twin Falls",
    description: "Twin Falls is one of the most accessible swimming holes on the Barton Creek Greenbelt, making it the best entry point for families and casual hikers. From the main access point at 3755-B Capital of Texas Highway (Loop 360), it's a 10-15 minute hike down to the falls — a double stream of water pouring over limestone ledges into a shallow pool. The trail is well-worn and relatively easy, though it does involve some rock scrambling near the water. When the creek is flowing (best 2-4 days after rain), it's a magical spot — clear water, limestone cliffs, tall cypress trees. When it's dry, you get an interesting rocky creek bed to explore but no swimming. The Loop 360 parking lot is large but fills up fast on summer weekends — arrive before 10 AM or you'll be parking on the shoulder. Dogs are everywhere, mostly off-leash. You can continue past Twin Falls another 1.25 miles to reach Sculpture Falls (deeper swimming hole, bigger waterfall) for a 3.2-mile round trip. Free. The Greenbelt stretches over 12 miles total with multiple access points if you want to explore further.",
    link: "https://www.austintexas.gov/department/barton-creek-greenbelt",
    neighborhood: "South Austin / Zilker",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "greenbelt-sculpture-falls",
    name: "Barton Creek Greenbelt — Sculpture Falls",
    description: "Sculpture Falls is the premier swimming hole on the Barton Creek Greenbelt — a wide, deep pool beneath a beautiful limestone waterfall, surrounded by towering cypress trees and carved rock formations that give the falls their name. The water is clear and cool (around 70 degrees F in summer). It's deeper and more dramatic than Twin Falls, making it better for actual swimming rather than just wading. The most direct access is from the Trail's End / Camp Craft Road trailhead at 1712 Camp Craft Road, which brings you in via the infamous Hill of Life — a steep 300-foot descent in half a mile (which means a steep climb back out). From the Loop 360 trailhead, it's about 1.6 miles each way with the Twin Falls stop along the route. The trail has rocky sections and some scrambling, so sturdy shoes are a must. Like all Greenbelt swimming holes, water levels are rainfall-dependent — check conditions before going. Best after a few good rains. Weekend mornings before 10 AM offer the most peaceful experience. Street parking at Camp Craft is limited to about 20 spots. Free access.",
    link: "https://www.austintexas.gov/department/barton-creek-greenbelt",
    neighborhood: "West Austin / Barton Hills",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "greenbelt-gus-fruh",
    name: "Barton Creek Greenbelt — Gus Fruh Access",
    description: "The Gus Fruh access point on the Barton Creek Greenbelt is where Austin's rock climbing community gathers. The approach from the Barton Hills Drive parking area is a moderate 15-20 minute hike that leads to shaded limestone cliffs along the creek — ideal for both bouldering and sport climbing. Routes range from beginner-friendly V0-V2 boulder problems to demanding V11 problems and 5.10 to 5.11 sport routes. Even if you don't climb, this is one of the most scenic stretches of the Greenbelt — tall limestone walls, a swimming hole at the base of the cliffs, and heavy tree canopy providing shade. The Texas Climbers Coalition maintains the hardware on the walls. When the creek is flowing, you can cool off between climbs. Bring your own gear — there are no rentals nearby. The area includes several distinct walls: Gus Fruh's first wall, Myth Wall, Kingdom of Ging, Rubber Wall, and the Guide's Wall. Free access. Limited street parking on Barton Hills Drive. Not especially kid-friendly due to steep terrain near the cliffs, but older kids who are comfortable scrambling will enjoy it.",
    link: null,
    neighborhood: "Barton Hills / South Austin",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "mckinney-falls",
    name: "McKinney Falls State Park",
    description: "A 640-acre state park just 13 miles southeast of downtown Austin that feels remarkably wild for being inside the city limits. Onion Creek flows 1.7 miles through the park, creating two waterfalls: Lower McKinney Falls (shallower, great for young kids wading) and Upper McKinney Falls (deeper, better for swimming). Nearly nine miles of trails wind through wooded Hill Country terrain — the Rock Shelter Trail (0.6 miles, easy) and the Homestead Trail (with ruins of an 1850s stone homestead) are the highlights. Most trails are relatively flat with some uneven terrain and creek crossings. You can also mountain bike, road bike, fish, and geocache. The park has 81 campsites with electric and water hookups if you want to make it an overnight trip. Entry is $6 per person (13+), free for kids 12 and under. Gates open 8 AM to 10 PM. The park hits capacity on weekends and holidays — make a reservation online ahead of time, especially in spring and fall. The creek can flood after heavy rainfall, so check conditions before going for a swim. Pairs well with a stop at nearby restaurants on William Cannon or Slaughter Lane.",
    link: "https://tpwd.texas.gov/state-parks/mckinney-falls",
    neighborhood: "Southeast Austin",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "wild-basin",
    name: "Wild Basin Wilderness Preserve",
    description: "Austin's first nature preserve (established 1976), tucked off Loop 360 in west Austin. Managed by St. Edward's University, Wild Basin offers nearly three miles of trails through undeveloped Hill Country terrain — a rare thing this close to the city. Four trail options range from the short Arroyo Vista loop (0.6 miles with a scenic overlook) to the Yaupon Loop (almost 2 miles, crossing Bee Creek along the preserve's southern border). The Creek Loop (1.5 miles) includes creek crossings and is the most interesting for kids who like scrambling. The Ledge Trail (0.8 miles) follows a natural limestone outcrop. The preserve feels genuinely wild — you might spot golden-cheeked warblers, white-tailed deer, or armadillos. Rules are strict to protect the ecosystem: no pets, no bikes, no picnics, no collecting. Weekend and holiday visits require a hiking pass reservation (book online or call 512-327-7622), good for up to three hours. Weekday visits don't require reservations. The trailhead has a small visitor center. Great for a quiet morning hike when you want nature without the Greenbelt crowds. Parking in the small lot off Loop 360.",
    link: "https://www.stedwards.edu/academics/centers-institutes-arts/wild-basin/visit",
    neighborhood: "West Austin / 360 Corridor",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "st-edwards-park",
    name: "St. Edward's Park",
    description: "An 80-acre park on Bull Creek in northwest Austin that offers two distinct hiking experiences. The Creek Trail is a family-friendly 2-mile round trip out-and-back along the quieter section of Bull Creek, with views of sheer rock faces, swimming holes, turtles, and fish visible in the clear water. Multiple side paths lead down to the creek for wading and exploring. The Hill Trail crosses Bull Creek and climbs to the highest point in the park — more strenuous, more solitude, more of a workout. When the creek is running, there's a small waterfall and a rope swing at one of the swimming holes. The trails wind through mature cedar and oak forest with excellent shade. Open 5 AM to 10 PM. From Highway 360, take Spicewood Springs Road west about two miles to the parking area, which holds roughly 15 cars — arrive early on weekends. Free. The park has a local, non-touristy feel — mostly neighborhood hikers and their dogs. Good for families with kids who are comfortable on uneven terrain (not stroller-friendly). The creek is seasonal and rainfall-dependent. When it's flowing, this is one of the most beautiful spots in Austin.",
    link: null,
    neighborhood: "Northwest Austin / Spicewood Springs",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "river-place-trail",
    name: "River Place Nature Trail",
    description: "The most challenging trail system inside Austin city limits, located in the River Place Limited District in northwest Austin. Three connected trails — Panther Hollow (short, shady), Canyon Trail (long, hilly), and Little Fern Trail — combine for about 6 miles round trip with over 800 feet of elevation gain. The Canyon Trail has the steepest incline near the city, with thousands of rock stairs carved into the hillside. It's a genuine workout. The payoff is views of the Hill Country and Lake Austin that you won't get anywhere else without leaving town. The trails wind through dense cedar and oak forest with creek crossings and exposed limestone. Hiking is free Monday through Friday, but there's a $10 fee on weekends and holidays (paid at the trailhead). Trail hours are dawn to dusk. Park on the street near the trailhead at 8820 Big View Drive — there's no parking lot, just about 30 roadside spots. Dogs allowed on leash. Not a kid trail unless your kids are experienced hikers — the elevation changes and rocky terrain are real. Best in cooler months or early morning. Bring plenty of water; there's no water available on the trail.",
    link: "https://www.riverplacelimiteddistrict.org/trails",
    neighborhood: "Northwest Austin / River Place",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "turkey-creek-trail",
    name: "Turkey Creek Trail at Emma Long Park",
    description: "A beautiful 2.7-mile trail adjacent to Emma Long Metropolitan Park that winds along a narrow creek through limestone canyons with 6-8 creek crossings. The trail is moderate difficulty with about 190 feet of elevation gain and takes 1-1.5 hours to complete. What makes Turkey Creek special is the creek crossings — you're criss-crossing shallow water over limestone the entire hike, which kids (and dogs) love. The limestone cliffs along the creek are striking, and the canopy provides good shade. The Turkey Creek trailhead is located before the Emma Long Park entrance booth, so the trail itself is free — you only pay the park entrance fee ($5 weekdays, $10 weekends/holidays) if you continue into Emma Long for swimming or picnicking on Lake Austin. About 30 parking spots at the trailhead off City Park Road. Dogs welcome off-leash. No restrooms at the trailhead. The trail can be muddy and slippery after rain — the creek crossings become more adventurous. Wear shoes you don't mind getting wet. From central Austin, take FM 2222 west past Loop 360, turn left on City Park Road. About 20 minutes from downtown.",
    link: null,
    neighborhood: "West Austin / Lake Austin",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "commons-ford-ranch",
    name: "Commons Ford Ranch Metropolitan Park",
    description: "A hidden gem on the shores of Lake Austin with a surprisingly diverse landscape — restored native prairie with wildflowers, a limestone canyon with waterfalls, and a chaparral section, all in one park. The Commons Ford Waterfall Trail (1.9 miles, 134 feet elevation gain) takes you up a canyon along Commons Ford Creek to a beautiful set of falls. The shorter lake trail leads to a swimming area on Lake Austin's shoreline that locals know as one of the city's most peaceful swimming spots — clean water, no crowds, surprising for how close it is to Austin. There's also a boat ramp, a fishing pier, and picnic areas with BBQ pits. Several historic ranch buildings remain from the original Resaca Ranch, adding character. The park is open 5 AM to 10 PM, free admission. Facilities are basic — portable toilets near the visitor center, no running water. Pets must be leashed. The park is at 614 Commons Ford Ranch Road, about 20 minutes from downtown. The wildflowers in the prairie section are spectacular in spring. This is a park that rewards exploration — most visitors don't venture past the main picnic area, but the trails and canyon are worth the walk.",
    link: "https://www.austintexas.gov/department/commons-ford-ranch",
    neighborhood: "West Austin / Lake Austin",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },

  // ============================================================
  // PUBLIC POOLS & SPLASH PADS
  // ============================================================
  {
    id: "garrison-pool",
    name: "Garrison Pool",
    description: "A full-size municipal pool in south Austin at 6001 Manchaca Road with a 50-meter recreational pool (3-12 feet deep, two lap lanes), a separate wading pool for toddlers, and a diving board. This is one of Austin's larger public pools and one of the most affordable — $3 for adults, $1-2 for kids and seniors (residents), with slightly higher non-resident rates. The pool has picnic tables, changing areas, and outdoor showers. The surrounding Garrison District Park adds basketball courts, a playground, and open green space. The vibe is classic Austin neighborhood pool — families, lap swimmers, kids cannonballing off the diving board. Less discovered than Barton Springs or Deep Eddy, which means shorter waits and more room to spread out. Summer hours typically run June through August; check the city's aquatics schedule for exact dates since they vary year to year depending on lifeguard staffing. Morning lap swim sessions are usually available. Good shade trees around the pool deck. Parking in the park lot. If you live in south Austin, this is your go-to summer spot.",
    link: "https://www.austintexas.gov/department/garrison-pool",
    neighborhood: "South Austin / Manchaca",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "big-stacy-pool",
    name: "Big Stacy Pool",
    description: "A free spring-fed neighborhood pool at 700 East Live Oak Street in Travis Heights, one of the last truly no-cost swimming options in central Austin. The pool is on the smaller side — more of a neighborhood dipping pool than a lap swimming facility — but the water is spring-fed and refreshing. It's surrounded by a grassy area with some shade trees where you can spread a towel. The Travis Heights neighborhood is one of Austin's most charming, and the pool reflects that — low-key, local, a place where neighbors catch up while their kids paddle. There's no concession stand or extensive facilities, just the pool and some basic amenities. Open seasonally in summer. Little Stacy Park nearby has a separate wading pool (also free) that's better for very young kids — it's a shallow, small pool designed specifically for toddlers with summer hours Monday through Saturday, 1-8 PM, closed Wednesdays. Both pools are within walking distance of South Congress restaurants and shops. Street parking on Live Oak and surrounding streets. Come in the late afternoon when the sun has warmed the water and the shade from the trees starts to extend over the pool deck.",
    link: "https://www.austintexas.gov/department/big-stacy-pool",
    neighborhood: "Travis Heights / South Austin",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "bartholomew-pool-splashpad",
    name: "Bartholomew Pool & Splash Pad",
    description: "Bartholomew Pool is one of the most feature-rich public pools in Austin and it's free. The complex at 1800 East 51st Street includes a recreational pool (3-11.5 feet), an activity pool with zero-depth entry that's perfect for toddlers just learning to be in water, and a separate wading pool. Two water slides add excitement for older kids. Shade structures over parts of the pool area keep things manageable even in peak summer. ADA accessible with a chair lift and accessible stairs. Lockers, showers, and changing rooms available. The separate Bartholomew Splash Pad is on the Berkman Drive side of the park (5201 Berkman Drive) and operates May through October — a free, no-fuss splash pad that toddlers can spend an hour at while you sit on a bench. The pool typically operates on summer hours with potential year-round limited hours; check the city aquatics schedule. Free parking in the spacious lot. The Windsor Park neighborhood location means it draws a diverse, family-heavy crowd. Combine with the adjacent playground, roller skating rink, and disc golf for a full day.",
    link: "https://www.austintexas.gov/department/bartholomew-pool",
    neighborhood: "Windsor Park / Northeast Austin",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "liz-carpenter-splash-pad",
    name: "Liz Carpenter Fountain at Butler Park",
    description: "The best splash pad in Austin, hands down — and it's free. Located in Butler Metro Park at 1000 Barton Springs Road, the Liz Carpenter Fountain features water jets arranged in a circular pattern that shoot in fun, unpredictable sequences that kids chase endlessly. Large interlocking blocks sit in the water area that kids can rearrange and stack, adding a creative/constructive element you won't find at other splash pads. Open 9 AM to 10 PM daily, year-round — it's one of the only splash pads in Austin that runs through winter on warm days. At night, the fountain does a light show that's worth seeing. Plenty of benches and some shade around the perimeter. The surrounding Butler Park has ponds, walking paths, and a labyrinth. Lady Bird Lake's hike and bike trail is right there. The Austin skyline views from the park are excellent. This is 100 yards from the Long Center, making it easy to combine with a performance. Parking in the Butler Park lot or along Riverside Drive. On a summer Saturday afternoon this place is packed with toddlers in swimsuits — arrive by mid-morning for the best experience. A perfect 'it's 100 degrees, what do we do' answer.",
    link: "https://www.austintexas.gov/department/liz-carpenter-splash-pad",
    neighborhood: "South Austin / Zilker",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "pease-splash-pad",
    name: "Pease Park Splash Pad",
    description: "An interactive water feature built as part of Pease Park's $15 million Kingsbury Commons renovation. The splash pad operates May through October, 8 AM to 9 PM, and it's free. Water jets spray from the ground in patterns that kids can run through and play in — it's not as elaborate as Liz Carpenter's fountain, but it's integrated into one of Austin's best playground spaces, which makes it incredibly convenient. Let the kids climb the Treescape observation pod, then cool off in the splash pad, then hit the playground again — that cycle can fill an entire morning. The splash pad area has some bench seating nearby for parents. The Kingsbury Commons area around it includes the chess board, basketball court, and amphitheater. The park's mature pecan trees provide shade for the surrounding lawn where you can spread a blanket. Street parking on Kingsbury Street and Parkway. The combination of the renovated playground, splash pad, and shaded creek trails makes Pease Park one of the most complete family morning outings in Austin. Best for ages 1-8 who want the playground-splash pad combo.",
    link: "https://www.austintexas.gov/department/pease-splash-pad",
    neighborhood: "Central Austin / Old West Austin",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },

  // ============================================================
  // DISC GOLF COURSES
  // ============================================================
  {
    id: "roy-g-guerrero-disc-golf",
    name: "Roy G. Guerrero Disc Golf Course",
    description: "The crown jewel of Austin disc golf — an 18-hole course rated 4.7/5 stars from nearly 7,000 community reviews on UDisc, making it one of the highest-rated courses in Texas. Located at Roy G. Guerrero Colorado River Metro Park just east of downtown, the course was redesigned by Mike Olse and reopened in May 2023. Each hole has dual tees — the amateur tees and pro tees aren't just different distances, they're placed at entirely different locations, essentially giving you two courses in one. The difficulty is rated 'Hard,' with a typical round taking about 2 hours and covering 2.8 miles. The course has restrooms, drinking water, and is cart-friendly. The park itself sits along the Colorado River with nice views and shade. Free to play. The parking lot can fill on weekend mornings when leagues are running. The adjacent Little G course (also at Roy G. Guerrero) offers a shorter, less intimidating option for beginners or casual play. If you play one disc golf course in Austin, this is it. Bring water — the course is exposed in sections and Austin heat is no joke.",
    link: "https://udisc.com/courses/roy-g-guerrero-dgc-aKOV",
    neighborhood: "East Austin / Riverside",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "circle-c-disc-golf",
    name: "Circle C Metropolitan Park Disc Golf Course",
    description: "A 21-hole course recognized by the Professional Disc Golf Association in southwest Austin's Circle C Metropolitan Park. The course offers tremendous shot variety with varied terrain, lots of trees, and a few hills — it's considered very challenging, so bring your A game. Two concrete tees per hole, tee signage with accurate distances at every position, practice baskets, and a driving range make this feel like a proper disc golf facility rather than an afterthought in a park. The course weaves through the Slaughter Creek greenbelt, so you're playing through woods and along the creek. Free to play. The park's 5.9 miles of trails, playground, and sports fields mean you can combine disc golf with other activities for a full family morning (one parent golfs, the other hits the playground). Restrooms and drinking water available near the western parking lot. The drive from central Austin is 20-25 minutes, but the course quality is worth it. Weekend mornings see regular groups; arrive early if you want to avoid waiting on holes. Dogs welcome on leash. One of the best courses in the city for intermediate to advanced players.",
    link: "https://udisc.com/courses/circle-c-metro-park-AKZL",
    neighborhood: "Southwest Austin / Circle C",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "zilker-disc-golf",
    name: "Zilker Park Disc Golf Course",
    description: "An 18-hole course right in the heart of Zilker Park — the most convenient disc golf option in Austin if you're coming from downtown or south Austin. The front 9 holes are short and approachable; the back 9 open up with longer throws. Mostly flat with no more than 40 feet of elevation change across the entire course, lightly wooded. The original 9 holes were installed in 1987, and the course was recently renovated with new baskets on all 18 holes, informational kiosks, tee signs with accurate distances, and mulch on large portions of the course. A typical round takes 1-2 hours. Free to play, but parking in Zilker costs $5 on weekends (March through September) — or park under the highway for free and walk in. The location means you can combine disc golf with Barton Springs, the Zilker playground, Butler Pitch & Putt, or the botanical garden for a full Zilker day. The course gets busy on nice weekend afternoons when the park is packed. Early morning rounds are the move — fewer people and cooler temperatures. Good for beginners and casual players; the flat terrain is forgiving.",
    link: "https://udisc.com/courses/zilker-park-dgc-RxQm",
    neighborhood: "South Austin / Zilker",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "mary-moore-disc-golf",
    name: "Mary Moore Searight Disc Golf Course",
    description: "An 18-hole disc golf course winding through the wooded sections of Mary Moore Searight Metropolitan Park in south Austin. The course offers a good balance of technical challenges — tight fairways through oak and juniper forest — while remaining approachable for intermediate players. A dedicated volunteer crew maintains the course in excellent condition. The wooded setting provides more shade than Roy G. Guerrero or Zilker, making this the better hot-weather disc golf option. The course integrates with the park's 2.1-mile outer loop hiking trail, so you get a nature walk built into your round. Free to play. The park's other amenities — playground, fishing pier, basketball courts, picnic areas — make it a good family destination where one person can disc golf while others do their own thing. The south Austin location (near Slaughter Lane) means less traffic than the central Austin courses. Free parking in the main lot. Bring your own discs — there's no pro shop nearby. Water and restrooms available at the park. A solid choice for players who want a shaded, uncrowded round without driving to the far suburbs.",
    link: null,
    neighborhood: "South Austin / Slaughter Lane",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },

  // ============================================================
  // OTHER OUTDOOR ACTIVITIES
  // ============================================================
  {
    id: "austin-nature-science-center",
    name: "Austin Nature & Science Center",
    description: "A free nature center tucked into the northwest corner of Zilker Park, surrounded by the Zilker Nature Preserve. Established in 1960, it offers hands-on exhibits about Central Texas wildlife and natural history. Inside, the Naturalist's Workshop has a Trade Counter where kids can trade natural objects (rocks, feathers, fossils) for points and other specimens — a concept that captivates kids far longer than you'd expect. Outdoor exhibits include live native animals (hawks, owls, snakes, turtles) that can't be returned to the wild. The Dino Pit is an outdoor fossil dig where kids excavate replica dinosaur bones from sand. The adjacent Zilker Nature Preserve offers on-your-own hiking with trailheads ranging from easy to 'Steep & Rugged.' Hours are Monday-Saturday 9 AM-5 PM, Sunday 12-5 PM. Parking in the lot across from the entrance on Stratford Drive, just under Mopac. The combination of free indoor exhibits, live animals, fossil digging, and hiking trails makes this one of the best values in Austin for families. Works rain or shine — the indoor exhibits are good enough to carry a rainy morning. Best for ages 2-10.",
    link: "https://www.austintexas.gov/ansc",
    neighborhood: "South Austin / Zilker",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "veloway",
    name: "The Veloway",
    description: "A 3.1-mile paved loop in Circle C Ranch Metropolitan Park designed exclusively for bicycles and inline skates — no pedestrians, no cars, no dogs. Built in the early 1990s, it was the first facility of its kind in the United States. The 23-foot-wide track traverses natural Hill Country terrain with a mix of hills, flats, curves, and long straightaways. Traffic flows one way (clockwise), with fast riders on the left and slower riders on the right. It's perfect for kids learning to ride bikes — no vehicle traffic to worry about, no pedestrians to dodge, a predictable loop they can ride as many times as they want. Also great for adult cyclists who want a quick, focused ride without dealing with Austin traffic. E-bikes and power wheelchairs are welcome. There are covered benches, bike racks, and portable restrooms. The surface is well-maintained asphalt. Free to use. Parking in the lot off Slaughter Creek Drive. The surrounding Circle C park adds disc golf, trails, and a playground if you want to extend the outing. Early morning rides are best — the loop is mostly exposed, so summer afternoons are brutal.",
    link: "https://www.austintexas.gov/department/veloway",
    neighborhood: "Southwest Austin / Circle C",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "east-metro-fishing",
    name: "Neighborhood Fishin' — East Metropolitan Park",
    description: "Bullfrog Pond and Kingfisher Lake at Travis County's East Metropolitan Park are stocked regularly by Texas Parks and Wildlife as part of the Neighborhood Fishin' program. Catfish are stocked every two weeks from spring through fall, and rainbow trout are stocked in winter months. The program is designed to make fishing accessible and successful for beginners and kids — you'll actually catch fish here, which is the whole point when you're teaching a 4-year-old. The park has a fantastic fishing pier that's accessible, plus a large shaded pavilion near the pond with picnic tables — perfect for packing lunch and making a morning of it. Bathrooms on site. A Texas fishing license is required for anyone over 17 (but not needed in state parks, and children don't need one). Basic fishing tackle is all you need — a rod, some bait, and patience. The park is in east Austin, easy to reach from Highway 183. Free entry, free parking. Other community fishing lakes in the program include Mueller Lake and Walter E. Long Lake. If you want to introduce a kid to fishing with a high probability of actually catching something, this is the spot.",
    link: null,
    neighborhood: "East Austin",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "walter-e-long-lake",
    name: "Walter E. Long Metropolitan Park",
    description: "A 1,147-acre park built around Decker Lake (officially Walter E. Long Lake) in far east Austin. The lake holds catfish, sunfish, largemouth bass, and hybrid striped bass — it's a legitimate fishing destination, not just a neighborhood pond. Bank fishing is available from multiple spots around the lake, and there's a boat ramp if you have a kayak, canoe, or motorized boat. The park has picnic tables, BBQ grills, a swimming beach area, and wide open grassy spaces for running around. Entry is $5 per vehicle on weekdays, $10 on weekends. The park feels vast and uncrowded — 1,147 acres means you can spread out. The eastern Austin location means fewer visitors from the central/west Austin crowd, which keeps it peaceful. Great for a morning of fishing followed by a lakeside picnic. The swimming area is a sandy beach section of the lake — not as clean or clear as the spring-fed options, but fun for kids who just want to splash. The drive from downtown is about 20 minutes east on 969. Bring your own gear for fishing — no rental facilities on site.",
    link: null,
    neighborhood: "East Austin / Decker Lane",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "barton-springs-bike-rental",
    name: "Barton Springs Bike Rental & Tours",
    description: "Austin's original bike rental shop, founded in 2009, located near Zilker Park. They rent traditional bikes and electric bikes by the hour or the day, with the e-bikes being the standout option — they make the Lady Bird Lake loop genuinely enjoyable regardless of fitness level and turn a potentially sweaty slog into a breezy ride. The staff will set you up with a bike, give you a map, and suggest routes based on how long you want to ride and what you want to see. The obvious route is the Lady Bird Lake Hike & Bike Trail loop (roughly 10 miles) which is flat, paved, and scenic. For something more ambitious, they can point you toward the Southern Walnut Creek Trail or routes through East Austin. Rentals include a lock and helmet. Prices vary by bike type — standard bikes are cheaper, e-bikes run more. Located at a convenient launching point for the trail system. They also offer guided tours of downtown and South Austin if you want a more structured experience. Open daily. Reservation recommended on weekends but walk-ins usually accommodated. Ages 16+ for e-bikes; standard bikes available for older kids.",
    link: null,
    neighborhood: "South Austin / Zilker",
    cost: "moderate",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "emma-long-park",
    name: "Emma Long Metropolitan Park",
    description: "Austin's oldest city park sits on the shores of Lake Austin in the hills west of the city. The main draw is the swim beach on the lake — a sandy-bottomed swimming area with clear water, picnic tables under shade trees, and a grassy area for spreading out. It's a proper lake day spot — bring a cooler, set up camp, swim all afternoon. There's also a boat ramp for kayaks, canoes, and motorized boats. The park covers 1,100 acres of Hill Country terrain with hiking trails through cedar and oak forest. The Turkey Creek Trail (see separate entry) starts just outside the park entrance. Camping sites are available for overnight stays. Entry is $5 Monday through Thursday, $10 on weekends and holidays per vehicle. Gates open 7 AM to 10 PM. The park is about 20 minutes from downtown via FM 2222 and City Park Road — the drive through the hills is scenic. The swimming area gets crowded on hot summer weekends; arrive by mid-morning for a good spot. Lifeguards are not guaranteed — swim at your own risk. Bring everything you need; there's a small concession but selection is limited.",
    link: null,
    neighborhood: "West Austin / Lake Austin",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "zilker-botanical-garden",
    name: "Zilker Botanical Garden",
    description: "A 26-acre garden tucked into the northeast corner of Zilker Park featuring themed gardens, a prehistoric garden with dinosaur tracks, and some of the most peaceful paths in central Austin. The Japanese Garden is the highlight — a meticulously maintained space with koi ponds, stone bridges, and bamboo groves that feels transported from Kyoto. The Hartman Prehistoric Garden has a recreated cretaceous landscape with actual dinosaur footprints preserved in limestone — fascinating for kids interested in paleontology. The Rose Garden, Herb Garden, and seasonal butterfly trail round out the experience. Entry is $5 for adults, $3 for seniors, $2 for kids 3-12, free for under 3. Open daily 9 AM to 6 PM (last entry at 5:30 PM). The gardens are manageable in about 60-90 minutes and the paths are mostly paved and stroller-friendly. Less crowded on weekday mornings. There's a small gift shop. Parking is in the Zilker Park lots — the garden has its own entrance off Barton Springs Road. The gardens are beautiful year-round but peak in spring (March-May) when the roses and wildflowers are blooming. A quiet, contemplative alternative to Zilker's high-energy playground scene.",
    link: "https://www.austintexas.gov/department/zilker-botanical-garden",
    neighborhood: "South Austin / Zilker",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "mueller-splash-pad",
    name: "Mueller Lake Park Splash Pad",
    description: "A free splash pad in the Mueller Lake Park development that operates during summer months, adding a water element to what's already one of Austin's best family park destinations. The splash pad sits near the lake and playground areas, making it easy to rotate between activities — playground, splash pad, walk around the lake, repeat. The water features include ground-level jets and spray elements sized right for toddlers and young kids. The surrounding Mueller Lake Park has a paved mile-long loop trail around the lake, two distinct playgrounds (the main modern one near the lake and a nature-themed one on the north side with logs, boulders, and sand), and the Thinkery children's museum next door. The Mueller Farmers' Market runs on Sundays and is one of the best in Austin. Aldrich Street shops and restaurants are within walking distance, including an Alamo Drafthouse. Free parking in the lots along Aldrich Street. The whole Mueller development was designed with families in mind and it shows — clean, well-maintained, walkable, with a good density of things to do. The splash pad is a bonus that turns a good morning out into a great one on hot days.",
    link: null,
    neighborhood: "Mueller / Northeast Austin",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "ladybird-johnson-wildflower-center",
    name: "Lady Bird Johnson Wildflower Center",
    description: "A 284-acre botanical garden and research center dedicated to native plants, located in southwest Austin. Founded by Lady Bird Johnson in 1982, it's simultaneously a serious research institution and a gorgeous place to spend a morning. The grounds feature curated native plant gardens, wildflower meadows, a restored savanna, nature trails through undeveloped Hill Country, and architecturally beautiful buildings with stone courtyards and a central cistern. The Fortlandia exhibit (seasonal) builds creative forts from natural materials that kids can explore. The children's garden has hands-on activities, a mud kitchen, and water features. Spring (March-May) is peak season when the wildflowers are in full bloom and the meadows are covered in bluebonnets, Indian paintbrush, and black-eyed Susans. Admission is $12 for adults, $5 for kids 5-17, free for kids under 5. Hours are 9 AM to 5 PM, Tuesday through Sunday (closed Mondays). The cafe serves decent lunch. About 20 minutes south of downtown off La Crosse Avenue. Plenty of parking. A 2-3 hour visit is typical. The trails through the natural areas offer quiet Hill Country hiking that most visitors skip — don't.",
    link: "https://www.wildflower.org",
    neighborhood: "Southwest Austin",
    cost: "moderate",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "mills-pond",
    name: "Mills Pond",
    description: "A quiet neighborhood pond in far east Austin that's a local favorite for easy bank fishing and peaceful morning walks. The pond has a fishing pier (accessible), walking trails around the perimeter, and a floating boat dock that welcomes non-motorized boats — bring a kayak or canoe if you have one. The pond holds mostly catfish and has been stocked with rainbow trout during winter months as part of the Neighborhood Fishin' program. It's also dog-friendly on leash. The vibe is suburban and peaceful — this isn't a destination park, it's the kind of place where neighbors come to fish at sunrise and families walk after dinner. The surrounding Mills Pond neighborhood is quiet residential. Basic amenities — parking area, the pier, some benches. No restrooms, no concession. Free. What makes it worth including: it's one of the easiest, most accessible fishing spots in Austin for young kids. Short walk from the car to the pier, fish are stocked and relatively eager to bite, and the setting is calm enough that a toddler with a rod can focus. Combine with a trip to nearby Bartholomew Park for a full morning.",
    link: null,
    neighborhood: "East Austin",
    cost: "free",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
  {
    id: "sprinkle-valley-disc-golf",
    name: "Sprinkle Valley Disc Golf at Austin Beerworks",
    description: "A unique disc golf and brewery combo — an 18-hole course at the Austin Beerworks Sprinkle Valley Complex, built in partnership with Mint Discs who runs a retail shop on site. The course is rated 'Very Hard' with a typical round taking about 3 hours over 2.8 miles, making it one of the most challenging courses in the Austin area. This is a private course, not a city park — $5 per day for unlimited play, free for kids under 16. Course hours are daily 10 AM to 6 PM. The real appeal is the combination: play 18 holes of serious disc golf, then walk into Austin Beerworks for a craft beer. Mint Discs' retail store on site means you can buy or replace discs without making a separate trip. The course offers restrooms, drinking water, and is pet-friendly. Beerworks hours extend later (Mon-Sat 11 AM-10 PM, Sunday 11 AM-8 PM) so you can finish a round and still have plenty of time for post-game beers. Not as well-known as Roy G. Guerrero, so wait times are shorter. A good option for disc golfers who want a challenge and a reward at the end.",
    link: "https://udisc.com/courses/sprinkle-valley-disc-golf-course-aLoL",
    neighborhood: "North Austin",
    cost: "cheap",
    eventDate: null, venue: null, source: "curated", sourceUrl: null
  },
];
