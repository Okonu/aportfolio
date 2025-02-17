import { Briefcase, MapPin } from 'lucide-react';
import { experiences } from '../../data/experience';

const ExperienceSection = () => {
    return (
        <div className="py-16 max-w-5xl mx-auto px-4">
            <div className="space-y-12">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-3 border-b-2 border-gray-800 pb-2">
                        <Briefcase className="w-6 h-6 text-gray-700" />
                        <h2 className="text-2xl font-semibold text-gray-800">Professional Journey</h2>
                    </div>
                </div>

                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="
                            grid md:grid-cols-3 gap-6
                            border-l-4 border-gray-200
                            pl-6 md:pl-0
                            relative
                            before:absolute before:left-0 before:top-2
                            before:w-4 before:h-4 before:bg-gray-300
                            before:rounded-full
                        "
                    >
                        <div className="md:text-right pr-6 hidden md:block">
                            <p className="text-sm text-gray-500">{exp.period}</p>
                            <div className="flex md:justify-end items-center gap-2 text-gray-600 text-sm mt-1">
                                <MapPin className="w-4 h-4 text-gray-400" />
                                <span>{exp.location}</span>
                            </div>
                        </div>

                        <div className="md:col-span-2 space-y-4">
                            <div>
                                <h3 className="text-xl font-medium text-gray-800">{exp.role}</h3>
                                <p className="text-gray-600">{exp.company}</p>

                                {/* Mobile Location and Period */}
                                <div className="md:hidden flex items-center gap-3 text-sm text-gray-500 mt-2">
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        <span>{exp.location}</span>
                                    </div>
                                    <span>•</span>
                                    <span>{exp.period}</span>
                                </div>
                            </div>

                            <ul className="space-y-2 text-gray-600 text-sm">
                                {exp.achievements.map((achievement, i) => (
                                    <li
                                        key={i}
                                        className="
                                            relative pl-5
                                            before:absolute before:left-0 before:top-2
                                            before:w-2 before:h-2 before:bg-gray-400
                                            before:rounded-full
                                        "
                                    >
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceSection;