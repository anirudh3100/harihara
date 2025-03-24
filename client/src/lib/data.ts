export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  status: 'ongoing' | 'completed';
  details: string;
  specifications: {
    flooring: string;
    walls: string;
    bathrooms: string;
    kitchen: string;
    windows: string;
    doors: string;
    electrical: string;
    tvTelephone: string;
    additionalFeatures?: string[];
  };
  buildingSpecs: {
    powerBackup: string;
    lifts: string;
    fireSafety: string;
    carWash: string;
    evCharging: string;
    parking: string;
    security: string;
    additionalAmenities?: string[];
  };
  amenityImages: {
    title: string;
    image: string;
    description: string;
  }[];
  locationAdvantages: {
    schools: {
      name: string;
      distance: string;
      type: string;
    }[];
    offices: {
      name: string;
      distance: string;
      type: string;
    }[];
    stores: {
      name: string;
      distance: string;
      type: string;
    }[];
    hospitals: {
      name: string;
      distance: string;
      type: string;
    }[];
  };
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  summary: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sri Sai Viradhya Luxurious 3BHK Flats at UPPAL",
    description: "Your Dream home is ready to move Live the Life You Love",
    image: "https://hariharaestates.com/wp-content/uploads/2024/03/1.jpeg",
    category: "Luxurious Club House | Swimming Pool | Half Basketball Court | Skating Area | Car Washing Facility | Elder's Sitting  Area | Vastu Compliant | ",
    status: "ongoing",
    details: "A comprehensive smart city solution that integrates IoT sensors, data analytics, and automated systems to improve urban living. The project focuses on traffic management, waste management, and energy efficiency.",
    specifications: {
      flooring: "Premium Italian marble in living areas, engineered wood in bedrooms",
      walls: "Premium emulsion paint with textured finish and designer wallpapers in bedrooms",
      bathrooms: "Premium sanitary ware with modern fixtures, anti-skid tiles, and glass partitions",
      kitchen: "Modular kitchen with granite countertop, soft-close cabinets, and built-in appliances",
      windows: "UPVC windows with safety grills and mosquito mesh",
      doors: "Teak wood frame with veneer finish, digital locks for main door",
      electrical: "Modular switches with copper wiring, LED lighting throughout",
      tvTelephone: "Points in all rooms with high-speed internet provision",
      additionalFeatures: [
        "Smart home automation system",
        "Built-in wardrobes in all bedrooms",
        "Balcony with premium railing"
      ]
    },
    buildingSpecs: {
      powerBackup: "100% power backup with smart grid integration and solar panels",
      lifts: "High-speed elevators with smart access control and emergency backup",
      fireSafety: "Advanced fire detection and sprinkler system with smoke detectors",
      carWash: "Automated car wash facility with water recycling system",
      evCharging: "EV charging points in parking with smart metering",
      parking: "Multi-level automated parking system with RFID access",
      security: "24/7 CCTV surveillance with AI-based monitoring and security personnel",
      additionalAmenities: [
        "Swimming pool with temperature control",
        "Fully equipped gymnasium",
        "Indoor sports complex"
      ]
    },
    amenityImages: [
      {
        title: "Swimming Pool",
        image: "https://hariharaestates.com/wp-content/uploads/2022/12/SWIMMING-POOL-min-min.jpg",
        description: "Temperature controlled infinity pool with separate kids section"
      },
      {
        title: "GYM",
        image: "https://hariharaestates.com/wp-content/uploads/2022/12/GYM-min-1024x576-min.png",
        description: "State-of-the-art clubhouse with multiple recreational facilities"
      },
      {
        title: "Sports Complex",
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
        description: "Indoor sports complex with basketball and badminton courts"
      }
    ],
    locationAdvantages: {
      schools: [
        { name: "Kiran International School", distance: "1.2 km", type: "International" },
        { name: "Global Indian International School", distance: "2.5 km", type: "CBSE" },
        { name: "Kendriya Vidyalaya", distance: "3.1 km", type: "CBSE" }
      ],
      offices: [
        { name: "Infosys ", distance: "8.5 km", type: "IT Hub" },
        { name: "Genpact ", distance: "10.2 km", type: "Business District" },
        { name: "Uppal Business Park", distance: "2.8 km", type: "Commercial Zone" }
      ],
      stores: [
        { name: "Big Bazaar", distance: "1.5 km", type: "Supermarket" },
        { name: "Asian Cine Square ", distance: "3.2 km", type: "Shopping Mall" },
        { name: "Metro Super Market", distance: "0.8 km", type: "Daily Needs" }
      ],
      hospitals: [
        { name: "Spark Hospitals", distance: "4.2 km", type: "Multi-specialty" },
        { name: "Ankura Hospital", distance: "3.8 km", type: "Multi-specialty" },
        { name: "Aditya Hospital", distance: "1.2 km", type: "General" }
      ]
    }
  },
  {
    id: 2,
    title: "SRI SAI KAKATIYA Exclusive 2 BHK & 3 BHK Flats at POCHARAM",
    description: "Unmatched Lifestyle Unbeatable Price",
    image: "https://hariharaestates.com/wp-content/uploads/2024/03/CAM08-HQ-Large.png",
    category: "Luxurious Club House | Swimming Pool | Half Basketball Court | Badminton Court | Gym | Dinning Hall | Walking Track | Children's Play Area",
    status: "ongoing",
    details: "Helping organizations embrace digital technologies to streamline operations, enhance customer experience, and drive innovation across all business units.",
    specifications: {
      flooring: "Vitrified tiles with wooden laminate in bedrooms",
      walls: "Smooth finish with designer wallpaper option and textured paint",
      bathrooms: "Contemporary fixtures with glass partitions and anti-skid flooring",
      kitchen: "Modern kitchen with stainless steel sink and modular cabinets",
      windows: "Aluminum sliding windows with mosquito mesh and safety grills",
      doors: "Solid core flush doors with premium hardware",
      electrical: "Concealed wiring with LED lighting and smart switches",
      tvTelephone: "Multiple points with fiber optic connectivity",
      additionalFeatures: [
        "Built-in wardrobes",
        "Balcony with premium railing",
        "Utility area in kitchen"
      ]
    },
    buildingSpecs: {
      powerBackup: "Diesel generator backup for essential services",
      lifts: "Smart elevators with destination control and emergency lighting",
      fireSafety: "Fire alarm and evacuation system with smoke detectors",
      carWash: "Manual car wash facility with water recycling",
      evCharging: "Dedicated EV charging stations with smart metering",
      parking: "Reserved parking spaces with RFID access and visitor parking",
      security: "Biometric access control and security personnel with CCTV",
      additionalAmenities: [
        "Children's play area",
        "Senior citizen's corner",
        "Community hall"
      ]
    },
    amenityImages: [
      {
        title: "Swimming Pool",
        image: "https://hariharaestates.com/wp-content/uploads/2022/12/Swimming-Pool-10-min.png",
        description: "Temperature controlled infinity pool with separate kids section"
      },
      {
        title: "Children Play Area",
        image: "https://hariharaestates.com/wp-content/uploads/2022/12/Swimming-Pool-8-min.png",
        description: "State-of-the-art clubhouse with multiple recreational facilities"
      },
      {
        title: "Sports Complex",
        image: "https://hariharaestates.com/wp-content/uploads/2022/12/Swimming-Pool-11-min.png",
        description: "Indoor sports complex with basketball and badminton courts"
      }
    ],
    locationAdvantages: {
      schools: [
        { name: "Kiran International School", distance: "1.2 km", type: "International" },
        { name: "Global Indian International School", distance: "2.5 km", type: "CBSE" },
        { name: "Kendriya Vidyalaya", distance: "3.1 km", type: "CBSE" }
      ],
      offices: [
        { name: "Infosys ", distance: "8.5 km", type: "IT Hub" },
        { name: "Genpact ", distance: "10.2 km", type: "Business District" },
        { name: "Uppal Business Park", distance: "2.8 km", type: "Commercial Zone" }
      ],
      stores: [
        { name: "Big Bazaar", distance: "1.5 km", type: "Supermarket" },
        { name: "Asian Cine Square ", distance: "3.2 km", type: "Shopping Mall" },
        { name: "Metro Super Market", distance: "0.8 km", type: "Daily Needs" }
      ],
      hospitals: [
        { name: "Spark Hospitals", distance: "4.2 km", type: "Multi-specialty" },
        { name: "Ankura Hospital", distance: "3.8 km", type: "Multi-specialty" },
        { name: "Aditya Hospital", distance: "1.2 km", type: "General" }
      ]
    }
  },
  {
    id: 3,
    title: "Vasant Villas Premium 4 BHK Triplex Villas At KEESARA",
    description: "Experience The Pinnacle of Living",
    image: "https://hariharaestates.com/wp-content/uploads/2024/03/223-EAST-VILLA-HQ-Large.png",
    category: "Luxurious Club House | Retail Supermarket | Swimming Pool | Banquet Hall | Premium Landscape | Creche For Children | A/C Gym | Conference Room",
    status: "ongoing",
    details: "Implementation of solar and wind energy solutions for commercial buildings, including energy storage systems and smart grid integration.",
    specifications: {
      flooring: "Anti-skid tiles with marble flooring in living areas",
      walls: "Weather-proof exterior paint with premium interior finishes",
      bathrooms: "Water-efficient fixtures with premium fittings and glass enclosures",
      kitchen: "Spacious kitchen with utility area and modular design",
      windows: "Double glazed windows for insulation and noise reduction",
      doors: "Security doors with digital locks and premium hardware",
      electrical: "Solar-ready electrical system with smart home integration",
      tvTelephone: "Smart home compatible wiring with fiber optic connectivity",
      additionalFeatures: [
        "Private garden area",
        "Servant's quarter",
        "Home automation system"
      ]
    },
    buildingSpecs: {
      powerBackup: "Solar power backup with battery storage and grid integration",
      lifts: "Energy-efficient smart elevators with emergency backup",
      fireSafety: "Comprehensive fire safety system with smoke detectors",
      carWash: "Eco-friendly car wash station with water recycling",
      evCharging: "Solar-powered EV charging points with smart metering",
      parking: "Covered parking with solar panels and visitor parking",
      security: "Integrated security management system with 24/7 monitoring",
      additionalAmenities: [
        "Private swimming pool",
        "Tennis court",
        "Clubhouse with restaurant"
      ]
    },
    amenityImages: [
      {
        title: "West Facing Villa",
        image: "https://hariharaestates.com/wp-content/uploads/2023/04/223-SYD-WEST-FACING-VILLA-PLANS-Large-min.png",
        description: ""
      },
      {
        title: "East Facing Villa",
        image: "https://hariharaestates.com/wp-content/uploads/2023/04/223-SYD-EAST-FACING-VILLA-PLANS-1-Large-min.png",
        description: ""
      },
      {
        title: "Master Plan",
        image: "https://hariharaestates.com/wp-content/uploads/2023/05/VILLAS-MASTER-PLAN-BROUCHER-Custom-min-2048x1225.jpg",
        description: ""
      }
    ],
    locationAdvantages: {
      schools: [
        { name: "Delhi Public School", distance: "1.2 km", type: "International" },
        { name: "St. Mary's High School", distance: "2.5 km", type: "CBSE" },
        { name: "Narayana Concept School", distance: "3.1 km", type: "CBSE" }
      ],
      offices: [
        { name: "HITEC City", distance: "8.5 km", type: "IT Hub" },
        { name: "Financial District", distance: "10.2 km", type: "Business District" },
        { name: "Uppal Business Park", distance: "2.8 km", type: "Commercial Zone" }
      ],
      stores: [
        { name: "Big Bazaar", distance: "1.5 km", type: "Supermarket" },
        { name: "City Center Mall", distance: "3.2 km", type: "Shopping Mall" },
        { name: "Local Market", distance: "0.8 km", type: "Daily Needs" }
      ],
      hospitals: [
        { name: "Apollo Hospital", distance: "4.2 km", type: "Multi-specialty" },
        { name: "Yashoda Hospital", distance: "3.8 km", type: "Multi-specialty" },
        { name: "Local Clinic", distance: "1.2 km", type: "General" }
      ]
    }
  },
  {
    id: 4,
    title: "Sri Sai Yatika Luxurious 3 BHK Flats at PEERZADIGUDA",
    description: "Resort Like Living !",
    image: "https://hariharaestates.com/wp-content/uploads/2024/03/SAI-YATIKA-REAR-SIDE-VIEW-HQ-Large.png",
    category: "World-Class Club House | Swimming Pool | Badminton Court | Mini Theatre | Conference Hall | Indoor Games | A/C Gymnasium",
    status: "ongoing",
    details: "Development of a state-of-the-art healthcare facility incorporating the latest medical technologies and patient care solutions.",
    specifications: {
      flooring: "Anti-bacterial flooring with premium finishes",
      walls: "Easy-clean wall paint with designer accents",
      bathrooms: "Senior-friendly bathroom fixtures with grab bars",
      kitchen: "Modern pantry with appliances and utility area",
      windows: "UV-protected windows with safety grills",
      doors: "Wide doors for accessibility with premium hardware",
      electrical: "Backup power system with smart controls",
      tvTelephone: "Hospital-grade communication system",
      additionalFeatures: [
        "Accessible design features",
        "Emergency call system",
        "Medical room"
      ]
    },
    buildingSpecs: {
      powerBackup: "Uninterrupted power supply for critical areas with backup",
      lifts: "Hospital beds compatible elevators with emergency backup",
      fireSafety: "Advanced fire suppression system with smoke detectors",
      carWash: "Sanitized vehicle cleaning facility with water recycling",
      evCharging: "Priority EV charging for ambulances and visitors",
      parking: "Emergency vehicle priority parking with visitor spaces",
      security: "Multi-layer security with restricted access zones",
      additionalAmenities: [
        "Medical center",
        "Pharmacy",
        "Emergency response team"
      ]
    },
    amenityImages: [
      {
        title: "Connectivity",
        image: "https://hariharaestates.com/wp-content/uploads/2024/04/conectivity-Large-min-1024x574.png",
        description: "Nearest necessary places that are available in the area"
      },
      {
        title: "Club House",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
        description: "State-of-the-art clubhouse with multiple recreational facilities"
      },
      {
        title: "Sports Complex",
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
        description: "Indoor sports complex with basketball and badminton courts"
      }
    ],
    locationAdvantages: {
      schools: [
        { name: "Princeton Institute of Engineering and Technologies", distance: "1.2 km", type: "College" },
        { name: "Rotterdam International Schools", distance: "2.5 km", type: "International" },
        { name: "Kendriya Vidyalaya", distance: "3.1 km", type: "CBSE" }
      ],
      offices: [
        { name: "Infosys SEZ Campus ", distance: "8.5 km", type: "IT Hub" },
        { name: "Mind Space – Pocharam ", distance: "10.2 km", type: "IT Hub" },
        { name: "Singapore Township ", distance: "2.8 km", type: "Commercial Zone" }
      ],
      stores: [
        { name: "Grill 9 Restaurant", distance: "1.5 km", type: "Restaurant" },
        { name: "Asian Mukta A2 Cinemas, MJR Square ", distance: "3.2 km", type: "Cinemas" },
        { name: "Hotel Tulip Grand", distance: "0.8 km", type: "Restaurant" }
      ],
      hospitals: [
        { name: "Vajra Hospitals", distance: "4.2 km", type: "Multi-specialty" },
        { name: "Cure Hospital", distance: "3.8 km", type: "Multi-specialty" },
        { name: "Neelima Hospital", distance: "1.2 km", type: "General" }
      ]
    }
  }
];

export const news: NewsItem[] = [
  {
    id: 1,
    title: "Company Wins Innovation Award",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e",
    summary: "Our company has been recognized for its innovative approach to sustainable development."
  },
  {
    id: 2,
    title: "New Partnership Announced",
    date: "2024-03-10",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
    summary: "Strategic partnership formed with leading technology provider to enhance smart city solutions."
  },
  {
    id: 3,
    title: "Expansion into New Markets",
    date: "2024-03-05",
    image: "https://images.unsplash.com/photo-1560957123-e8e019c66980",
    summary: "Company announces expansion plans into emerging markets across Asia and Europe."
  }
];

export const aboutImages = [
  "https://images.unsplash.com/photo-1565078872318-f755c31f34c5",
  "https://images.unsplash.com/photo-1551021456-c8b810eed320",
  "https://images.unsplash.com/photo-1558028976-ffe9a675a805"
];