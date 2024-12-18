import { Grid, Mail, Globe } from 'lucide-react';
import SocialLinks from '../shared/SocialLinks';

const Header = () => {
    return (
        <div className="border border-gray-200 rounded-md mb-8">
            <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                            <Grid className="w-6 h-6" />
                            <h1 className="text-xl font-mono">Ian Okonu</h1>
                        </div>
                        <p className="text-sm text-gray-600 font-mono mb-4">
                            Backend Engineer crafting scalable solutions
                        </p>
                        <SocialLinks />
                    </div>
                    <img
                        src="/profile.jpg"
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-2 border-gray-200 object-cover"
                    />
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <a
                        href="mailto:okonuian@gmail.com"
                        className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
                    >
                        <Mail className="w-4 h-4" />
                        <span>okonuian@gmail.com</span>
                    </a>
                    <span>•</span>
                    <span className="flex items-center space-x-2">
            <Globe className="w-4 h-4" />
            <span>Nairobi, Kenya</span>
          </span>
                </div>
            </div>
        </div>
    );
};

export default Header;