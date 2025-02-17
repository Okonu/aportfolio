import { Github, Globe, Link as LinkIcon } from 'lucide-react';
import { projects } from '../../data/projects';

const ProjectsSection = () => {
    return (
        <div className="py-16 max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 inline-block border-b-2 border-gray-800 pb-2">
                    Selected Projects
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="
                            bg-white
                            border border-gray-100
                            rounded-lg
                            shadow-sm
                            hover:shadow-md
                            transition-shadow
                            duration-300
                            p-6
                            space-y-4
                        "
                    >
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-medium text-gray-800">
                                {project.title}
                            </h3>
                            {project.status && (
                                <span className="
                                    text-xs
                                    px-2
                                    py-1
                                    rounded-full
                                    bg-gray-100
                                    text-gray-600
                                ">
                                    {project.status}
                                </span>
                            )}
                        </div>

                        <p className="text-gray-600 text-sm">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, i) => (
                                <span
                                    key={i}
                                    className="
                                        text-xs
                                        px-2
                                        py-1
                                        bg-gray-50
                                        text-gray-600
                                        rounded-full
                                    "
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center justify-start gap-4 pt-4 border-t border-gray-100">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        text-gray-500
                                        hover:text-gray-800
                                        transition-colors
                                        flex items-center gap-2
                                    "
                                >
                                    <Github className="w-5 h-5" />
                                    <span className="text-sm">GitHub</span>
                                </a>
                            )}

                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        text-gray-500
                                        hover:text-gray-800
                                        transition-colors
                                        flex items-center gap-2
                                    "
                                >
                                    <Globe className="w-5 h-5" />
                                    <span className="text-sm">Live Demo</span>
                                </a>
                            )}

                            {project.details && (
                                <a
                                    href={project.details}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        text-gray-500
                                        hover:text-gray-800
                                        transition-colors
                                        flex items-center gap-2
                                    "
                                >
                                    <LinkIcon className="w-5 h-5" />
                                    <span className="text-sm">Details</span>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsSection;