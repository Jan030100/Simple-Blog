import { useState } from "react";
import { useBlogs } from "../../shared/BlogContext";
import { useBlogSearch } from "../../hooks";
import ArticleCard from "./ArticleCard";
import type { Blog } from "../../types";
import { SearchInput } from "../shared/FormComponents";
import { PLACEHOLDERS } from "../../constants";

interface ArticleListProps {
  onEdit: (blog: Blog) => void;
}

const ArticleList: React.FC<ArticleListProps> = ({ onEdit }) => {
  const { blogs, deleteBlog } = useBlogs();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = useBlogSearch(blogs, searchTerm);

  if (blogs.length === 0) {
    return (
      <div className="ml-[5rem]">
        <SearchInput
          placeholder={PLACEHOLDERS.SEARCH}
          onSearchChange={setSearchTerm}
        />
        <div className="mt-12 text-center text-gray-500">
          <p className="text-lg font-medium">No blogs yet</p>
          <p className="text-sm">Start by creating your first blog post</p>
        </div>
      </div>
    );
  }

  return (
    <div className="ml-[5rem]">
      <SearchInput
        placeholder={PLACEHOLDERS.SEARCH}
        onSearchChange={setSearchTerm}
      />

      {filteredBlogs.length === 0 ? (
        <div className="mt-8 text-center text-gray-500">
          <p>No blogs found matching "{searchTerm}"</p>
        </div>
      ) : (
        <div>
          {filteredBlogs.map((blog) => (
            <ArticleCard
              key={blog.id}
              article={blog}
              onDelete={() => deleteBlog(blog.id)}
              onEdit={() => onEdit(blog)}
            />
          ))}
        </div>
      )}

      {filteredBlogs.length > 0 && (
        <div className="mt-6 text-center text-sm text-gray-500">
          Showing {filteredBlogs.length} of {blogs.length} blogs
        </div>
      )}
    </div>
  );
};

export default ArticleList;
