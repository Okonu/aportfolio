import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL || 'https://email-service-pearl.vercel.app';

export const sendMessage = async (emailData) => {
    try {
        const response = await axios.post(`${API_URL}/api/send-email`, emailData, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error('Server Error:', error.response.data);
            console.error('Status:', error.response.status);
        } else if (error.request) {
            console.error('Network Error:', error.request);
        } else {
            console.error('Error:', error.message);
        }

        return {
            success: false,
            error: error.response?.data?.error ||
                error.response?.data?.message ||
                'Failed to send email. Please try again later.'
        };
    }
};