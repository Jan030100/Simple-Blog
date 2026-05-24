import type { Blog } from "../types";

export const validateBlog = (blog: Partial<Blog>): string[] => {
  const errors: string[] = [];

  if (!blog.title || blog.title.trim() === "") {
    errors.push("Title is required");
  } else if (blog.title.length < 3) {
    errors.push("Title must be at least 3 characters");
  } else if (blog.title.length > 100) {
    errors.push("Title must not exceed 100 characters");
  }

  if (!blog.description || blog.description.trim() === "") {
    errors.push("Description is required");
  } else if (blog.description.length < 10) {
    errors.push("Description must be at least 10 characters");
  }

  if (!blog.image || blog.image.trim() === "") {
    errors.push("Image URL is required");
  } else if (!isValidUrl(blog.image)) {
    errors.push("Image URL must be valid");
  }

  if (!blog.time) {
    errors.push("Date is required");
  }

  return errors;
};

const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
};
