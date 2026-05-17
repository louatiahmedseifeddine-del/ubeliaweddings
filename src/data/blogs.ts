export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  seed: string;
  excerpt: string;
  body: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'meet-ubelia',
    title: 'Meet Ubelia: The Vision Behind the Wedding House',
    subtitle: 'A passion for detail, a love for love',
    category: 'Our Story',
    date: 'March 10, 2025',
    readTime: '5 min read',
    seed: 'blog-ubelia',
    excerpt:
      'Ubelia was not built in a boardroom — it was built in the margins of a wedding journal, sketched between fabric swatches and calligraphy practice sheets.',
    body: [
      'Ubelia was not built in a boardroom — it was built in the margins of a wedding journal, sketched between fabric swatches and calligraphy practice sheets. From the very first consultation, the philosophy was simple: every couple deserves a wedding day that feels entirely, irreversibly theirs.',
      'With over a decade of experience in luxury wedding planning and bespoke stationery design across the United States, Ubelia has guided hundreds of couples through the most intricate and emotional creative process of their lives. The expertise spans from the grandiose — venue curation, full ceremony direction, vendor coordination — to the exquisitely small: the weight of a paper stock, the kerning of a monogram, the exact shade of gold ink that catches candlelight.',
      '"I realized early on," says the founder, "that what couples truly needed was not just a planner or a shop — they needed a creative partner who understood the difference between a wedding that is beautiful and a wedding that is unforgettable. Those are two very different things."',
      'The Ubelia approach is rooted in what the team calls the Three Pillars: Intention, Craftsmanship, and Emotion. Every product in the collection — from digital invitation suites to comprehensive planning guides — is developed with these pillars in mind. Nothing ships until it earns its place.',
      'Today, Ubelia serves couples across all 50 states, with a special focus on destination weddings in the American South, the Pacific Coast, and New England. The bespoke design service (sur mesure) remains the heart of the house — a white-glove experience where a dedicated designer works one-on-one with the couple from initial mood board to final, print-ready files.',
      'Whether you are just beginning to dream or deep in the details, Ubelia is here — not just as a vendor, but as a devoted collaborator in the story you are about to tell.',
    ],
  },
  {
    slug: 'tips-to-save-on-your-wedding',
    title: '10 Smart Ways to Save on Your Wedding Without Sacrificing Beauty',
    subtitle: 'Elegance and budget are not opposites',
    category: 'Planning Tips',
    date: 'March 14, 2025',
    readTime: '7 min read',
    seed: 'blog-save',
    excerpt:
      'The average American wedding now costs over $30,000 — but stunning celebrations happen every day at a fraction of that figure. The secret is not compromise; it is strategy.',
    body: [
      'The average American wedding now costs over $30,000 — but stunning celebrations happen every day at a fraction of that figure. The secret is not compromise; it is strategy. Here are ten tried-and-true approaches that Ubelia recommends to every couple navigating a budget.',
      'Prioritize ruthlessly. Decide early which two or three elements matter most to you — photography, florals, food — and allocate generously there. Let the rest flex.',
      'Choose an off-peak date. Friday evenings and Sunday afternoons book at significantly lower venue rates than a Saturday in June. A January or February wedding can save you 20–40% on almost every vendor.',
      'Digital invitations done right. A beautifully designed digital suite from Ubelia delivers the same visual impact as letterpress at a fraction of the cost — and your guests receive it instantly.',
      'Limit the guest list. This is the single most powerful lever you have. Every guest you add multiplies across catering, seating, favors, and invitations. An intimate celebration of 60 is often more meaningful — and vastly less expensive — than a room of 200.',
      'Hire emerging photographers. A second-year wedding photographer building their portfolio will often shoot your entire day for the price of a senior photographer\'s half-day rate. Review portfolios carefully and trust your instincts.',
      'Use greenery over blooms. Lush eucalyptus, ferns, and olive branches create dramatic tablescapes at a third the cost of floral-heavy arrangements. Pair with a few statement flowers and the result is chic, not cheap.',
      'DIY the day-of stationery. Menus, place cards, and ceremony programs are easy to produce at home with a quality printer and our downloadable templates. Save the splurge for the invitation your guests will keep.',
      'Simplify the cake. A stunning single-tier cake for cutting photos, supplemented by a sheet cake in the kitchen for serving, looks identical to guests and costs a quarter of the price.',
      'Negotiate a package. Venues, caterers, and florists all prefer to bundle. Ask directly: "What would you include if we booked X, Y, and Z together?" The answer may surprise you.',
      'Use our planning guides. The Ubelia Planning Collection walks you through every budget category with worksheets, vendor questionnaires, and negotiation scripts — so you spend less time guessing and more time celebrating.',
    ],
  },
  {
    slug: 'top-wedding-venues-us',
    title: 'The 8 Most Breathtaking Wedding Venues Across the United States',
    subtitle: 'From Pacific cliffside to Southern magnolias',
    category: 'Venues',
    date: 'March 17, 2025',
    readTime: '6 min read',
    seed: 'blog-venues',
    excerpt:
      "America's landscape is one of the world's great wedding backdrops. Whether you dream of crashing Pacific waves or firefly-lit Southern gardens, there is a venue made for your story.",
    body: [
      "America's landscape is one of the world's great wedding backdrops. Whether you dream of crashing Pacific waves or firefly-lit Southern gardens, there is a venue made for your story. Here are eight settings that consistently take our breath away.",
      'The Inn at Little Washington, Virginia. Nestled in the foothills of the Blue Ridge Mountains, this Relais & Chateaux property is pure romance — award-winning cuisine, gardens designed for golden-hour photography, and an intimacy that makes guests feel they have stepped into a private estate.',
      'Sunstone Winery, Santa Ynez Valley, California. Provencal-style stone architecture, working vineyards, and the soft light of the California wine country. Ceremonies held in the barrel room feel like something from a European dream.',
      "The Biltmore Estate, Asheville, North Carolina. America's largest private home offers something genuinely rare: grandeur at scale. Thousands of acres, formal French gardens, and architecture that demands a gown worthy of it.",
      "Oheka Castle, Long Island, New York. Built in 1919 and meticulously restored, Oheka is the second-largest private residence ever built in the US. The formal gardens and ballroom have hosted royalty — and they are waiting for you.",
      'Hulakai, Kauai, Hawaii. For the couple who wants sand between their toes and stars overhead: this private beachfront estate on the north shore of Kauai is the definition of barefoot luxury.',
      'Dunton Hot Springs, Colorado. An entire 19th-century ghost town — authentically restored — deep in the San Juan Mountains. Guests stay in log cabins, soak in natural hot springs, and gather around campfires under some of the darkest, starriest skies in North America.',
      'The Greenbrier, White Sulphur Springs, West Virginia. One of the great American resort traditions, with a history stretching back to 1778. The bold Dorothy Draper interiors — grand scale, vivid color — make every photograph look like a fashion editorial.',
      'Palmetto Bluff, Bluffton, South Carolina. Lowcountry perfection: Spanish-moss canopies, tidal rivers, a working chapel, and a village-scale resort that guests will never want to leave. It is the American South at its most intoxicating.',
    ],
  },
  {
    slug: 'wedding-trends-2025',
    title: 'The Wedding Trends Defining American Celebrations in 2025',
    subtitle: 'What couples are choosing — and why it matters',
    category: 'Trends',
    date: 'March 20, 2025',
    readTime: '5 min read',
    seed: 'blog-trends',
    excerpt:
      '2025 is the year American weddings broke free from the formula. After years of cookie-cutter celebrations, couples are asserting personality, meaning, and genuine originality in every detail.',
    body: [
      '2025 is the year American weddings broke free from the formula. After years of cookie-cutter celebrations, couples are asserting personality, meaning, and genuine originality in every detail. Here is what is defining the season.',
      "Intimate guest counts, elevated experiences. The micro-wedding is no longer a budget compromise — it is a deliberate choice. Couples are inviting 30 to 60 of their closest people and redirecting the savings into extraordinary food, exceptional wine, and unforgettable entertainment. The result is a party that actually feels like a party.",
      "Warm, earthy palettes. Goodbye to blush and grey. The dominant palette this year runs through terracotta, burnt sienna, deep sage, antique ivory, and — Ubelia's perennial favorite — champagne gold. These tones photograph beautifully in natural light and age well in albums.",
      'Statement florals, sculptural installations. Arrangements have grown architectural. Couples are investing in one or two dramatic floral installations — a suspended arrangement above the dance floor, a ceremony arch that functions almost as a room — rather than spreading modest budgets across dozens of small centerpieces.',
      'Non-traditional venues. Art galleries, private farms, working wineries, and historic libraries are all surging in popularity. Couples want a backdrop that tells something true about who they are, not a generic banquet hall dressed to look like something else.',
      'Heirloom stationery with a modern edge. There is a strong return to tactile, paper-forward invitations — but with contemporary typography, unexpected paper colors, and wax seals in non-traditional palettes. Our custom suites are currently booking 6 to 9 months in advance for this reason.',
      'Food as the centerpiece. Interactive stations, chef-driven tasting menus, and late-night snack moments — from Korean fried chicken to local charcuterie — have overtaken the traditional plated dinner at the majority of the celebrations we work on.',
      'Personal ceremony rituals. Unity ceremonies, handfasting, the reading of private letters, and multilingual vows honoring family heritage are replacing scripted, anonymous ceremony formats. Couples want guests to leave knowing something real about them.',
    ],
  },
  {
    slug: 'how-to-write-wedding-vows',
    title: 'How to Write Wedding Vows That Will Move Everyone in the Room',
    subtitle: 'A practical guide to the words that matter most',
    category: 'Ceremony',
    date: 'March 22, 2025',
    readTime: '8 min read',
    seed: 'blog-vows',
    excerpt:
      'Your vows are the only part of your wedding that is entirely, non-negotiably yours. No vendor touches them. No budget constrains them. They are the most powerful two minutes of your day.',
    body: [
      'Your vows are the only part of your wedding that is entirely, non-negotiably yours. No vendor touches them. No budget constrains them. They are the most powerful two minutes of your day — and for most couples, the hardest to write. Here is how to do it well.',
      'Start with reflection, not writing. Before you touch a keyboard or a pen, spend time thinking. What is one story that only the two of you know? What did you notice the first time you realized this was real? What is something your partner does that you have never told them moves you? Write down raw answers — not vow language, just notes. This is where the material lives.',
      'Give yourself a structure. Freeform vows often ramble. A simple three-part structure works beautifully: a specific memory or observation about your partner, a declaration of what you are promising today, and a closing line that looks forward. Two to three minutes when spoken aloud is ideal — roughly 300 to 400 words.',
      "Be specific, not grand. \"I promise to love you forever\" is true, but it is also forgettable. \"I promise to always let you have the window seat, even though I know I'll regret it\" is true and memorable. Specific details make guests laugh, cry, and lean forward. Generalities make them check their phones.",
      'Read them aloud early and often. Vows that look perfect on paper can be impossible to deliver through tears. Read them aloud to yourself — in the car, in the shower — until the words feel like yours and not like a performance. Familiarity is your best tool against nerves.',
      'Do not try to be funny and moving simultaneously. Pick a tone and commit. A vow that attempts to land a joke and then pivot to sincere emotion usually achieves neither. If you are a funny person, write funny vows. If you are a tender person, write tender vows. Your partner fell in love with who you actually are.',
      'Write separately, share the morning of. Most officiants and couples choose not to share vows in advance — the surprise in your partner\'s eyes as you speak is irreplaceable. Trust the process. If you wrote from a real place, what you say will land.',
      'Carry a printed copy. Even if you have memorized every word, hold a printed copy at the altar. It is not a crutch — it is insurance. Nerves, tears, and the weight of the moment have derailed even the most prepared speakers. Give yourself the grace of a safety net.',
    ],
  },
];
