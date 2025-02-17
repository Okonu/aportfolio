import { Github, Linkedin, BookOpen, Terminal } from 'lucide-react';

const SocialLinks = () => {
    const links = [
        { icon: Github, url: 'https://github.com/okonu', label: 'GitHub' },
        { icon: Linkedin, url: 'https://www.linkedin.com/in/okonu/', label: 'LinkedIn' },
        { icon: BookOpen, url: 'https://medium.com/@theweirdo', label: 'Blog' },
        { icon: Terminal, url: 'https://okonu.hashnode.dev/', label: 'Hashnode' }
    ];

    return (
        <div className="flex items-center space-x-4">
            {links.map(({ icon: Icon, url, label }) => (
                <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-gray-50 p-2 rounded-md transition-colors"
                    aria-label={label}
                >
                    <Icon className="w-5 h-5 text-gray-600" />
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;