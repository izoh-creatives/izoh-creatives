import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <div className="w-[95%] xs-w-full flex flex-col items-start space-y-2.5 rounded-xl group hover:scale-[101%] smooth-animation">
      {/* Image */}
      {project.link != null ? (
        <Link href={project.link}>
          <Image
            src={project.image}
            alt={project.title}
            className="w-full lg:w-full h-80 xs:h-75 md:h-80 lg:h-87.5 object-cover rounded-xl glassmorphic"
          />
        </Link>
      ) : (
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-80 xs:h-75 md:h-80 lg:h-87.5 object-cover rounded-xl  glassmorphic"
        />
      )}
      {/* Content */}
      <p className="text-xxs xl:text-xs line-clamp-1 text-ellipsis group-hover:text-red-500">
        {project.title}
      </p>
    </div>
  );
};

export default ProjectCard;
