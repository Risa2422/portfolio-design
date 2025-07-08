const BlogCard = ({ imageSrc, title, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 cursor-pointer hover:opacity-80 transition"
    >
      <img
        src={imageSrc}
        alt="blog info"
        className="w-full object-cover border border-gray-400"
      />
      <h4 className="mt-2 font-medium">{title}</h4>
    </a>
  );
};

export default BlogCard;
