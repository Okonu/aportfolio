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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, submitted: false, error: null });

        try {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                throw new Error('Please enter a valid email address');
            }

            const trimmedData = {
                name: formData.name.trim(),
                email: formData.email.trim(),
                message: formData.message.trim()
            };

            if (!trimmedData.name || !trimmedData.message) {
                throw new Error('Name and message cannot be empty');
            }

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
            setStatus({
                submitting: false,
                submitted: false,
                error: error.message
            });
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
                        disabled={status.submitting}
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
                        disabled={status.submitting}
                        required
                    />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
                    disabled={status.submitting}
                    required
                ></textarea>
            </div>
            {status.error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-4">
                    {status.error}
                </div>
            )}
            {status.submitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md mb-4">
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
                {status.submitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
};

export default ContactForm;