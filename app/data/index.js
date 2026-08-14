export const SECTIONS = [
  {
    id: 1,
    title: "Backwaters",
    subtitle: "Serene Waterways",
    description: "Experience the tranquil life on traditional houseboats drifting through emerald green waters.",
    video: "backwater.mp4",
    color: "from-green-900/60",
  },
  {
    id: 2,
    title: "Beaches",
    subtitle: "Golden Horizons",
    description: "Sun-kissed sands and rhythmic waves. The perfect escape into the Arabian Sea's warmth.",
    video: "/hills.mp4",
    color: "from-orange-900/60",
  },
  {
    id: 3,
    title: "Hills",
    subtitle: "Misty Peaks",
    description: "Explore the rolling tea plantations and cool breeze of Munnar and Wayanad.",
    video: "/backwater.mp4",
    color: "from-teal-900/60",
  },
  {
    id: 4,
    title: "Waterfalls",
    subtitle: "Nature's Roar",
    description: "Witness the majestic Athirappilly falls as they cascade down in a breathtaking display.",
    video: "/hills.mp4",
    color: "from-blue-900/60",
  },
];

export const PACKAGES = [
  {
    id: "pkg-alleppey-houseboat",
    name: "Alleppey Backwater Escape",
    location: "Alleppey",
    category: "Backwaters",
    duration: "3 Days / 2 Nights",
    priceFrom: 14500,
    rating: 4.8,
    reviews: 212,
    image:
      "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: ["Private houseboat", "Sunset toddy tasting", "Village canoe ride"],
    popular: true,
  },
  {
    id: "pkg-munnar-tea-trail",
    name: "Munnar Tea Trail",
    location: "Munnar",
    category: "Hills",
    duration: "4 Days / 3 Nights",
    priceFrom: 18900,
    rating: 4.7,
    reviews: 168,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Munnar_-_Tea_Plantations.jpg/960px-Munnar_-_Tea_Plantations.jpg",
    highlights: ["Guided plantation trek", "Colonial-era stay", "Spice garden visit"],
  },
  {
    id: "pkg-wayanad-wild",
    name: "Wayanad Wilderness Trail",
    location: "Wayanad",
    category: "Wildlife",
    duration: "5 Days / 4 Nights",
    priceFrom: 22400,
    rating: 4.6,
    reviews: 97,
    image:
      "https://plus.unsplash.com/premium_photo-1711255562146-0acdc7d5c659?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: ["Edakkal caves hike", "Night safari", "Bamboo raft crossing"],
  },
  {
    id: "pkg-varkala-cliff",
    name: "Varkala Cliffside Retreat",
    location: "Varkala",
    category: "Beaches",
    duration: "3 Days / 2 Nights",
    priceFrom: 12800,
    rating: 4.5,
    reviews: 143,
    image:
      "https://plus.unsplash.com/premium_photo-1669018131050-e7b5719d201b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlights: ["Clifftop stay", "Surf lesson", "Ayurvedic massage"],
  },
  {
    id: "pkg-kochi-heritage",
    name: "Kochi Heritage Walk",
    location: "Fort Kochi",
    category: "Culture",
    duration: "2 Days / 1 Night",
    priceFrom: 8200,
    rating: 4.4,
    reviews: 88,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeO6O-4SIhXm83BFojK2zV63HummAwGIJx98LFCE3PcIfvZJBZVEpY5-wj&s=10",
    highlights: ["Chinese fishing nets", "Kathakali show", "Spice market tour"],
  },
  {
    id: "pkg-thekkady-spice",
    name: "Thekkady Spice & Wildlife",
    location: "Thekkady",
    category: "Wildlife",
    duration: "4 Days / 3 Nights",
    priceFrom: 19600,
    rating: 4.6,
    reviews: 121,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtgelyYRewK4d5i6do4goCUu74ui1JkQUaB3yHZh8xPw&s=10",
    highlights: ["Periyar boat safari", "Spice plantation trail", "Jeep trek"],
  },
];

export const STORIES = [
  {
    id: "story-houseboat",
    number: "01",
    icon: "sailboat",
    title: "Kettuvallam",
    place: "Alleppey backwaters",
    tagline: "The itinerary is the current",
    story:
      "Coir-rope hulls glide past coconut palms leaning into green water. Aboard a traditional kettuvallam, breakfast is served on deck, herons hang overhead, and a village waves from the bank as the day drifts wherever the canal goes.",
    image:
      "https://images.unsplash.com/photo-1785932413547-cdd1159e1f1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8S2V0dHV2YWxsYW18ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "story-theyyam",
    number: "02",
    icon: "flame",
    title: "Theyyam",
    place: "Kannur backwoods",
    tagline: "Before dawn, a dancer becomes a deity",
    story:
      "Ochre and vermilion cover his face; drums rise as the flames catch. Theyyam isn't staged for visitors — it's a 1,500-year-old ritual you're invited to witness exactly as the village always has, generation after generation.",
    image:
      "https://images.unsplash.com/photo-1543198926-22fea2a870dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGhleXlhbXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "story-kalaripayattu",
    number: "03",
    icon: "swords",
    title: "Kalaripayattu",
    place: "Kalari school, Kochi",
    tagline: "The old art of war, still breathing",
    story:
      "Bare feet cut low across packed red earth. India's oldest martial art moves like breath — coiled, then sudden. A morning session with a gurukkal leaves your shoulders looser than any spa ever could.",
    image:
      "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "story-kathakali",
    number: "04",
    icon: "drama",
    title: "Kathakali",
    place: "Backstage to curtain call",
    tagline: "Faces that speak without a word",
    story:
      "Watch the two-hour transformation first — layers of rice-paste and pigment turning a face into myth. Then the curtain drops, drums quicken, and a single raised eyebrow carries the entire Mahabharata across the stage.",
    image:
      "https://images.unsplash.com/photo-1691075221845-687ff5614e66?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "story-munnar",
    number: "05",
    icon: "leaf",
    title: "Munnar Tea Trail",
    place: "1,600m above sea level",
    tagline: "Green corduroy folded over the hills",
    story:
      "Walk the plantation paths at first light, pluck two leaves and a bud the way pickers have for a century, and watch the mist burn off a valley quilted in tea from ridge to ridge.",
    image:
      "https://images.unsplash.com/photo-1593335663758-4da70281a917?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "story-wayanad",
    number: "06",
    icon: "paw-print",
    title: "Wayanad Wild",
    place: "Muthanga forest range",
    tagline: "Go quiet, let it happen around you",
    story:
      "The jeep track narrows into elephant country. Tuskers part the undergrowth ahead, hornbills call from the canopy, and Wayanad's forest — thick, unhurried, entirely green — doesn't perform for anyone's camera.",
    image:
      "https://plus.unsplash.com/premium_photo-1711255562146-0acdc7d5c659?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
