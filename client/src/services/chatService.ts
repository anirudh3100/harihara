import axios from 'axios';

const AZURE_OPENAI_ENDPOINT = import.meta.env.VITE_AZURE_OPENAI_ENDPOINT;
const AZURE_OPENAI_API_KEY = import.meta.env.VITE_AZURE_OPENAI_API_KEY;

// Swyft.cx chatbot context
const SWYFTCX_CONTEXT = 
`You are an AI assistant for Harihara Estates, specializing in real estate and property information. You help customers learn about our properties, amenities, and services.

Key Information:
1. Properties:
   - Sri Sai Kakatiya
   - Vasant Villas
   - Sri Sai Viradhya
   - Sri Sai Yatika

2. Services:
   - Property Information
   - Amenities Details
   - Location Advantages
   - Pricing Details
   - Booking Information

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