import Nav from "./components/shared/Nav";
import PeopleToFollow from "./components/sidebar/PeopleToFollow";
import TrendsList from "./components/sidebar/TrendsList";
import TopicList from "./components/sidebar/TopicList";
import { BlogProvider } from "./shared/BlogContext";
import { IoMdAddCircle } from "react-icons/io";
import { useState } from "react";
import type { Blog } from "./types";
import Modal from "./components/shared/Modal";
import BlogForm from "./components/blog/BlogForm";
import ArticleList from "./components/blog/ArticleList";
import { Button } from "./components/shared/UIComponents";

const AppContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  const openModalForNewBlog = () => {
    setEditingBlog(null);
    setIsModalOpen(true);
  };

  const openModalForEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingBlog(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <div className="flex gap-6 max-w-7xl mx-auto py-6 px-4">
        <main className="flex-1">
          <div className="mb-6">
            <Button
              onClick={openModalForNewBlog}
              className="flex items-center gap-2"
            >
              <IoMdAddCircle className="text-lg" />
              Add New Blog
            </Button>
          </div>

          <ArticleList onEdit={openModalForEdit} />
        </main>

        <aside className="w-72 hidden lg:block">
          <PeopleToFollow />
          <TrendsList />
          <TopicList />
        </aside>
      </div>

      {isModalOpen && (
        <Modal
          onClose={closeModal}
          title={editingBlog ? "Edit Blog" : "Create New Blog"}
        >
          <BlogForm existingBlog={editingBlog} onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
};

const App = () => {
  return (
    <BlogProvider>
      <AppContent />
    </BlogProvider>
  );
};

export default App;
