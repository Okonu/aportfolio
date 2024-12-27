import { useState } from 'react';
import { sendMessage } from '../../services/emailService';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState({
        submitting: false,
        submitted: false,
        error: null
    });

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const trimmedData = {
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim()
        };

        if (!trimmedData.name) return 'Name is required';
        if (!trimmedData.email) return 'Email is required';
        if (!emailRegex.test(trimmedData.email)) return 'Please enter a valid email address';
        if (!trimmedData.message) return 'Message is required';

        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus({ submitting: true, submitted: false, error: null });

        const validationError = validateForm();
        if (validationError) {
            setStatus({
                submitting: false,
                submitted: false,
                error: validationError
            });
            return;
        }

        try {
            const trimmedData = {
                name: formData.name.trim(),
                email: formData.email.trim(),
                message: formData.message.trim()
            };

            const result = await sendMessage(trimmedData);

            if (result.success) {
                setStatus({ submitting: false, submitted: true, error: null });
                setFormData({ name: '', email: '', message: '' });

                setTimeout(() => {
                    setStatus(prev => ({ ...prev, submitted: false }));
                }, 3000);
            } else {
                throw new Error(result.error || 'Failed to send message');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus({
                submitting: false,
                submitted: false,
                error: error.message || 'An unexpected error occurred. Please try again.'
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (status.error) {
            setStatus(prev => ({ ...prev, error: null }));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 disabled:bg-gray-100"
                        disabled={status.submitting}
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 disabled:bg-gray-100"
                        disabled={status.submitting}
                        required
                    />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                </label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 disabled:bg-gray-100"
                    disabled={status.submitting}
                    required
                />
            </div>

            {status.error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                    {status.error}
                </div>
            )}

            {status.submitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
                    Message sent successfully!
                </div>
            )}

            <button
                type="submit"
                disabled={status.submitting}
                className={`w-full py-2 px-4 rounded-md transition-colors ${
                    status.submitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
            >
                {status.submitting ? (
                    <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                    </span>
                ) : (
                    'Send Message'
                )}
            </button>
        </form>
    );
};

export default ContactForm;