import CardWrapper from '../shared/CardWrapper';
import ContactForm from '../shared/ContactForm';
import { Mic } from 'lucide-react';
import { aboutData } from '../../data/about';
import { skills } from '../../data/skills';

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
                key: 'innovationEcosystemParticipation',
                title: 'Innovation Ecosystem Participation',
                existsCheck: () => aboutData.innovationEcosystemParticipation && aboutData.innovationEcosystemParticipation.length > 0,
                render: () => (
                    <CardWrapper className="w-full">
                        <div className="flex flex-col items-center justify-center h-full">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2 w-full text-center">
                                Innovation Ecosystem Participation
                            </h3>
                            <div className="w-full space-y-6">
                                {aboutData.innovationEcosystemParticipation?.map((program, index) => (
                                    <div key={index} className="border-b pb-4 last:border-b-0 text-center">
                                        <div className="flex flex-col items-center">
                                            <div className="mb-2">
                                                <h4 className="font-medium text-gray-800">{program.name}</h4>
                                                <p className="text-sm text-gray-600">{program.period} | {program.organizer}</p>
                                                {program.type && (
                                                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full mr-2">
                                                        {program.type}
                                                    </span>
                                                )}
                                            </div>
                                            <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full mb-2">
                                                {program.achievement}
                                            </span>
                                        </div>
                                        <div className="mt-2">
                                            {program.projectName && <p className="text-sm font-medium text-gray-700">{program.projectName}</p>}
                                            <p className="text-sm text-gray-600 mt-1">{program.description}</p>
                                        </div>
                                        {program.technologies && program.technologies.length > 0 && program.technologies[0] && (
                                            <div className="mt-2 flex flex-wrap gap-2 justify-center">
                                                {program.technologies.map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        {program.moreInfoLink && (
                                            <a
                                                href={program.moreInfoLink}
                                                className="mt-2 inline-block text-sm text-blue-600 hover:text-blue-800 transition-colors"
                                            >
                                                Program Details
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
            {/* Technical Talks and Articles */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Technical Talks */}
                <CardWrapper className="w-full">
                    <div className="flex flex-col items-center text-center space-y-6">
                        <div className="flex flex-col items-center space-y-2">
                            <Mic className="w-6 h-6 text-gray-500" />
                            <h3 className="text-lg font-medium text-gray-800">Technical Talks</h3>
                        </div>
                        <ul className="space-y-4 w-full">
                            {skills.talks.map((talk, index) => (
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
                </CardWrapper>

                {/* Articles and Links */}
                <CardWrapper className="w-full">
                    <div className="flex flex-col items-center text-center space-y-6">
                        <h3 className="text-lg font-medium text-gray-800">Articles & Links</h3>

                        <div className="space-y-4 w-full">
                            {/* Technical Articles */}
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-medium text-gray-800 mb-3">Technical Articles</h4>
                                <a
                                    href="https://okonu.hashnode.dev/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-center gap-2"
                                >
                                    My Hashnode Blog
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4v5h5M5 5l5 5m0 0h5V5m-5 5L5 5" />
                                    </svg>
                                </a>
                            </div>

                            {/* Hobby Articles */}
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-medium text-gray-800 mb-3">Hobby Articles</h4>
                                <a
                                    href="https://medium.com/@theweirdo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm flex items-center justify-center gap-2"
                                >
                                    My Medium Blog
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4v5h5M5 5l5 5m0 0h5V5m-5 5L5 5" />
                                    </svg>
                                </a>
                            </div>

                            {/* Social Links */}
                            <div className="p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-medium text-gray-800 mb-3">Connect</h4>
                                <div className="flex items-center justify-center gap-4">
                                    {/* GitHub */}
                                    <a
                                        href="https://github.com/okonu"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-blue-600 transition-colors"
                                        title="GitHub"
                                    >
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>

                                    {/* LinkedIn */}
                                    <a
                                        href="https://linkedin.com/in/ian-okonu"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-blue-600 transition-colors"
                                        title="LinkedIn"
                                    >
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>

                                    {/* Twitter */}
                                    <a
                                        href="https://x.com/okonu_ian"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-blue-600 transition-colors"
                                        title="Twitter"
                                    >
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardWrapper>
            </div>

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