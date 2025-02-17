import CardWrapper from '../shared/CardWrapper';
import ContactForm from '../shared/ContactForm';
import { aboutData } from '../../data/about';

const AboutSection = () => {
    const hasSectionData = (sectionKey) => {
        const section = aboutData[sectionKey];
        return section && Array.isArray(section) && section.length > 0;
    };

    const renderDynamicSections = () => {
        const sections = [
            {
                key: 'education',
                title: 'Education',
                render: (edu, index) => (
                    <div key={index} className="text-center space-y-2">
                        <div>
                            <p className="font-medium text-gray-800">{edu.degree}</p>
                            <p className="text-sm text-gray-600">{edu.school}</p>
                            <span className="text-sm text-gray-500">{edu.period}</span>
                        </div>
                        {edu.details && <p className="text-sm text-gray-500 italic">{edu.details}</p>}
                    </div>
                )
            }
        ];

        const validSections = sections.filter(section => hasSectionData(section.key));

        const gridClasses = validSections.length > 1
            ? "grid grid-cols-2 gap-8"
            : (validSections.length === 1 ? "grid grid-cols-1" : "");

        return (
            <div className={gridClasses}>
                {validSections.map((section, index) => (
                    <div key={section.key} className={validSections.length > 1 ? "space-y-6" : ""}>
                        <CardWrapper className="w-full">
                            <div className="flex flex-col items-center justify-center h-full">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2 w-full text-center">
                                    {section.title}
                                </h3>
                                <div className="w-full space-y-4">
                                    {aboutData[section.key]?.map(section.render)}
                                </div>
                            </div>
                        </CardWrapper>
                    </div>
                ))}
            </div>
        );
    };

    const renderMultiColumnSections = () => {
        const sections = [
            {
                key: 'entrepreneurialJourney',
                title: 'Entrepreneurial Undertakings',
                existsCheck: () => aboutData.entrepreneurialJourney &&
                    aboutData.entrepreneurialJourney.undertakings?.length > 0,
                render: () => (
                    <CardWrapper className="w-full">
                        <div className="flex flex-col items-center justify-center h-full">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2 w-full text-center">
                                Entrepreneurial Undertakings
                            </h3>
                            <div className="w-full space-y-6">
                                {aboutData.entrepreneurialJourney.undertakings?.map((undertaking, index) => (
                                    <div key={index} className="border-b pb-4 last:border-b-0 text-center">
                                        <div className="flex flex-col items-center">
                                            <div className="mb-2">
                                                <h4 className="font-medium text-gray-800">{undertaking.name}</h4>
                                                <p className="text-sm text-gray-600">{undertaking.period}</p>
                                            </div>
                                            <span className={`
                                                text-xs px-2 py-1 rounded-full mb-2
                                                ${undertaking.status === 'Closed' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}
                                            `}>
                                                {undertaking.status}
                                            </span>
                                        </div>
                                        <p className="mt-2 text-sm text-gray-700">{undertaking.initialConcept}</p>
                                        <p className="mt-2 text-sm text-gray-600"><strong>Result:</strong> {undertaking.result}</p>
                                        <ul className="mt-2 space-y-1 text-sm text-gray-600 flex flex-col items-center">
                                            {undertaking.learningOutcomes?.map((outcome, i) => (
                                                <li key={i} className="flex items-center">
                                                    <svg className="w-3 h-3 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    {outcome}
                                                </li>
                                            ))}
                                        </ul>
                                        {undertaking.moreInfoLink && (
                                            <a
                                                href={undertaking.moreInfoLink}
                                                className="mt-2 inline-block text-sm text-blue-600 hover:text-blue-800 transition-colors"
                                            >
                                                Project Details
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardWrapper>
                )
            },
            {
                key: 'hackathons',
                title: 'Hackathon Achievements',
                existsCheck: () => aboutData.hackathons && aboutData.hackathons.length > 0,
                render: () => (
                    <CardWrapper className="w-full">
                        <div className="flex flex-col items-center justify-center h-full">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2 w-full text-center">
                                Hackathon Achievements
                            </h3>
                            <div className="w-full space-y-6">
                                {aboutData.hackathons?.map((hackathon, index) => (
                                    <div key={index} className="border-b pb-4 last:border-b-0 text-center">
                                        <div className="flex flex-col items-center">
                                            <div className="mb-2">
                                                <h4 className="font-medium text-gray-800">{hackathon.name}</h4>
                                                <p className="text-sm text-gray-600">{hackathon.period} | {hackathon.organizer}</p>
                                            </div>
                                            <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full mb-2">
                                                {hackathon.achievement}
                                            </span>
                                        </div>
                                        <div className="mt-2">
                                            <p className="text-sm font-medium text-gray-700">{hackathon.projectName}</p>
                                            <p className="text-sm text-gray-600 mt-1">{hackathon.description}</p>
                                        </div>
                                        <div className="mt-2 flex flex-wrap gap-2 justify-center">
                                            {hackathon.technologies?.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        {hackathon.moreInfoLink && (
                                            <a
                                                href={hackathon.moreInfoLink}
                                                className="mt-2 inline-block text-sm text-blue-600 hover:text-blue-800 transition-colors"
                                            >
                                                Project Details
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardWrapper>
                )
            }
        ];

        const validSections = sections.filter(section => section.existsCheck());

        const gridClasses = validSections.length > 1
            ? "grid grid-cols-2 gap-8"
            : (validSections.length === 1 ? "grid grid-cols-1" : "");

        return (
            <div className={gridClasses}>
                {validSections.map((section, index) => (
                    <div
                        key={section.key}
                        className={validSections.length > 1 ? "space-y-6" : ""}
                    >
                        {section.render()}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="p-6 space-y-8 max-w-6xl mx-auto">
            <p className="text-gray-600 text-center text-lg leading-relaxed max-w-2xl mx-auto">
                {aboutData.bio}
            </p>

            {renderDynamicSections()}

            {renderMultiColumnSections()}

            {/* Community Engagements */}
            {hasSectionData('communityEngagements') && (
                <CardWrapper className="w-full">
                    <div className="flex flex-col items-center justify-center h-full">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2 w-full text-center">
                            Community Engagements
                        </h3>
                        <div className="w-full space-y-6">
                            {aboutData.communityEngagements?.map((engagement, index) => (
                                <div key={index} className="text-center">
                                    <p className="font-medium text-gray-800">{engagement.role}</p>
                                    <p className="text-sm text-gray-600">{engagement.organization}</p>
                                    <p className="text-sm text-gray-500">{engagement.period}</p>
                                    <ul className="mt-2 space-y-1 flex flex-col items-center">
                                        {engagement.achievements.map((achievement, i) => (
                                            <li key={i} className="text-sm text-gray-600 relative pl-4">
                                                <span className="absolute left-0 top-2 w-2 h-2 bg-gray-400 rounded-full"></span>
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardWrapper>
            )}

            {/* Contact Form */}
            <CardWrapper className="w-full">
                <div className="flex flex-col items-center justify-center h-full">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2 w-full text-center">
                        Get In Touch
                    </h3>
                    <ContactForm />
                </div>
            </CardWrapper>
        </div>
    );
};

export default AboutSection;