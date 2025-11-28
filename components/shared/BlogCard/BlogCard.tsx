import Image from "next/image";
import Link from "next/link";
import { Blog } from "../../../base/data/blog-data";

export const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <Link
      href={`/blog/${blog.id}`}
      className="group mr-5 block max-w-[80%] shrink-0 md:max-w-[60%] lg:mr-10 lg:max-w-[40%]"
    >
      <div className="relative h-[150px] sm:h-[180px] lg:h-[300px]">
        <Image
          src={blog.image}
          fill
          className="object-cover grayscale transition duration-500 group-hover:grayscale-0"
          alt="Blog image"
        />
      </div>

      <div className="mt-3 flex space-x-2 font-lexend text-[10px] font-light uppercase lg:mt-4 lg:text-base">
        <p className="">{new Date(blog.createdAt).toDateString()}</p>
        <p className="">{blog.minutesRead}min red</p>
      </div>

      <div className="mt-2 lg:mt-4">
        <h3 className="font-oswald text-lg lg:text-3xl">{blog.title}</h3>
        <p className="mt-1 line-clamp-2 font-lexend text-sm font-light lg:mt-3 lg:text-base">
          {blog.content}
        </p>
      </div>
    </Link>
  );
};
