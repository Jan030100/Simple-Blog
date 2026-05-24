import { STORAGE_KEYS } from "../constants/index";
import type { Blog } from "../types";

export const storageUtils = {
  saveBlogs: (blogs: Blog[]): void => {
    try {
      localStorage.setItem(STORAGE_KEYS.BLOGS, JSON.stringify(blogs));
    } catch (error) {
      console.error("Failed to save blogs to localStorage:", error);
    }
  },

  getBlogs: (): Blog[] => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.BLOGS);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Failed to retrieve blogs from localStorage:", error);
      return [];
    }
  },

  clearBlogs: (): void => {
    try {
      localStorage.removeItem(STORAGE_KEYS.BLOGS);
    } catch (error) {
      console.error("Failed to clear blogs from localStorage:", error);
    }
  },
};
