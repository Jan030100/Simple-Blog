import { createContext, useState, useContext, useEffect } from "react";
import type { Blog } from "../types";
import { storageUtils } from "../utils/storage";

interface BlogContextType {
  blogs: Blog[];
  addBlog: (blog: Blog) => void;
  updateBlog: (blog: Blog) => void;
  deleteBlog: (id: number) => void;
  loading: boolean;
  error: string | null;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load blogs from localStorage on mount
  useEffect(() => {
    try {
      const savedBlogs = storageUtils.getBlogs();
      setBlogs(savedBlogs);
      setError(null);
    } catch (err) {
      setError("Failed to load blogs");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const addBlog = (blog: Blog) => {
    try {
      const newBlogs = [...blogs, blog];
      setBlogs(newBlogs);
      storageUtils.saveBlogs(newBlogs);
      setError(null);
    } catch (err) {
      setError("Failed to add blog");
      console.error(err);
    }
  };

  const updateBlog = (updatedBlog: Blog) => {
    try {
      const newBlogs = blogs.map((blog) =>
        blog.id === updatedBlog.id ? updatedBlog : blog
      );
      setBlogs(newBlogs);
      storageUtils.saveBlogs(newBlogs);
      setError(null);
    } catch (err) {
      setError("Failed to update blog");
      console.error(err);
    }
  };

  const deleteBlog = (id: number) => {
    try {
      const newBlogs = blogs.filter((blog) => blog.id !== id);
      setBlogs(newBlogs);
      storageUtils.saveBlogs(newBlogs);
      setError(null);
    } catch (err) {
      setError("Failed to delete blog");
      console.error(err);
    }
  };

  return (
    <BlogContext.Provider
      value={{ blogs, addBlog, updateBlog, deleteBlog, loading, error }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogs = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlogs must be used within a BlogProvider");
  }
  return context;
};