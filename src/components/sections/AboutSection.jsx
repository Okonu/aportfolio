import CardWrapper from '../shared/CardWrapper';
import ContactForm from '../shared/ContactForm';
import { Award, Users, BookOpen, Trophy } from 'lucide-react';
import { aboutData } from '../../data/about';

const AboutSection = () => {
    return (
        <div className="p-6 space-y-8">
            <p className="text-gray-600">
                {aboutData.bio}
            </p>

            <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                    <CardWrapper>
                        <h3 className="font-mono font-bold mb-4">Education</h3>
                        {aboutData.education.map((edu, index) => (
                            <div key={index} className="space-y-2">
                                <div className="flex justify-between">
                                    <div>
                                        <p className="font-medium">{edu.degree}</p>
                                        <p className="text-sm text-gray-600">{edu.school}</p>
                                    </div>
                                    <span className="text-sm text-gray-500">{edu.period}</span>
                                </div>
                                {edu.details && <p className="text-sm text-gray-500">{edu.details}</p>}
                            </div>
                        ))}
                    </CardWrapper>

                    <CardWrapper>
                        <h3 className="font-mono font-bold mb-4">Languages</h3>
                        <div className="space-y-2">
                            {aboutData.languages.map((lang, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <span className="text-gray-600">{lang.language}</span>
                                    <span className="text-sm text-gray-500">{lang.level}</span>
                                </div>
                            ))}
                        </div>
                    </CardWrapper>
                </div>

                <div className="space-y-6">
                    <CardWrapper>
                        <h3 className="font-mono font-bold mb-4">Certifications & Licenses</h3>
                        <div className="space-y-4">
                            {aboutData.certifications.map((cert, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <Award className="w-4 h-4 mt-1 text-gray-400 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium">{cert.title}</p>
                                        <p className="text-sm text-gray-500">{cert.issuer}, {cert.year}</p>
                                    </div>
                                </div>
                            ))}
                            {aboutData.licenses.map((license, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <Trophy className="w-4 h-4 mt-1 text-gray-400 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium">{license.title}</p>
                                        <p className="text-sm text-gray-500">{license.issuer}, {license.year}</p>
                                        <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                      {license.status}
                    </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardWrapper>

                    <CardWrapper>
                        <h3 className="font-mono font-bold mb-4">Courses</h3>
                        <div className="space-y-3">
                            {aboutData.courses.map((course, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <BookOpen className="w-4 h-4 mt-1 text-gray-400 flex-shrink-0" />
                                    <div>
                                        <p className="font-medium">{course.title}</p>
                                        <p className="text-sm text-gray-500">{course.issuer}, {course.year}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardWrapper>
                </div>
            </div>

            <CardWrapper>
                <h3 className="font-mono font-bold mb-4">Community Engagements</h3>
                <div className="space-y-6">
                    {aboutData.communityEngagements.map((engagement, index) => (
                        <div key={index} className="flex items-start space-x-3">
                            <Users className="w-4 h-4 mt-1 text-gray-400 flex-shrink-0" />
                            <div>
                                <p className="font-medium">{engagement.role}</p>
                                <p className="text-sm text-gray-600">{engagement.organization}</p>
                                <p className="text-sm text-gray-500">{engagement.period}</p>
                                <ul className="mt-2 space-y-1">
                                    {engagement.achievements.map((achievement, i) => (
                                        <li key={i} className="text-sm text-gray-600">• {achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </CardWrapper>

            <CardWrapper>
                <h3 className="font-mono font-bold mb-4">Get In Touch</h3>
                <ContactForm />
            </CardWrapper>
        </div>
    );
};

export default AboutSection;