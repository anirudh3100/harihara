import axios from 'axios';

const AZURE_OPENAI_ENDPOINT = import.meta.env.VITE_AZURE_OPENAI_ENDPOINT;
const AZURE_OPENAI_API_KEY = import.meta.env.VITE_AZURE_OPENAI_API_KEY;

// Swyft.cx chatbot context
const SWYFTCX_CONTEXT =
    `You are an AI assistant for Harihara Estates, specializing in real estate and property information. You help customers learn about our properties, amenities, and services.

When asked about ongoing projects just give them only project names and locations and type.
When asked about a property Give the property information first and then give them link to the property page.
Links to the property pages:
●   Sri Sai Kakatiya : /sri-sai-kakatiya
●   Sri Sai Viradhya : /sri-sai-viradhya
●   Sri Sai Yatika : /sri-sai-yatika
●   Vasant Villas : /vasant-villas

Company Name: Harihara Estates

Company Overview: 
●	Experience: Over 30 years in real estate development in East Hyderabad.

●	Projects Delivered: 34

●	Total Area Developed: Over 28 lakh square feet

●	Happy Customers: More than 1,700

Ongoing Projects:
1.	Sri Sai Viradhya

○	Location: Uppal, Hyderabad

○	Type: Luxurious 3 BHK Apartments

○	Project Area: 2 acres

○	Flat Sizes: 1,820 to 2,359 sq. ft.

○	Clubhouse: 12,500 sq. ft.

○	Amenities: Luxurious clubhouse, swimming pool, half basketball court, skating area, car washing facility, elder's sitting area, Vastu compliant

○	TS RERA PR No: P02200003663

○	Possession: Ready to move in 6 months

○	Price: Not specified

○	Contact: 9066832832

2.	Sri Sai Kakatiya

○	Location: Warangal Highway Mainroad, Pocharam-Uppal, Hyderabad

○	Type: Luxurious 2 BHK & 3 BHK Apartments

○	Project Area: 3 acres

○	Flat Sizes: 1,335 to 1,600 sq. ft.

○	Clubhouse: 15,000 sq. ft.

○	Amenities: Luxurious clubhouse, swimming pool, half basketball court, badminton court, gym, dining hall, walking track, children's play area

○	TS RERA PR No: P02200005594

○	Price: Starting from ₹70 lakhs

○	Contact: 9343345345

3.	Vasant Villas

○	Location: Keesara, Hyderabad

○	Type: Luxurious 4 BHK Triplex Gated Community Villas

○	Number of Villas: 69

○	Villa Sizes: 187 to 223 sq. yards

○	Clubhouse: 14,000 sq. ft.

○	Amenities: Luxurious clubhouse, retail supermarket, swimming pool, banquet hall, premium landscape, creche for children, A/C gym, conference room

○	TS RERA PR No: P02200005914

○	Price: Not specified

○	Contact: 8609696969

4.	Sri Sai Yatika

○	Location: Peerzadiguda, Hyderabad

○	Type: Luxurious 3 BHK Apartments

○	Project Area: 2.85 acres

○	Flat Sizes: 1,635 to 2,435 sq. ft.

○	Clubhouse: 15,000 sq. ft.

○	Amenities: World-class clubhouse, swimming pool, badminton court, mini theatre, conference hall, indoor games, A/C gymnasium

○	TS RERA PR No: P02200007470

○	Price: Starting from ₹95 lakhs

○	Contact: 9343234234


Completed Residential Projects:
●	Sri Sai Soukya: Uppal, Hyderabad (Completed in 2020)

●	Sri Sai Anandamai: Uppal, Hyderabad (Completed in 2020)

●	Siri Residency: Tarnaka, Hyderabad (Completed in 2016)

●	Sri Sai Elite: Hitech-city, Hyderabad (Completed in 2015)

●	Sri Sai Classic: Hitech City, Hyderabad (Completed in 2014)

●	Sri Sai Nest: Madhapur, Hyderabad (Completed in 2011)

●	Sri Sai Pragati Pride: St. No.8, Habsiguda, Hyderabad (Completed in 2010)

●	Sri Sai Orchid: East Maredpally, Hyderabad (Completed in 2009)

●	Sri Sai Landmark: St. No.8, Habsiguda, Hyderabad (Completed in 2006)

●	Sri Sai Heights: St. No.8, Habsiguda, Hyderabad (Completed in 2005)

●	Sri Sai Paradise: St. No.8, Habsiguda, Hyderabad (Completed in 2004)

●	Sri Sai Vihar: Nacharam, Hyderabad (Completed in 2003)

●	Sri Sai Towers: Habsiguda, Hyderabad (Completed in 2003)

●	Sri Sai Garden: Ramanthapur, Hyderabad (Completed in 2001)

●	Sri Sai Residency: Maheshwari Nagar, Habsiguda, Hyderabad (Completed in 2001)

●	Sri Sai Residency: Ravindra Nagar, Habsiguda, Hyderabad (Completed in 2000)

●	Sri Sai Enclave: St. No.8, Habsiguda, Hyderabad (Completed in 2000)

●	Sri Sai Nest: Habsiguda

Response Guidelines:
1. Format your responses in a clear, structured way:
   - Use plain text headers in CAPS (no bold, no asterisks)
   - Start each list item with a bullet point (•)
   - Use proper spacing between sections
2. Never use markdown formatting (no **, no *, no #, etc.)
3. Keep responses concise and easy to read
4. Include relevant contact information when appropriate

Content Guidelines:
1. Be professional yet friendly
2. Provide accurate information about properties, locations, and pricing
3. For specific pricing, always recommend contacting the sales team
4. Highlight key features and amenities of properties
5. Mention location advantages and connectivity
6. Keep responses focused on real estate queries

Example Response Format:
PROJECT DETAILS
• Property Name: [Name]
• Location: [Location]
• Type: [Residential/Commercial]
• Configuration: [Details]

AREA OVERVIEW
• [Location details]
• [Connectivity information]
• [Nearby landmarks]

KEY FEATURES
• [Feature 1]
• [Feature 2]
• [Feature 3]

CONTACT INFORMATION
• Phone: [Number]
• Email: [Email]
• Best time to call: [Time]`;

