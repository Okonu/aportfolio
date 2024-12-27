import { useState } from 'react';
import Header from './components/layout/Header';
import TabNavigation from './components/layout/TabNavigation';
import AboutSection from './components/sections/AboutSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';

const App = () => {
    const [activeSection, setActiveSection] = useState('about');

    const renderSection = () => {
        switch (activeSection) {
            case 'about':
                return <AboutSection />;
            case 'experience':
                return <ExperienceSection />;
            case 'projects':
                return <ProjectsSection />;
            case 'skills':
                return <SkillsSection />;
            default:
                return <AboutSection />;
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-[1920px] mx-auto p-4 md:p-6 lg:p-8">
                <Header />
                <TabNavigation
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                />
                <div className="border border-gray-200 rounded-md">
                    {renderSection()}
                </div>
            </div>
        </div>
    );
};

export default App;