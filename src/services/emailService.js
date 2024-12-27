import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL || 'https://email-service-pearl.vercel.app';

export const sendMessage = async (emailData) => {
    try {
        const response = await axios.post(`${API_URL}/api/send-email`, emailData, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Email service error:', {
            message: error.message,
            response: error.response?.data,
            status: error.response?.status
        });

        return {
            success: false,
            error: error.response?.data?.error ||
                'Failed to send email. Please try again later.'
        };
    }
};