const projects = [
    {
        name: "Sri Sai Viradhya",
        location: "Uppal, Hyderabad",
        description: "Luxurious 3 BHK Apartments",
        bhks: ["3"],
        contact: "9066832832",
        url: "/sri-sai-viradhya"
    },
    {
        name: "Sri Sai Kakatiya",
        location: "Pocharam-Uppal, Hyderabad",
        description: "Luxurious 2 BHK & 3 BHK Apartments",
        bhks: ["2", "3"],
        contact: "9343345345",
        url: "/sri-sai-kakatiya"
    },
    {
        name: "Vasant Villas",
        location: "Keesara, Hyderabad",
        description: "Luxurious 4 BHK Triplex Gated Community Villas",
        bhks: ["4"],
        contact: "8609696969",
        url: "/vasant-villas"
    },
    {
        name: "Sri Sai Yatika",
        location: "Peerzadiguda, Hyderabad",
        description: "Luxurious 3 BHK Apartments",
        bhks: ["3"],
        contact: "9343234234",
        url: "/sri-sai-yatika"
    }
];

// --- Levenshtein Distance Implementation ---
function getLevenshteinDistance(a: string, b: string): number {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    const matrix = [];

    // increment along the first column of each row
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    // increment each column in the first row
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    // Fill in the rest of the matrix
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) == a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, // substitution
                                        Math.min(matrix[i][j - 1] + 1, // insertion
                                                 matrix[i - 1][j] + 1)); // deletion
            }
        }
    }

    return matrix[b.length][a.length];
}

// --- Fuzzy Matching Helper ---
function findBestFuzzyMatch(queryWords: string[], options: string[], maxDistanceRatio: number = 0.4): string | null {
    let bestMatch: string | null = null;
    let minDistance = Infinity;

    for (const option of options) {
        const lowerOption = option.toLowerCase();
        for (const word of queryWords) {
            const distance = getLevenshteinDistance(word, lowerOption);
            // Allow distance up to maxDistanceRatio * length, but at least 1 for short words
            const threshold = Math.max(1, Math.floor(lowerOption.length * maxDistanceRatio));

            if (distance <= threshold && distance < minDistance) {
                 minDistance = distance;
                 bestMatch = option; // Return original casing
            }
        }
    }
    return bestMatch;
}

// Helper function to format phone number for tel: links
function formatPhoneNumber(phone: string): string {
    // Remove any non-digit characters
    const digits = phone.replace(/\D/g, '');
    // Add country code if not present
    return digits.startsWith('91') ? digits : `91${digits}`;
}

