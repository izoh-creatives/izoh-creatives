import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <div className="w-full flex flex-col items-start space-y-2.5 rounded-xl group hover:scale-[101%] smooth-animation">
      {/* Image */}
      {project.link != null && project.link != "" ? (
        <Link href={project.link}>
          <Image
            src={project.image}
            alt={project.title}
            className="lg:w-full h-95 lg:h-87.5 object-cover rounded-xl glassmorphic"
          />
        </Link>
      ) : (
        <Image
          src={project.image}
          alt={project.category}
          className="h-90 object-cover rounded-xl lg:w-full  lg:h-87.5 glassmorphic"
        />
      )}
      {/* Content */}
      <p className="text-xs line-clamp-1 text-ellipsis group-hover:text-red-500">
        {project.title}
      </p>
    </div>
  );
};

export default ProjectCard;
