import re

with open('scripts/data.js', 'r') as f:
    content = f.read()

# Add 3 venues
new_venues = """    {
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
  ],"""

content = re.sub(r'summary: \'Reclaimed factory floor, exposed steel, programmable LED grid\.\'\n\s*\}\n\s*\],', "summary: 'Reclaimed factory floor, exposed steel, programmable LED grid.'\n    },\n" + new_venues, content)

# Add 2 markets
new_markets = """    {
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
  ],"""

content = re.sub(r'development: \[\n\s*\'Austin Convention Center expansion: doubles main hall, opens 2028\.\',\n\s*\'Mueller and East Austin pipeline: 1,400 lifestyle keys 2026–2028\.\'\n\s*\]\n\s*\}\n\s*\],', "development: [\n        'Austin Convention Center expansion: doubles main hall, opens 2028.',\n        'Mueller and East Austin pipeline: 1,400 lifestyle keys 2026–2028.'\n      ]\n    },\n" + new_markets, content)

with open('scripts/data.js', 'w') as f:
    f.write(content)

print("Added new venues and markets.")
