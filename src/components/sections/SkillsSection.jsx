import { skills } from '../../data/skills';

const SkillsSection = () => {
    const { aiAndAutomation, mlAndData, languages, frameworks, infrastructure, databases } = skills;

    const SkillCategory = ({ title, skillList }) => (
        <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-lg font-medium text-gray-800">{title}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                    {skillList.map((skill) => (
                        <span
                            key={skill}
                            className="
                                text-xs
                                px-3 py-1
                                bg-gray-50
                                text-gray-600
                                rounded-full
                                hover:bg-gray-100
                                transition-colors
                            "
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className="py-16 max-w-5xl mx-auto px-4 space-y-12">
            {/* Section Title */}
            <div className="text-center">
                <h2 className="text-2xl font-semibold text-gray-800 inline-block border-b-2 border-gray-800 pb-2">
                    Professional Skills
                </h2>
            </div>

            {/* AI & Automation Skills (Featured) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <SkillCategory title="AI & Automation" skillList={aiAndAutomation} />
                <SkillCategory title="Machine Learning & Data" skillList={mlAndData} />
            </div>

            {/* Technical Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <SkillCategory title="Languages" skillList={languages} />
                <SkillCategory title="Frameworks" skillList={frameworks} />
                <SkillCategory title="Infrastructure" skillList={infrastructure} />
                <SkillCategory title="Databases" skillList={databases} />
            </div>

        </div>
    );
};

export default SkillsSection;