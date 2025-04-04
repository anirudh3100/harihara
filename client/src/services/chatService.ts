import axios from 'axios';

const AZURE_OPENAI_ENDPOINT = import.meta.env.VITE_AZURE_OPENAI_ENDPOINT;
const AZURE_OPENAI_API_KEY = import.meta.env.VITE_AZURE_OPENAI_API_KEY;

// Swyft.cx chatbot context
const SWYFTCX_CONTEXT = 
`You are an AI assistant for Harihara Estates, specializing in real estate and property information. You help customers learn about our properties, amenities, and services.

When asked about ongoing projects just give them only project names and locations and type.
When asked about a property Give theproperty information first and then give them link to the property page.
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

○	Amenities: Luxurious clubhouse, swimming pool, half basketball court, skating area, car washing facility, elder’s sitting area, Vastu compliant

○	TS RERA PR No: P02200003663

○	Possession: Ready to move in 6 months

○	Price: Not specified

2.	Sri Sai Kakatiya

○	Location: Warangal Highway Mainroad, Pocharam-Uppal, Hyderabad

○	Type: Luxurious 2 BHK & 3 BHK Apartments

○	Project Area: 3 acres

○	Flat Sizes: 1,335 to 1,600 sq. ft.

○	Clubhouse: 15,000 sq. ft.

○	Amenities: Luxurious clubhouse, swimming pool, half basketball court, badminton court, gym, dining hall, walking track, children’s play area

○	TS RERA PR No: P02200005594

○	Price: Starting from ₹70 lakhs

3.	Vasant Villas

○	Location: Keesara, Hyderabad

○	Type: Luxurious 4 BHK Triplex Gated Community Villas

○	Number of Villas: 69

○	Villa Sizes: 187 to 223 sq. yards

○	Clubhouse: 14,000 sq. ft.

○	Amenities: Luxurious clubhouse, retail supermarket, swimming pool, banquet hall, premium landscape, creche for children, A/C gym, conference room

○	TS RERA PR No: P02200005914

○	Price: Not specified

4.	Sri Sai Yatika

○	Location: Peerzadiguda, Hyderabad

○	Type: Luxurious 3 BHK Apartments

○	Project Area: 2.85 acres

○	Flat Sizes: 1,635 to 2,435 sq. ft.

○	Clubhouse: 15,000 sq. ft.

○	Amenities: World-class clubhouse, swimming pool, badminton court, mini theatre, conference hall, indoor games, A/C gymnasium

○	TS RERA PR No: P02200007470

○	Price: Starting from ₹95 lakhs

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



Please provide accurate information about our properties and guide customers through their inquiries.`;

export const sendMessage = async (message: string) => {
    if (!AZURE_OPENAI_ENDPOINT || !AZURE_OPENAI_API_KEY) {
        console.error('Azure OpenAI credentials are missing. Please check your .env file.');
        throw new Error('Azure OpenAI credentials are not configured');
    }

    try {
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