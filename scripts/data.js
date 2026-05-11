// Concourse - mock data layer
// (In a real product this would live behind an API.)

window.CONCOURSE_DATA = {
  venues: [
    {
      id: 'v01',
      name: 'The Ashford',
      city: 'Charleston, SC',
      region: 'south',
      type: 'boutique',
      capacity: 240,
      sqft: 3800,
      rate: 11500,
      rating: 4.9,
      tag: 'Editor pick',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=70',
      summary: 'A heritage carriage house turned event property, two blocks from the historic district.'
    },
    {
      id: 'v02',
      name: 'Halcyon Park Hotel',
      city: 'Austin, TX',
      region: 'south',
      type: 'lifestyle',
      capacity: 600,
      sqft: 8200,
      rate: 22400,
      rating: 4.7,
      tag: null,
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=70',
      summary: 'Floor-to-ceiling glass ballroom overlooking Lady Bird Lake.'
    },
    {
      id: 'v03',
      name: 'Mariner & Mast',
      city: 'Portland, ME',
      region: 'northeast',
      type: 'boutique',
      capacity: 180,
      sqft: 2900,
      rate: 8400,
      rating: 4.8,
      tag: 'New',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=70',
      summary: 'Waterfront restoration with original tin ceilings and a retractable atrium roof.'
    },
    {
      id: 'v04',
      name: 'The Sutherland',
      city: 'Chicago, IL',
      region: 'midwest',
      type: 'historic',
      capacity: 900,
      sqft: 14000,
      rate: 38200,
      rating: 4.9,
      tag: null,
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=70',
      summary: 'Beaux-Arts grand ballroom with three breakout salons on the mezzanine.'
    },
    {
      id: 'v05',
      name: 'Solano Coast Resort',
      city: 'Half Moon Bay, CA',
      region: 'west',
      type: 'resort',
      capacity: 450,
      sqft: 6200,
      rate: 28900,
      rating: 4.6,
      tag: null,
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=70',
      summary: 'Bluffside ceremony lawn, indoor-outdoor flow, twelve breakout cottages.'
    },
    {
      id: 'v06',
      name: 'Hotel Kilburn',
      city: 'New York, NY',
      region: 'northeast',
      type: 'lifestyle',
      capacity: 320,
      sqft: 4400,
      rate: 26500,
      rating: 4.7,
      tag: 'Most booked',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=70',
      summary: 'Midtown rooftop pavilion and three-level lofted conference floor.'
    },
    {
      id: 'v07',
      name: 'The Burnham',
      city: 'Denver, CO',
      region: 'west',
      type: 'historic',
      capacity: 520,
      sqft: 7100,
      rate: 19800,
      rating: 4.8,
      tag: null,
      image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=1200&q=70',
      summary: 'A restored 1908 trade hall, twin atriums, dedicated catering kitchens.'
    },
    {
      id: 'v08',
      name: 'Pinecliff Lodge',
      city: 'Asheville, NC',
      region: 'south',
      type: 'resort',
      capacity: 280,
      sqft: 3600,
      rate: 14200,
      rating: 4.9,
      tag: null,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=70',
      summary: 'Stone-and-timber retreat in the Blue Ridge, four-season terrace dining.'
    },
    {
      id: 'v09',
      name: 'Wabash Industrial',
      city: 'Detroit, MI',
      region: 'midwest',
      type: 'boutique',
      capacity: 340,
      sqft: 5200,
      rate: 12700,
      rating: 4.6,
      tag: null,
      image: 'https://images.unsplash.com/photo-1559599189-fe84dea4eb79?auto=format&fit=crop&w=1200&q=70',
      summary: 'Reclaimed factory floor, exposed steel, programmable LED grid.'
    },
    {
      id: 'v10',
      name: 'The Foundry',
      city: 'Seattle, WA',
      region: 'west',
      type: 'industrial',
      capacity: 400,
      sqft: 6000,
      rate: 15500,
      rating: 4.8,
      tag: 'New',
      image: 'https://images.unsplash.com/photo-1519167758481-83f540f28b07?auto=format&fit=crop&w=1200&q=70',
      summary: 'Restored metalworks factory with dramatic exposed beams and natural light.'
    },
    {
      id: 'v11',
      name: 'Beacon House',
      city: 'Boston, MA',
      region: 'northeast',
      type: 'historic',
      capacity: 220,
      sqft: 3200,
      rate: 13800,
      rating: 4.7,
      tag: null,
      image: 'https://images.unsplash.com/photo-1576506554522-8bf1ebf7c007?auto=format&fit=crop&w=1200&q=70',
      summary: 'Classic brownstone elegance with modern conference capabilities.'
    },
    {
      id: 'v12',
      name: 'Oasis Retreat',
      city: 'Scottsdale, AZ',
      region: 'west',
      type: 'resort',
      capacity: 800,
      sqft: 12000,
      rate: 31000,
      rating: 4.9,
      tag: 'Popular',
      image: 'https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=1200&q=70',
      summary: 'Desert luxury resort featuring a sprawling outdoor event lawn.'
    }
  ],

  seminars: [
    {
      id: 's01',
      title: 'AI in Hospitality: From Pilot to P&L',
      date: 'Jun 18, 2026',
      iso: '2026-06-18',
      city: 'Chicago - In person',
      duration: '½ day',
      seats: 80,
      seatsLeft: 23,
      blurb: 'A working session on how mid-market hotel groups are translating AI experiments into measurable revenue, not press releases.',
      speaker: 'Industry Expert',
      speakerRole: 'Guest Speaker',
      initials: 'IE',
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1200&q=70'
    },
    {
      id: 's02',
      title: 'Pricing the Group Block: Dynamic Models that Actually Work',
      date: 'Jul 09, 2026',
      iso: '2026-07-09',
      city: 'Virtual',
      duration: '90 min',
      seats: 300,
      seatsLeft: 142,
      blurb: 'Walk through three live revenue management deployments, what broke, and how forecast accuracy moved from ±18% to ±5%.',
      speaker: 'Industry Expert',
      speakerRole: 'Guest Speaker',
      initials: 'IE',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=70'
    },
    {
      id: 's03',
      title: 'The Planner Brief: Reading Buyer Intent in 2026',
      date: 'Aug 22, 2026',
      iso: '2026-08-22',
      city: 'Atlanta - In person',
      duration: 'Full day',
      seats: 60,
      seatsLeft: 9,
      blurb: 'Sales directors and DOSMs review eighteen months of anonymized RFP data and the early signals that predict close vs. churn.',
      speaker: 'Industry Expert',
      speakerRole: 'Guest Speaker',
      initials: 'IE',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=70'
    },
    {
      id: 's04',
      title: 'Operations After Automation: What Stays Human',
      date: 'Sep 11, 2026',
      iso: '2026-09-11',
      city: 'Virtual',
      duration: '2 hr',
      seats: 500,
      seatsLeft: 318,
      blurb: 'A frank conversation with three GMs about workflow redesign, retention, and the work AI hasn\'t replaced - and probably won\'t.',
      speaker: 'Industry Expert',
      speakerRole: 'Guest Speaker',
      initials: 'IE',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=70'
    },
    {
      id: 's05',
      title: 'Data Rights for Hotels: Owning the Guest Signal',
      date: 'Oct 02, 2026',
      iso: '2026-10-02',
      city: 'New York - In person',
      duration: '½ day',
      seats: 90,
      seatsLeft: 41,
      blurb: 'A practical legal-and-product workshop on first-party data, vendor terms, and what to negotiate before signing the next AI add-on.',
      speaker: 'Industry Expert',
      speakerRole: 'Guest Speaker',
      initials: 'IE',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=70'
    },
    {
      id: 's06',
      title: 'The Quiet Revenue Channels: Long-Lead Group & Wellness',
      date: 'Nov 14, 2026',
      iso: '2026-11-14',
      city: 'Phoenix - In person',
      duration: 'Full day',
      seats: 120,
      seatsLeft: 67,
      blurb: 'Where group volume is moving as corporate footprints contract - and how three resorts replaced lost demand with verticals that don\'t flinch in a downturn.',
      speaker: 'Industry Expert',
      speakerRole: 'Guest Speaker',
      initials: 'IE',
      image: 'https://images.unsplash.com/photo-1542665952-14513db15293?auto=format&fit=crop&w=1200&q=70'
    }
  ],

  insights: [
    {
      cat: 'Field report',
      title: 'Why the group RFP cycle is 22 days shorter than it was in 2023',
      excerpt: 'Anonymized data from 4,100 planner-side searches shows where the time was cut, and what closed faster as a result.',
      meta: 'Q1 2026 - 8 min read'
    },
    {
      cat: 'Playbook',
      title: 'A revenue manager\'s prompt library that actually moves ADR',
      excerpt: 'Eleven prompts, six guardrails, and the one mistake that cost a 220-room property $84K last summer.',
      meta: 'Updated Apr 2026 - 12 min read'
    },
    {
      cat: 'Data',
      title: 'Where group business is migrating: a 36-month heat map',
      excerpt: 'The cities gaining share, the second-tier markets that quietly tripled inbound corporate, and a forecast through 2027.',
      meta: 'Mar 2026 - Data brief'
    }
  ],

  // 14-market watchlist. forecast = group room nights in thousands, 2026..2035.
  markets: [
    {
      id: 'lv', name: 'Las Vegas', state: 'NV', region: 'West',
      status: 'stable', statusLabel: 'Stable peak',
      summary: 'A mature group market at scale. Modest growth on top of a record base.',
      forecast: [640, 658, 672, 681, 689, 696, 702, 708, 714, 720],
      currentADR: 268, projectedADR: 312,
      groupPipeline: 1840, conferenceCount: 142, leisureIndex: 92,
      pipeline: [
        { name: 'CES 2027', dates: 'Jan 6–9, 2027', att: '165k attendees', value: '$312M' },
        { name: 'NAB Show 2027', dates: 'Apr 24–28, 2027', att: '95k attendees', value: '$158M' },
        { name: 'World of Concrete 2027', dates: 'Jan 19–22, 2027', att: '60k attendees', value: '$89M' }
      ],
      development: [
        'MSG Sphere Q2 expansion adds 12,000 secondary venue capacity.',
        'Mandalay Bay $400M renovation completes Q4 2026, six new ballrooms.'
      ]
    },
    {
      id: 'chi', name: 'Chicago', state: 'IL', region: 'Midwest',
      status: 'watch', statusLabel: 'Watch · revising up',
      summary: 'Cyclical trade-show calendar with structural F500 corporate baseline.',
      forecast: [410, 418, 428, 436, 442, 448, 454, 459, 465, 470],
      currentADR: 232, projectedADR: 268,
      groupPipeline: 920, conferenceCount: 86, leisureIndex: 74,
      pipeline: [
        { name: 'RSNA 2026', dates: 'Nov 29 – Dec 4, 2026', att: '50k attendees', value: '$84M' },
        { name: 'IMTS 2026', dates: 'Sep 14–19, 2026', att: '88k attendees', value: '$142M' },
        { name: 'McCormick Tech Summit 2027', dates: 'Mar 8–11, 2027', att: '22k attendees', value: '$38M' }
      ],
      development: [
        'McCormick Place southwest concourse opens 2027, adding 180k sqft of event space.',
        'Riverline District adds 1,400 four- and five-star keys through 2028.'
      ]
    },
    {
      id: 'la', name: 'Los Angeles', state: 'CA', region: 'West',
      status: 'recovering', statusLabel: 'Recovering · entertainment',
      summary: 'Post-strike pipeline rebuilding; LA28 capital programs reshape capacity.',
      forecast: [520, 540, 562, 580, 596, 610, 622, 632, 638, 640],
      currentADR: 298, projectedADR: 344,
      groupPipeline: 1120, conferenceCount: 94, leisureIndex: 88,
      pipeline: [
        { name: 'NAMM Show 2027', dates: 'Jan 21–24, 2027', att: '110k attendees', value: '$96M' },
        { name: 'E3 Returns 2027', dates: 'Jun 8–10, 2027', att: '60k attendees', value: '$74M' },
        { name: 'AHA Scientific Sessions 2026', dates: 'Nov 14–17, 2026', att: '16k attendees', value: '$28M' }
      ],
      development: [
        'LA Live group corridor adds 620 keys; Intuit Dome group business reopens Q1.',
        'Convention Center modernization vote scheduled Q4 2026.'
      ]
    },
    {
      id: 'sf', name: 'San Francisco', state: 'CA', region: 'West',
      status: 'recovering', statusLabel: 'Recovering · sharp',
      summary: 'Below-trend baseline rebuilding fast on AI corporate calendars.',
      forecast: [280, 308, 338, 364, 386, 404, 418, 428, 434, 440],
      currentADR: 286, projectedADR: 372,
      groupPipeline: 880, conferenceCount: 68, leisureIndex: 79,
      pipeline: [
        { name: 'Salesforce Dreamforce 2026', dates: 'Oct 13–16, 2026', att: '170k attendees', value: '$234M' },
        { name: 'RSA Conference 2027', dates: 'Mar 1–5, 2027', att: '45k attendees', value: '$76M' },
        { name: 'JPMorgan Healthcare Conf', dates: 'Jan 12–15, 2027', att: '8k attendees', value: '$98M' }
      ],
      development: [
        'Moscone West Hall A reopens after $112M refit; two conferences relocate from Las Vegas.',
        'SoMa lifestyle hotel pipeline: 410 keys delivering 2026–2027.'
      ]
    },
    {
      id: 'napa', name: 'Napa Valley', state: 'CA', region: 'West',
      status: 'stable', statusLabel: 'Stable · luxury',
      summary: 'Small market, high-ADR luxury and wine. Capacity-constrained by design.',
      forecast: [85, 88, 92, 96, 100, 104, 108, 112, 115, 118],
      currentADR: 712, projectedADR: 894,
      groupPipeline: 184, conferenceCount: 22, leisureIndex: 96,
      pipeline: [
        { name: 'Premiere Napa Valley Auction', dates: 'Feb 26–28, 2027', att: '1.2k attendees', value: '$14M' },
        { name: 'Auction Napa Valley 2027', dates: 'Jun 4–7, 2027', att: '2.4k attendees', value: '$22M' },
        { name: 'Crush Camp Series 2026', dates: 'Oct (rolling)', att: '5k attendees', value: '$9M' }
      ],
      development: [
        'Three luxury properties (320 keys total) deliver between 2026 and 2028.',
        'Yountville wine corridor regulatory expansion approved Q1 2026.'
      ]
    },
    {
      id: 'nyc', name: 'New York', state: 'NY', region: 'Northeast',
      status: 'stable', statusLabel: 'Stable · top of market',
      summary: 'Deepest group market in the country. Cyclical but supply-constrained.',
      forecast: [810, 820, 830, 840, 850, 860, 868, 876, 884, 890],
      currentADR: 442, projectedADR: 518,
      groupPipeline: 2640, conferenceCount: 164, leisureIndex: 98,
      pipeline: [
        { name: 'NRF Big Show 2027', dates: 'Jan 17–19, 2027', att: '40k attendees', value: '$96M' },
        { name: 'UN General Assembly 2026', dates: 'Sep 14–30, 2026', att: '180+ delegations', value: '$182M' },
        { name: 'Cannes Lions NYC Forum', dates: 'Mar 4–6, 2027', att: '6k attendees', value: '$14M' }
      ],
      development: [
        'Hudson Yards Phase 3 ballroom space coming 2028 (+90k sqft).',
        'Two convention-class properties under construction on the West Side.'
      ]
    },
    {
      id: 'lg', name: 'Lake George', state: 'NY', region: 'Northeast',
      status: 'watch', statusLabel: 'Watch · seasonal',
      summary: 'Adirondack leisure with off-season group / wedding upside through 2030.',
      forecast: [28, 29.6, 31.4, 32.8, 33.8, 34.7, 35.5, 36.3, 37.2, 38],
      currentADR: 248, projectedADR: 312,
      groupPipeline: 64, conferenceCount: 12, leisureIndex: 84,
      pipeline: [
        { name: 'Adirondack Wedding Season', dates: 'May – Oct 2026', att: '320 events', value: '$11M' },
        { name: 'Lake George Bike Tour 2026', dates: 'Sep 12–14, 2026', att: '4k attendees', value: '$6M' },
        { name: 'Tournament Series Fall 2026', dates: 'Aug – Oct 2026', att: '24 events', value: '$4M' }
      ],
      development: [
        'Adirondack Northway exit reconfig 2027 cuts metro-LG transit by 18 minutes.',
        'Boutique pipeline: 6 properties, 220 keys through 2027.'
      ]
    },
    {
      id: 'ham', name: 'Hamptons', state: 'NY', region: 'Northeast',
      status: 'stable', statusLabel: 'Stable · luxury',
      summary: 'Wedding and private-event corridor with structurally high spend per night.',
      forecast: [22, 23.4, 25, 26.2, 27.2, 28.1, 28.9, 29.6, 30.3, 31],
      currentADR: 824, projectedADR: 982,
      groupPipeline: 96, conferenceCount: 9, leisureIndex: 94,
      pipeline: [
        { name: 'Hamptons International Film Fest', dates: 'Oct 8–13, 2026', att: '6k attendees', value: '$9M' },
        { name: 'East End Bridal Series 2027', dates: 'Jun – Aug 2027', att: '180 events', value: '$26M' },
        { name: 'Polo Classic 2026', dates: 'Aug 28–30, 2026', att: '3k attendees', value: '$5M' }
      ],
      development: [
        'East End rail spur upgrade clears bottleneck for off-season programming.',
        'Two estate-to-event conversions completing Q2 2026.'
      ]
    },
    {
      id: 'tampa', name: 'Tampa', state: 'FL', region: 'South',
      status: 'hot', statusLabel: 'Hot · growth market',
      summary: 'Gulf-coast convention growth + Water Street build-out. Outpacing forecasts.',
      forecast: [190, 208, 226, 244, 258, 272, 284, 294, 302, 310],
      currentADR: 226, projectedADR: 296,
      groupPipeline: 580, conferenceCount: 58, leisureIndex: 86,
      pipeline: [
        { name: 'AACR 2027', dates: 'Apr 9–13, 2027', att: '23k attendees', value: '$42M' },
        { name: 'Florida State Fair 2027', dates: 'Feb 4–15, 2027', att: '480k attendees', value: '$58M' },
        { name: 'SEC Football Championship 2026', dates: 'Dec 5, 2026', att: '78k attendees', value: '$34M' }
      ],
      development: [
        'Tampa Convention Center east expansion opens 2027 (+220k sqft).',
        'Water Street district adds 1,100 group-ready keys through 2027.'
      ]
    },
    {
      id: 'polk', name: 'Polk County', state: 'FL', region: 'South',
      status: 'hot', statusLabel: 'Hot · emerging',
      summary: 'Central-Florida corridor between Tampa and Orlando absorbing overflow.',
      forecast: [95, 108, 122, 132, 142, 150, 156, 162, 166, 170],
      currentADR: 168, projectedADR: 228,
      groupPipeline: 248, conferenceCount: 34, leisureIndex: 78,
      pipeline: [
        { name: 'Imperial Polk Cattle & Rodeo', dates: 'Jan 14–18, 2027', att: '60k attendees', value: '$9M' },
        { name: 'Lake Wales Wedding Corridor', dates: 'Spring 2027', att: '220 events', value: '$14M' },
        { name: 'Mid-Florida Air Show 2026', dates: 'Oct 16–18, 2026', att: '80k attendees', value: '$7M' }
      ],
      development: [
        'I-4 corridor lifestyle pipeline: 480 keys 2026–2028.',
        '$50M tourism corridor bond pass funds 2027 road and venue upgrades.'
      ]
    },
    {
      id: 'orl', name: 'Orange / Osceola', state: 'FL', region: 'South',
      status: 'hot', statusLabel: 'Hot · #1 group market',
      summary: 'Largest group market by attendee volume. Phase 5 OCCC expansion compounds.',
      forecast: [720, 758, 798, 834, 866, 894, 918, 938, 952, 960],
      currentADR: 218, projectedADR: 282,
      groupPipeline: 2240, conferenceCount: 188, leisureIndex: 95,
      pipeline: [
        { name: 'IAAPA Expo 2026', dates: 'Nov 16–20, 2026', att: '39k attendees', value: '$98M' },
        { name: 'PGA Show 2027', dates: 'Jan 26–29, 2027', att: '40k attendees', value: '$74M' },
        { name: 'AAOS Annual Meeting 2027', dates: 'Mar 8–12, 2027', att: '30k attendees', value: '$58M' }
      ],
      development: [
        'Orange County Convention Center Phase 5 breaks ground 2026.',
        'Disney convention-class expansion: 800 new keys 2027–2028.'
      ]
    },
    {
      id: 'mia', name: 'Miami', state: 'FL', region: 'South',
      status: 'hot', statusLabel: 'Hot · LATAM gateway',
      summary: 'Cross-border corporate, finance, and culture pipeline scaling fast.',
      forecast: [580, 612, 644, 674, 700, 722, 740, 756, 770, 780],
      currentADR: 384, projectedADR: 482,
      groupPipeline: 1480, conferenceCount: 124, leisureIndex: 97,
      pipeline: [
        { name: 'Art Basel Miami 2026', dates: 'Dec 3–7, 2026', att: '80k attendees', value: '$124M' },
        { name: 'SOBE Wine & Food 2027', dates: 'Feb 24–28, 2027', att: '60k attendees', value: '$48M' },
        { name: 'eMerge Americas 2027', dates: 'Apr 6–7, 2027', att: '16k attendees', value: '$22M' }
      ],
      development: [
        'Miami Beach Convention Center luxury annex opens 2027.',
        'Brickell group-class pipeline: 1,800 keys through 2028.'
      ]
    },
    {
      id: 'dal', name: 'Dallas', state: 'TX', region: 'South',
      status: 'hot', statusLabel: 'Hot · F500 corporate',
      summary: 'F500 corporate-relo demand + Frisco corridor build-out. Sustained.',
      forecast: [480, 504, 528, 552, 572, 590, 606, 618, 630, 640],
      currentADR: 242, projectedADR: 308,
      groupPipeline: 1240, conferenceCount: 102, leisureIndex: 80,
      pipeline: [
        { name: 'Esri DevSummit 2027', dates: 'Mar 9–13, 2027', att: '4k attendees', value: '$8M' },
        { name: 'ATA Truckload Strategies 2027', dates: 'Mar 21–24, 2027', att: '6k attendees', value: '$9M' },
        { name: 'Dallas Auto Show 2027', dates: 'Mar 25 – Apr 2, 2027', att: '220k attendees', value: '$34M' }
      ],
      development: [
        'Kay Bailey Hutchison Convention Center master plan funded; 2028 ground-break.',
        'Frisco corridor adds 2,200 hospitality keys through 2027.'
      ]
    },
    {
      id: 'aus', name: 'Austin', state: 'TX', region: 'South',
      status: 'hot', statusLabel: 'Hot · highest growth',
      summary: 'Highest projected 10-year growth in the watchlist. Capacity is the constraint.',
      forecast: [310, 340, 370, 398, 424, 448, 470, 490, 506, 520],
      currentADR: 278, projectedADR: 372,
      groupPipeline: 940, conferenceCount: 78, leisureIndex: 91,
      pipeline: [
        { name: 'SXSW 2027', dates: 'Mar 12–21, 2027', att: '280k attendees', value: '$356M' },
        { name: 'F1 US Grand Prix 2026', dates: 'Oct 23–25, 2026', att: '440k attendees', value: '$410M' },
        { name: 'ACL Music Festival 2026', dates: 'Oct 2–11, 2026', att: '450k attendees', value: '$96M' }
      ],
      development: [
        'Austin Convention Center expansion: doubles main hall, opens 2028.',
        'Mueller and East Austin pipeline: 1,400 lifestyle keys 2026–2028.'
      ]
    },
    {
      id: 'sea', name: 'Seattle', state: 'WA', region: 'West',
      status: 'stable', statusLabel: 'Stable · corporate',
      summary: 'Tech hub with consistent corporate offsite demand.',
      forecast: [220, 235, 250, 265, 280, 292, 305, 315, 325, 335],
      currentADR: 290, projectedADR: 345,
      groupPipeline: 850, conferenceCount: 65, leisureIndex: 82,
      pipeline: [
        { name: 'Cloud Summit 2026', dates: 'Jun 12-15, 2026', att: '35k attendees', value: '$85M' },
        { name: 'PAX West 2026', dates: 'Sep 4-7, 2026', att: '80k attendees', value: '$110M' },
        { name: 'Tech Leaders Forum 2027', dates: 'Apr 10-12, 2027', att: '5k attendees', value: '$15M' }
      ],
      development: [
        'Seattle Convention Center Summit building driving new large-scale bookings.',
        'Downtown waterfront revitalization completing late 2026.'
      ]
    },
    {
      id: 'bos', name: 'Boston', state: 'MA', region: 'Northeast',
      status: 'watch', statusLabel: 'Watch · biotech',
      summary: 'Biotech and education sectors driving strong year-round group volume.',
      forecast: [350, 365, 385, 405, 420, 440, 460, 475, 490, 505],
      currentADR: 310, projectedADR: 380,
      groupPipeline: 1100, conferenceCount: 92, leisureIndex: 85,
      pipeline: [
        { name: 'BioPharma Expo 2026', dates: 'Oct 5-8, 2026', att: '45k attendees', value: '$120M' },
        { name: 'EduTech Conference 2027', dates: 'Mar 15-18, 2027', att: '25k attendees', value: '$65M' },
        { name: 'Boston Marathon Expo 2027', dates: 'Apr 15-17, 2027', att: '100k attendees', value: '$150M' }
      ],
      development: [
        'Seaport district adding 2 convention-adjacent properties by 2027.',
        'Logan Airport terminal expansions increasing international delegate capacity.'
      ]
    }
  ],

  news: [
    { date: 'May 8, 2026', cat: 'development', catLabel: 'Development', market: 'Las Vegas', head: 'Mandalay Bay completes $400M renovation; Q3 group rebookings up 41% week-on-week.' },
    { date: 'May 4, 2026', cat: 'conference',  catLabel: 'Conference',  market: 'Orange / Osceola', head: 'Orlando wins 2028 InfoComm bid - 65,000 attendees, six-night room block.' },
    { date: 'May 2, 2026', cat: 'development', catLabel: 'Development', market: 'Austin', head: 'Austin DMO opens RFP for second convention hall expansion ahead of SXSW 2028.' },
    { date: 'Apr 28, 2026', cat: 'leisure',    catLabel: 'Leisure',     market: 'Hamptons', head: 'Hamptons summer 2026 weddings book nine months earlier than 2024.' },
    { date: 'Apr 22, 2026', cat: 'development', catLabel: 'Development', market: 'Napa Valley', head: 'Napa Valley adds 320 luxury keys across three properties through 2027.' },
    { date: 'Apr 18, 2026', cat: 'development', catLabel: 'Development', market: 'Polk County', head: 'Polk County tourism corridor passes $50M infrastructure bond.' },
    { date: 'Apr 14, 2026', cat: 'conference',  catLabel: 'Conference',  market: 'Miami', head: 'Miami pipeline: 14 group events over 1,500 attendees confirmed for Q1 2027.' },
    { date: 'Apr 9, 2026',  cat: 'trends',      catLabel: 'Trends',      market: 'Chicago', head: 'Chicago group ADR projections revised +4.2% on 2027 trade-show calendar.' },
    { date: 'Apr 3, 2026',  cat: 'leisure',     catLabel: 'Leisure',     market: 'Lake George', head: 'Lake George Adirondack region adds 80mi of branded trail; leisure index +12.' },
    { date: 'Mar 28, 2026', cat: 'conference',  catLabel: 'Conference',  market: 'San Francisco', head: 'SF reopens Moscone West Hall A; two conferences relocate from Las Vegas.' },
    { date: 'Mar 22, 2026', cat: 'trends',      catLabel: 'Trends',      market: 'Dallas', head: 'Dallas F500 corporate offsites pace +28% YoY in early Q2 sourcing data.' },
    { date: 'Mar 15, 2026', cat: 'development', catLabel: 'Development', market: 'Tampa', head: 'Tampa Convention Center east-expansion contract awarded; 2027 ribbon-cutting.' }
  ]
};
