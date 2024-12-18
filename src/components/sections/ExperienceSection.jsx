import CardWrapper from '../shared/CardWrapper';
import { ChevronRight } from 'lucide-react';
import { experiences } from '../../data/experience';

const ExperienceSection = () => {
    return (
        <div className="p-6">
            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative flex items-start">
                            {/* Timeline dot */}
                            <div className="absolute left-8 -translate-x-1/2 w-4 h-4 bg-white border-2 border-gray-300 rounded-full"></div>

                            {/* Content */}
                            <div className="ml-16 flex-1">
                                <CardWrapper className="hover:border-gray-300 transition-colors">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                                        <div>
                                            <h3 className="font-mono font-bold">{exp.role}</h3>
                                            <p className="text-gray-600">{exp.company}</p>
                                        </div>
                                        <span className="text-sm text-gray-500 whitespace-nowrap">{exp.period}</span>
                                    </div>
                                    <ul className="space-y-2">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i} className="flex items-start space-x-2">
                                                <ChevronRight className="w-4 h-4 mt-1 text-gray-400 flex-shrink-0" />
                                                <span className="text-gray-600">{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardWrapper>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;