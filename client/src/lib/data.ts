export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  status: 'ongoing' | 'completed';
  location: string;
  price: string;
  category: string;
  buildingSpecs: {
    powerBackup: string;
    lifts: string;
    security: string;
  };
  realEstateSpecs: {
    totalUnits: string;
    unitTypes: string;
    totalArea: string;
    possessionDate: string;
  };
  amenities: string[];
  connectivity: {
    title: string;
    items: string[];
  }[];
  specifications: {
    title: string;
    items: string[];
  }[];
  floorPlans: {
    title: string;
    image: string;
  }[];
  masterPlan: string;
  reraNumber: string;
  size: string;
  type: string;
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
    id: "1",
    title: "Sri Sai Viradhya",
    description: "Spread across 2.06 acres, Viradhya is a modern residential project located at Uppal. It is the only 10 floor residential gated community in the neighbourhood, offering a perfect blend of luxury and convenience.",
    image: "/srisaiviradhya/main.jpeg",
    status: "ongoing",
    location: "Uppal, Hyderabad",
    price: "₹ 1.25 Cr Onwards*",
    category: "Swimming Pool|Gym|Security|Club House|Children's Play Area|Indoor Games|Temple|Parking",
    buildingSpecs: {
      powerBackup: "100% DG backup for lights and fans",
      lifts: "High speed automatic passenger/service lifts",
      security: "24/7 security with surveillance cameras"
    },
    realEstateSpecs: {
      totalUnits: "180",
      unitTypes: "3 BHK",
      totalArea: "2.06 Acres",
      possessionDate: "Ready To Move"
    },
    amenities: [
      "Swimming Pool",
      "Gym",
      "Security",
      "Club House",
      "Children's Play Area",
      "Indoor Games",
      "Temple",
      "Parking"
    ],
    connectivity: [
      {
        title: "Schools",
        items: [
          "Kiran International School (5 min)",
          "Global Indian International School (5 min)",
          "Kendriya Vidyalaya (10 min)",
          "Siddhartha Public School (5 min)",
          "Sri Chaitanya Techno School (5 min)"
        ]
      },
      {
        title: "Offices",
        items: [
          "Infosys (25 min)",
          "Genpact (15 min)",
          "Survey Of India (10 min)",
          "NGRI (15 min)"
        ]
      },
      {
        title: "Stores",
        items: [
          "Big Bazaar (2 min)",
          "Asian Cine Square (10 min)",
          "Decathon Sports (2 min)",
          "Metro Super Market (10 min)"
        ]
      },
      {
        title: "Hospitals",
        items: [
          "Spark Hospitals (15 min)",
          "Ankura Hospital (2 min)",
          "Aditya Hospital (5 min)",
          "Apex Hospital (5 min)"
        ]
      }
    ],
    specifications: [
      {
        title: "Flat Specifications",
        items: [
          "800 x 800 mm vitrified tiles",
          "Cement blocks with 8\" thick external walls",
          "Premium CP fittings",
          "Granite counter top in kitchen",
          "UPVC sliding windows",
          "Teakwood doors",
          "Concealed copper wiring",
          "TV and data points"
        ]
      },
      {
        title: "Building Specifications",
        items: [
          "100% DG backup",
          "High speed lifts",
          "Fire safety system",
          "Car wash facility",
          "Electric charging station",
          "Basement parking",
          "24/7 security"
        ]
      }
    ],
    floorPlans: [
      { title: "Floor plan", image: "/srisaiviradhya/1.jpeg" },
      { title: "Floor plan", image: "/srisaiviradhya/2.jpeg" },
      { title: "Floor plan", image: "/srisaiviradhya/3.jpeg" },
      { title: "Floor plan", image: "/srisaiviradhya/4.jpeg" },
      { title: "Floor plan", image: "/srisaiviradhya/5.jpeg" },
      { title: "Floor plan", image: "/srisaiviradhya/6.jpeg" },
      { title: "Floor plan", image: "/srisaiviradhya/7.jpeg" },
      
    ],
    masterPlan: "/srisaiviradhya/Masterplan.jpg",
    reraNumber: "P02200003663",
    size: "1820 Sft - 2359 Sft",
    type: "3 BHK"
  },
  {
    id: "2",
    title: "Sri Sai Kakatiya",
    description: "Hari Hara's Sri Sai Kakatiya instantly captivates with its unique presence in Pocharam, boasting dramatic views along Hyderabad-Warangal NH 163 and an iconic eastern skyline.",
    image: "/srisaikakatiya/main.png",
    status: "ongoing",
    location: "Pocharam, Hyderabad",
    price: "₹ 70 Lakhs* Onwards",
    category: "Cricket Practice Pitch|Mini Golf|Outdoor Fitness Station|Skating Rink|Swimming Pool|Gym|Security",
    buildingSpecs: {
      powerBackup: "100% DG backup for lights and fans",
      lifts: "High speed automatic passenger/service lifts",
      security: "24/7 security with surveillance cameras"
    },
    realEstateSpecs: {
      totalUnits: "360",
      unitTypes: "2 & 3 BHK",
      totalArea: "3 Acres",
      possessionDate: "Under Construction"
    },
    amenities: [
      "Cricket Practice Pitch",
      "Mini Golf",
      "Outdoor Fitness Station",
      "Skating Rink",
      "Swimming Pool",
      "Gym",
      "Security"
    ],
    connectivity: [
      {
        title: "Connectivity",
        items: [
          "Shamshabad Airport",
          "Uppal Metro Station",
          "Uppal Bus Station",
          "200M From Warangal Highway",
          "Secunderabad Railway Station"
        ]
      }
    ],
    specifications: [
      {
        title: "Flat Specifications",
        items: [
          "Premium flooring",
          "Cement blocks with 8\" thick external walls",
          "Premium CP fittings",
          "Granite counter top in kitchen",
          "UPVC sliding windows",
          "Teakwood doors",
          "Concealed copper wiring",
          "TV and data points"
        ]
      },
      {
        title: "Building Specifications",
        items: [
          "100% DG backup",
          "High speed lifts",
          "Fire safety system",
          "Car wash facility",
          "Electric charging station",
          "Basement parking",
          "24/7 security"
        ]
      }
    ],
    floorPlans: [
      { title: "2 BHK", image: "/srisaikakatiya/BLOCK-A-TYPICAL-FLOOR-PLAN.png" },
      { title: "3 BHK", image: "/srisaikakatiya/BLOCK-B-TYPICAL-FLOOR-PLAN.png" }
    ],
    masterPlan: "/srisaikakatiya/masterplan.png",
    reraNumber: "P02200005594",
    size: "1335 to 1600 sft",
    type: "2 & 3 BHK"
  },
  {
    id: "3",
    title: "Vasant Villas",
    description: "Experience luxury living at its finest with Vasant Villas, where every detail is crafted to perfection.",
    image: "/vasantvillas/main.png",
    status: "ongoing",
    location: "East Hyderabad",
    price: "₹ 1.5 Cr* Onwards",
    category: "Swimming Pool|Gym|Security|Club House|Children's Play Area|Indoor Games|Temple|Parking",
    buildingSpecs: {
      powerBackup: "100% DG backup for lights and fans",
      lifts: "High speed automatic passenger/service lifts",
      security: "24/7 security with surveillance cameras"
    },
    realEstateSpecs: {
      totalUnits: "120",
      unitTypes: "3 & 4 BHK Villas",
      totalArea: "5 Acres",
      possessionDate: "Under Construction"
    },
    amenities: [
      "Swimming Pool",
      "Gym",
      "Security",
      "Club House",
      "Children's Play Area",
      "Indoor Games",
      "Temple",
      "Parking"
    ],
    connectivity: [
      {
        title: "Connectivity",
        items: [
          "Close to major highways",
          "Easy access to metro stations",
          "Well-connected to city center",
          "Nearby shopping complexes"
        ]
      }
    ],
    specifications: [
      {
        title: "Villa Specifications",
        items: [
          "Premium flooring",
          "Cement blocks with 8\" thick external walls",
          "Premium CP fittings",
          "Granite counter top in kitchen",
          "UPVC sliding windows",
          "Teakwood doors",
          "Concealed copper wiring",
          "TV and data points"
        ]
      },
      {
        title: "Building Specifications",
        items: [
          "100% DG backup",
          "High speed lifts",
          "Fire safety system",
          "Car wash facility",
          "Electric charging station",
          "Basement parking",
          "24/7 security"
        ]
      }
    ],
    floorPlans: [
      { title: "3 BHK Villa", image: "/floor-plans/vasant-3bhk.jpg" },
      { title: "4 BHK Villa", image: "/floor-plans/vasant-4bhk.jpg" }
    ],
    masterPlan: "/master-plans/vasant-villas.jpg",
    reraNumber: "P02200005595",
    size: "2500 to 3500 sft",
    type: "3 & 4 BHK Villas"
  },
  {
    id: "4",
    title: "Sri Sai Yatika",
    description: "Discover the perfect blend of comfort and luxury at Sri Sai Yatika, where modern living meets traditional values.",
    image: "/srisaiviradhya/main.jpeg",
    status: "ongoing",
    location: "Uppal, Hyderabad",
    price: "₹ 1.25 Cr Onwards*",
    category: "Swimming Pool|Gym|Security|Club House|Children's Play Area|Indoor Games|Temple|Parking",
    buildingSpecs: {
      powerBackup: "100% DG backup for lights and fans",
      lifts: "High speed automatic passenger/service lifts",
      security: "24/7 security with surveillance cameras"
    },
    realEstateSpecs: {
      totalUnits: "240",
      unitTypes: "2 & 3 BHK",
      totalArea: "3.5 Acres",
      possessionDate: "Under Construction"
    },
    amenities: [
      "Swimming Pool",
      "Gym",
      "Security",
      "Club House",
      "Children's Play Area",
      "Indoor Games",
      "Temple",
      "Parking"
    ],
    connectivity: [
      {
        title: "Connectivity",
        items: [
          "Close to major highways",
          "Easy access to metro stations",
          "Well-connected to city center",
          "Nearby shopping complexes"
        ]
      }
    ],
    specifications: [
      {
        title: "Flat Specifications",
        items: [
          "Premium flooring",
          "Cement blocks with 8\" thick external walls",
          "Premium CP fittings",
          "Granite counter top in kitchen",
          "UPVC sliding windows",
          "Teakwood doors",
          "Concealed copper wiring",
          "TV and data points"
        ]
      },
      {
        title: "Building Specifications",
        items: [
          "100% DG backup",
          "High speed lifts",
          "Fire safety system",
          "Car wash facility",
          "Electric charging station",
          "Basement parking",
          "24/7 security"
        ]
      }
    ],
    floorPlans: [
      { title: "2 BHK", image: "/floor-plans/yatika-2bhk.jpg" },
      { title: "3 BHK", image: "/floor-plans/yatika-3bhk.jpg" }
    ],
    masterPlan: "/master-plans/yatika.jpg",
    reraNumber: "P02200005596",
    size: "1200 to 1800 sft",
    type: "2 & 3 BHK"
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