function getProjectResponse(message: string) {
    const msg = message.toLowerCase();
    const msgWords = msg.split(/\s+/).filter(w => w.length > 0); // Split message into words

    // --- Enhanced Filtering Logic ---

    // 1. Extract potential filters
    const bhkRegex = /(\d(?:[.,&]?\d)?)\s*bhk/i;
    const bhkMatch = msg.match(bhkRegex);
    const requestedBhks = bhkMatch ? bhkMatch[1].split(/[.,&]/).map(b => b.trim()).filter(b => b) : null;

    const locations = ["Uppal", "Pocharam", "Keesara", "Peerzadiguda"];
    // Find best location match using fuzzy matching (allow ~40% difference)
    const requestedLocation = findBestFuzzyMatch(msgWords, locations, 0.4);

    // 2. Check if specific filters are present
    const hasSpecificFilters = requestedBhks || requestedLocation;
    let filteredProjects = projects;
    let filterDescription = [];

    if (hasSpecificFilters) {
        if (requestedBhks) {
          filteredProjects = filteredProjects.filter(p =>
            requestedBhks.some(reqBhk => p.bhks.includes(reqBhk))
          );
          filterDescription.push(`${requestedBhks.join(' & ')} BHK`);
        }
        if (requestedLocation) {
          // Filter using lowercase comparison based on the *detected* location
          const lowerRequestedLocation = requestedLocation.toLowerCase();
          filteredProjects = filteredProjects.filter(p => p.location.toLowerCase().includes(lowerRequestedLocation));
          filterDescription.push(`in ${requestedLocation}`); // Display original casing
        }

        // 3. Format response based on filtered results
        if (filteredProjects.length > 0) {
          return (
            `Here are the projects matching your criteria (${filterDescription.join(' ')}):<br/><br/>` +
            filteredProjects
              .map(
                (p) => {
                    const formattedPhone = formatPhoneNumber(p.contact);
                    return `🏡 <strong>${p.name}</strong> (${p.location})<br/>${p.description}<br/>Contact: <a href="tel:${formattedPhone}">${p.contact}</a> 
                     <a href="https://wa.me/${formattedPhone}" target="_blank">Chat via WhatsApp</a><br/><a href="${p.url}" target="_blank" rel="noopener noreferrer">View More</a>`
                }
              )
              .join("<br/><br/>")
          );
        } else {
          // Only provide fallback if *specific* filters yielded no results
          return `😕 Sorry, we couldn't find any projects matching your criteria (${filterDescription.join(' ')}). You can browse all our ongoing projects: <br/><br/>` + formatAllProjects();
        }
    }

    // --- Fallback to General Keywords (Fuzzy Logic) ---
    const generalKeywords = ["project", "projects", "homes", "property", "properties", "ongoing", "list", "show"];
    const matchedKeyword = findBestFuzzyMatch(msgWords, generalKeywords, 0.4); // Use fuzzy match

    // Trigger general list only if a general keyword is matched *and* no specific filters were identified
    if (matchedKeyword) {
       return `Here are all our ongoing projects:<br/><br/>` + formatAllProjects();
    }

    // If no relevant query, return null to let the AI handle it
    return null;
}

// Helper function to format all projects
function formatAllProjects() {
  return projects
    .map(
      (p) => {
          const formattedPhone = formatPhoneNumber(p.contact);
          return `🏡 <strong>${p.name}</strong> (${p.location})<br/>${p.description}<br/>Contact: <a href="tel:${formattedPhone}">${p.contact}</a> 
          <a href="https://wa.me/${formattedPhone}" target="_blank">Chat via WhatsApp</a><br/><a href="${p.url}" target="_blank" rel="noopener noreferrer">View More</a>`
      }
    )
    .join("<br/><br/>");
}

export const sendMessage = async (message: string) => {
    if (!AZURE_OPENAI_ENDPOINT || !AZURE_OPENAI_API_KEY) {
        console.error('Azure OpenAI credentials are missing. Please check your .env file.');
        throw new Error('Azure OpenAI credentials are not configured');
    }

    try {
        const staticReply = getProjectResponse(message);
        if (staticReply !== null) { // Check if static response exists
            return staticReply;
        }

        console.log('Sending request to:', AZURE_OPENAI_ENDPOINT);
        const response = await axios.post(
            `${AZURE_OPENAI_ENDPOINT}/openai/deployments/gpt-4o/chat/completions?api-version=2024-02-15-preview`,
            {
                messages: [
                    {
                        role: "system",
                        content: SWYFTCX_CONTEXT
                    },
                    {
                        role: "user",
                        content: message
                    }
                ],
                temperature: 0.7,
                max_tokens: 500,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': AZURE_OPENAI_API_KEY
                }
            }
        );

        if (!response.data?.choices?.[0]?.message?.content) {
            console.error('Unexpected API response structure:', response.data);
            throw new Error('Invalid API response format');
        }

        return response.data.choices[0].message.content;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios Error:', {
                message: error.message,
                response: error.response?.data,
                status: error.response?.status,
                headers: error.response?.headers
            });
        } else {
            console.error('Error:', error);
        }
        throw new Error('Failed to process your request');
    }
}; 