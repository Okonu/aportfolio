import { Mic } from 'lucide-react';
import { skills } from '../../data/skills';

const SkillsSection = () => {
    const { languages, frameworks, tools, talks } = skills;

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

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <SkillCategory title="Languages" skillList={languages} />
                <SkillCategory title="Frameworks" skillList={frameworks} />
                <SkillCategory title="Tools & Platforms" skillList={tools} />
            </div>

            {/* Technical Talks */}
            <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col items-center text-center space-y-6">
                    <div className="flex flex-col items-center space-y-2">
                        <Mic className="w-6 h-6 text-gray-500" />
                        <h3 className="text-lg font-medium text-gray-800">Technical Talks</h3>
                    </div>
                    <ul className="space-y-4 w-full max-w-md">
                        {talks.map((talk, index) => (
                            <li
                                key={index}
                                className="
                                    flex flex-col items-center
                                    text-center
                                    p-4
                                    bg-gray-50
                                    rounded-lg
                                    hover:bg-gray-100
                                    transition-colors
                                    group
                                "
                            >
                                <div className="flex items-center justify-center gap-2 mb-1">
                                    <p className="font-medium text-gray-800">{talk.title}</p>
                                    {talk.link && (
                                        <a
                                            href={talk.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                                                text-gray-500
                                                hover:text-blue-600
                                                transition-colors
                                            "
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4v5h5M5 5l5 5m0 0h5V5m-5 5L5 5"
                                                />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                                <p className="text-sm text-gray-500">
                                    {talk.event} | {talk.location}, {talk.year}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;