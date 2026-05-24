import { useState, useCallback, useEffect } from "react";
import type { Blog } from "../types";
import { storageUtils } from "../utils/storage";

export const useBlogSearch = (blogs: Blog[], searchTerm: string) => {
  return blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const useBlogFilter = (blogs: Blog[], category?: string) => {
  if (!category) return blogs;
  return blogs.filter((blog) => blog.category === category);
};

export const useBlogManager = () => {
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

  const addBlog = useCallback((blog: Blog) => {
    try {
      setBlogs((prevBlogs) => {
        const newBlogs = [...prevBlogs, blog];
        storageUtils.saveBlogs(newBlogs);
        return newBlogs;
      });
      setError(null);
    } catch (err) {
      setError("Failed to add blog");
      console.error(err);
    }
  }, []);

  const updateBlog = useCallback((updatedBlog: Blog) => {
    try {
      setBlogs((prevBlogs) => {
        const newBlogs = prevBlogs.map((blog) =>
          blog.id === updatedBlog.id ? updatedBlog : blog
        );
        storageUtils.saveBlogs(newBlogs);
        return newBlogs;
      });
      setError(null);
    } catch (err) {
      setError("Failed to update blog");
      console.error(err);
    }
  }, []);

  const deleteBlog = useCallback((id: number) => {
    try {
      setBlogs((prevBlogs) => {
        const newBlogs = prevBlogs.filter((blog) => blog.id !== id);
        storageUtils.saveBlogs(newBlogs);
        return newBlogs;
      });
      setError(null);
    } catch (err) {
      setError("Failed to delete blog");
      console.error(err);
    }
  }, []);

  return {
    blogs,
    loading,
    error,
    addBlog,
    updateBlog,
    deleteBlog,
    setError,
  };
};
