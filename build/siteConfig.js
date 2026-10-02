/**
 * KAIROS EVENTS & HOSPITALITY - SITE CONFIGURATION
 * All text, images, prices, phone numbers, and counters can be updated here easily.
 */

const siteConfig = {
  business: {
    name: "KAIROS EVENTS & HOSPITALITY",
    shortName: "KAIROS",
    founder: "~MR. JONS",
    tagline: "Crafting Life's Perfect Moments",
    subTagline: "Weddings, parties and corporate experiences designed for the future.",
    city: "Mumbai & Delhi (Nationwide & Global Destinations)",
    phone: "+91 98765 43210",
    phoneSecondary: "+91 91234 56789",
    whatsappNumber: "919876543210", // No plus sign for WhatsApp API
    email: "hello@kairosevents.com",
    address: "Kairos Sky Horizon, Level 42, Bandra-Kurla Complex, Mumbai & Aerocity Delhi",
    hours: "Monday - Sunday: 09:00 AM - 09:00 PM IST (Online 24/7 for Emergencies)",
    instagram: "https://instagram.com/kairosevents",
    domain: "kairosevents.com"
  },

  counters: {
    eventsPlanned: 350,
    happyClients: 99.4,
    cities: 15,
    yearsPassion: 8
  },

  packages: [
    {
      id: "starter",
      name: "Starter Horizon",
      tier: "Starter",
      tagline: "Essential futuristic styling for intimate gatherings & milestone celebrations",
      priceINR: "₹2,75,000",
      priceUSD: "$3,500",
      guestLimit: "Up to 150 Guests",
      features: [
        "Holographic Moodboard & 3D Spatial Color Palette",
        "Signature Stage & Geometric Photo-Op Architecture",
        "Intelligent Ambient Lighting & Acoustic Sound Grid",
        "Day-of On-Site Event Director & 2 Production Leads",
        "Curated Vendor Coordination & Timeline Blueprint",
        "Complimentary Guest Digital Invitation Portal"
      ],
      excluded: [
        "4K Drone & Cinematic Film Production",
        "Celebrity Artist / Headline DJ Management"
      ]
    },
    {
      id: "signature",
      name: "Signature Cosmos",
      tier: "Signature",
      featured: true,
      badge: "MOST LOVED",
      tagline: "Our premier flagship production for luxury weddings & prestigious corporate galas",
      priceINR: "₹6,50,000",
      priceUSD: "$8,000",
      guestLimit: "Up to 500 Guests",
      features: [
        "Photorealistic 3D Spatial Venue Simulations",
        "Bespoke Mandap / Stage Architecture with Kinetic Light",
        "Concert-Grade DMX Moving Heads & Laser Mapping",
        "Cold Pyrotechnics & Cryo Low-Fog Atmospheric SFX",
        "Dedicated VIP Hospitality Concierge & Valet Fleet",
        "Full 4K Cinema Highlight Film & Drone Coverage",
        "Curated Bar Styling & Artisanal Food Counter Design"
      ],
      excluded: [
        "Multi-City Destination Flight Logistics"
      ]
    },
    {
      id: "royal",
      name: "Imperial Singularity",
      tier: "Royal",
      tagline: "Bespoke ultra-luxury for multi-day destination spectacles & global summits",
      priceINR: "₹15,00,000",
      priceUSD: "$18,500",
      guestLimit: "Up to 1,500+ Guests",
      features: [
        "Multi-Day Destination Production & Runway Execution",
        "Custom Architectural Glasshouse & Kinetic Stage",
        "A-List Celebrity Artist & International DJ Curation",
        "Michelin-Grade Culinary Masterclass Coordination",
        "24/7 Dedicated Event Command Center & 25-Person Crew",
        "Chauffeur Fleet & Airport VIP Welcome Protocols",
        "Real-Time Live Broadcast & Drone Holographic Mapping"
      ],
      excluded: []
    }
  ],

  services: [
    {
      id: "weddings",
      title: "Royal & Futuristic Weddings",
      shortPromise: "Transforming vows into transcendental multi-sensory sagas.",
      icon: "💍",
      image: "assets/images/wedding.jpg",
      details: "From Sangeet laser symphonies to sacred floating Mandaps and royal banquets, we engineer wedding celebrations that feel like a celestial dream.",
      inclusions: ["3D Spatial Mandap Architecture", "Cinematic Bridal Entry SFX", "Royal Hospitality Protocol", "Varmala Stage Mechanics", "Custom Floral Scenography"],
      sampleTimeline: "Day 1: Celestial Sangeet & Neon Cocktail | Day 2: Sacred Sunrise Rituals & Royal Imperial Reception"
    },
    {
      id: "parties",
      title: "VIP Parties & Milestone Soirées",
      shortPromise: "Electric rooftop nights, bespoke neon lounges & unforgettable energy.",
      icon: "🥂",
      image: "assets/images/party.jpg",
      details: "High-octane milestone birthdays, private estate parties, and luxury cocktail lounges equipped with champagne towers, interactive mixology, and top DJs.",
      inclusions: ["Custom Neon Installations & Photobooths", "Concert Sound Acoustics & Pioneer DJ Booths", "Champagne Pyramids & Artisanal Cocktails", "Exclusive VIP Lounge Furniture"],
      sampleTimeline: "20:00 Arrival Cocktail & Red Carpet | 22:00 Surprise Reveal & Cake Ceremony | 23:00 Headline DJ Afterparty"
    },
    {
      id: "corporate",
      title: "Corporate Summits & Galas",
      shortPromise: "Engineered for brand prestige, innovation, and executive impact.",
      icon: "🏛",
      image: "assets/images/corporate.jpg",
      details: "High-tech global annual conferences, product reveals, awards galas, and investor symposiums with curved seamless LED backdrops and crystal-clear acoustic fidelity.",
      inclusions: ["Ultra-Wide Curved LED Displays & Keynote AV", "VIP Executive Seating & Banquet Production", "Digital Delegate Registration & Badging", "Keynote Video Production & Live Streaming"],
      sampleTimeline: "09:00 Registration & Breakfast | 10:30 Keynote Address | 14:00 Breakout Labs | 19:30 Awards Gala & Dinner"
    },
    {
      id: "launches",
      title: "Product Launches & Brand Reveals",
      shortPromise: "Dramatic sensory unveils that captivate media and consumers.",
      icon: "🚀",
      image: "assets/images/hero.jpg",
      details: "Automotive, tech, luxury lifestyle, and fashion reveals featuring kinetic motorized curtains, robotic projection mapping, and synchronized light storms.",
      inclusions: ["Kinetic Curtain & Turntable Reveals", "3D Projection Mapping on Products", "Media Lounge & Press Wall Coordination", "Atmospheric Haze & Laser Choreography"],
      sampleTimeline: "18:30 Media Arrival | 19:15 Cinematic Brand Teaser | 19:25 Dramatic Product Unveil | 20:00 Hands-On Experience Zone"
    },
    {
      id: "fests",
      title: "College & Cultural Mega Fests",
      shortPromise: "Electrifying festival stages built for thousands of passionate fans.",
      icon: "⚡",
      image: "assets/images/party.jpg",
      details: "Massive youth cultural festivals, college fests, and multi-stage music spectacles managed with concert-grade safety, security, barricading, and production.",
      inclusions: ["Stadium-Grade Line Array Sound Arrays", "Multi-Level Stage Trusses & Intelligent Beams", "Celebrity Artist Green Rooms & Rider Management", "Crowd Flow Dynamics & Safety Engineering"],
      sampleTimeline: "11:00 Campus Competitions | 17:00 Battle of Bands | 19:30 Headline Artist Concert"
    },
    {
      id: "dining",
      title: "Gourmet Catering & Scenography",
      shortPromise: "Five-star culinary journeys paired with royal table architecture.",
      icon: "🍽",
      image: "assets/images/dining.jpg",
      details: "Curated multi-course menus crafted in collaboration with elite culinary masters, featuring gold flatware, crystal stemware, and interactive gastronomic food stations.",
      inclusions: ["Custom Multi-Cuisine Menu Curation", "Artisanal Live Counters & Molecular Dessert Bars", "Crystal & 24K Gold Cutlery Table Styling", "Uniformed Master Butler Service"],
      sampleTimeline: "Cocktail Hors d'oeuvres -> 5-Course Plated Banquet -> Midnight Dessert Station"
    }
  ]
};

// Export to window
if (typeof window !== 'undefined') {
  window.siteConfig = siteConfig;
}
