import { useState, useEffect } from "react";
import { useBlogs } from "../../shared/BlogContext";
import type { Blog } from "../../types";
import { Button } from "../shared/UIComponents";
import { Input } from "../shared/FormComponents";
import { validateBlog } from "../../utils/validation";
import { PLACEHOLDERS } from "../../constants";

interface BlogFormProps {
  existingBlog?: Blog | null;
  onClose: () => void;
}

const BlogForm: React.FC<BlogFormProps> = ({ existingBlog, onClose }) => {
  const { addBlog, updateBlog } = useBlogs();
  const [title, setTitle] = useState(existingBlog?.title || "");
  const [description, setDescription] = useState(
    existingBlog?.description || ""
  );
  const [image, setImage] = useState(existingBlog?.image || "");
  const [time, setTime] = useState(existingBlog?.time || "");
  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (existingBlog) {
      setTitle(existingBlog.title);
      setDescription(existingBlog.description);
      setImage(existingBlog.image);
      setTime(existingBlog.time);
    }
  }, [existingBlog]);

  const handleSubmit = async () => {
    const blog: Partial<Blog> = {
      title,
      description,
      image,
      time,
    };

    const validationErrors = validateBlog(blog);
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors([]);

    try {
      const newBlog: Blog = {
        id: existingBlog ? existingBlog.id : Date.now(),
        title,
        description,
        image,
        time,
      };

      if (existingBlog) {
        updateBlog(newBlog);
      } else {
        addBlog(newBlog);
      }

      onClose();
    } catch (error) {
      setErrors(["Failed to save blog. Please try again."]);
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-4">
      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <ul className="text-red-700 text-sm space-y-1">
            {errors.map((error, idx) => (
              <li key={idx}>• {error}</li>
            ))}
          </ul>
        </div>
      )}

      <Input
        type="text"
        placeholder={PLACEHOLDERS.BLOG_TITLE}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder={PLACEHOLDERS.BLOG_DESCRIPTION}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black resize-none h-32"
      />

      <Input
        type="url"
        placeholder={PLACEHOLDERS.BLOG_IMAGE_URL}
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Input
        type="date"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <div className="flex justify-end gap-3 pt-4">
        <Button
          variant="outline"
          onClick={onClose}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Saving..."
            : existingBlog
              ? "Update Blog"
              : "Add Blog"}
        </Button>
      </div>
    </div>
  );
};

export default BlogForm;
