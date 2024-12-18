import { User, Briefcase, Layout, Code } from 'lucide-react';

const TabNavigation = ({ activeSection, setActiveSection }) => {
    const tabs = [
        { id: 'about', icon: User, label: 'About' },
        { id: 'experience', icon: Briefcase, label: 'Experience' },
        { id: 'projects', icon: Layout, label: 'Projects' },
        { id: 'skills', icon: Code, label: 'Skills' }
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
            {tabs.map(({ id, icon: Icon, label }) => (
                <button
                    key={id}
                    onClick={() => setActiveSection(id)}
                    className={`
            px-4 py-3 text-center text-sm border border-gray-200 rounded-md 
            transition-colors flex items-center justify-center space-x-2
            ${activeSection === id
                        ? 'bg-gray-100 border-gray-300 font-medium'
                        : 'hover:bg-gray-50'
                    }
          `}
                >
                    <Icon className={`w-4 h-4 ${activeSection === id ? 'text-gray-700' : 'text-gray-500'}`} />
                    <span>{label}</span>
                </button>
            ))}
        </div>
    );
};

export default TabNavigation;