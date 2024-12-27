import { Github, Globe, ExternalLink } from 'lucide-react';
import CardWrapper from '../shared/CardWrapper';
import { projects } from '../../data/projects';

const ProjectsSection = () => {
    return (
        <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <CardWrapper key={index} className="hover:border-gray-300 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-mono font-bold">{project.title}</h3>
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                                {project.status}
                            </span>
                        </div>
                        <p className="text-gray-600 mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech, i) => (
                                <span key={i} className="text-xs px-2 py-1 bg-gray-50 rounded-md">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        {/* Project Links */}
                        <div className="flex gap-4 mt-4 pt-4 border-t border-gray-100">
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer"
                                   className="text-gray-600 hover:text-blue-600">
                                    <Github className="w-5 h-5" />
                                </a>
                            )}
                            {project.demo && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer"
                                   className="text-gray-600 hover:text-blue-600">
                                    <Globe className="w-5 h-5" />
                                </a>
                            )}
                            {project.details && (
                                <a href={project.details} target="_blank" rel="noopener noreferrer"
                                   className="text-gray-600 hover:text-blue-600 flex items-center gap-1">
                                    <span>View Details</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            )}
                        </div>
                    </CardWrapper>
                ))}
            </div>
        </div>
    );
};

export default ProjectsSection;