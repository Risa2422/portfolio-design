const BlogCard = ({ imageSrc, title, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-[200px] md:h-[220px] px-4 rounded-md cursor-pointer hover:opacity-80 transition"
    >
      <img
        src={imageSrc}
        alt="blog info"
        className="h-2/3  w-full object-cover rounded-md"
      />
      <h4 className="mt-2 font-medium">{title}</h4>
    </a>
  );
};

export default BlogCard;
