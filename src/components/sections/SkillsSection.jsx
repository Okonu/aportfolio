import CardWrapper from '../shared/CardWrapper';
import { ChevronRight, Award } from 'lucide-react';
import { skills } from '../../data/skills';

const SkillsSection = () => {
    const { languages, frameworks, tools, talks } = skills;

    return (
        <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <CardWrapper>
                    <h3 className="font-mono font-bold mb-3">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                        {languages.map((skill) => (
                            <span key={skill} className="text-sm px-2 py-1 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                {skill}
              </span>
                        ))}
                    </div>
                </CardWrapper>

                <CardWrapper>
                    <h3 className="font-mono font-bold mb-3">Frameworks</h3>
                    <div className="flex flex-wrap gap-2">
                        {frameworks.map((skill) => (
                            <span key={skill} className="text-sm px-2 py-1 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                {skill}
              </span>
                        ))}
                    </div>
                </CardWrapper>

                <CardWrapper>
                    <h3 className="font-mono font-bold mb-3">Tools & Platforms</h3>
                    <div className="flex flex-wrap gap-2">
                        {tools.map((skill) => (
                            <span key={skill} className="text-sm px-2 py-1 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                {skill}
              </span>
                        ))}
                    </div>
                </CardWrapper>
            </div>

            <CardWrapper>
                <h3 className="font-mono font-bold mb-4">Technical Talks</h3>
                <ul className="space-y-3">
                    {talks.map((talk, index) => (
                        <li key={index} className="flex items-start space-x-2">
                            <ChevronRight className="w-4 h-4 mt-1 text-gray-400" />
                            <div>
                                <p className="font-medium">{talk.title}</p>
                                <p className="text-sm text-gray-500">{talk.event}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </CardWrapper>
        </div>
    );
};

export default SkillsSection;