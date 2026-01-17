import { Mail, Globe } from 'lucide-react';
import SocialLinks from '../shared/SocialLinks';

const Header = () => {
    return (
        <div className="py-16">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Profile Section */}
                <div className="flex flex-col items-center space-y-6">
                    <img
                        src="/profile.jpg"
                        alt="Profile"
                        className="w-40 h-40 rounded-full object-cover grayscale-[30%] contrast-125 shadow-xl"
                    />

                    <div className="text-center space-y-4">
                        <h1 className="text-3xl font-extralight tracking-tight text-gray-900">
                            Ian Okonu
                        </h1>

                        <p className="text-base text-gray-600 max-w-xl mx-auto">
                            AI & Automation Engineer specializing in building intelligent systems that transform business processes through cutting-edge AI and automation solutions
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="pt-2">
                        <SocialLinks />
                    </div>

                    {/* Book Meeting Button */}
                    <div className="pt-4">
                        <a
                            href="https://synqs.site/book/okonu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
                        >
                            Book a Meeting
                        </a>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6 text-gray-500">
                    <a
                        href="mailto:okonuian@gmail.com"
                        className="flex items-center space-x-2 hover:text-gray-700 transition-colors"
                    >
                        <Mail className="w-4 h-4" />
                        <span className="text-sm">okonuian@gmail.com</span>
                    </a>

                    <div className="hidden sm:block h-4 w-px bg-gray-300"></div>

                    <div className="flex items-center space-x-2">
                        <Globe className="w-4 h-4" />
                        <span className="text-sm">Nairobi, Kenya</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;