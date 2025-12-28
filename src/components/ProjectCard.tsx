import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Tag from "./Tag";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    imageSrc: string;
    liveLink?: string;
    githubLink: string;
    tags: string[];
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div
      className="
    bg-milk border-2 border-gray-blue p-6
    flex flex-col-reverse md:flex-row gap-6
    w-full max-w-[320px]
    xs:max-w-[450px]
    sm:max-w-[600px]
    md:max-w-[700px]
    lg:max-w-[1000px]
    rounded-md shadow-md
  "
    >
      <div className="w-full max-w-[300px] h-[150px] xs:max-w-[350px] xs:h-[200px] relative shrink-0">
        <img
          src={project.imageSrc}
          alt={project.title}
          className="object-cover rounded-md border-2 border-[#d1d1c8] absolute inset-0 w-full h-full"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <p className="font-semibold text-xl">{project.title}</p>
          <div className="flex gap-4">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink
                  className="cursor-pointer transition ease-in-out duration-300 hover:scale-105 hover:text-orange-500"
                  size={25}
                />
              </a>
            )}
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className="cursor-pointer transition ease-in-out duration-300 hover:scale-105 hover:text-orange-500"
                size={25}
              />
            </a>
          </div>
        </div>
        <p className="text-gray-600">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
