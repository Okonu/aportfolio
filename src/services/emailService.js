import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL || 'https://email-service-pearl.vercel.app';

export const sendMessage = async (emailData) => {
    try {
        const response = await axios.post(`${API_URL}/api/send-email`, emailData);
        return response.data;
    } catch (error) {
        console.error('Error sending email:', error.response ? error.response.data : error.message);
        return {
            success: false,
            error: error.response?.data?.error || 'Failed to send email'
        };
    }
};