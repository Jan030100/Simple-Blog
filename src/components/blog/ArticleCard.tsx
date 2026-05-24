import { FaBookmark, FaTrash, FaEdit } from "react-icons/fa";
import type { Blog } from "../../types";
import { Card } from "../shared/UIComponents";
import { formatDate } from "../../utils/validation";

interface ArticleCardProps {
  article: Blog;
  onDelete: () => void;
  onEdit: () => void;
  onLike?: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onDelete,
  onEdit,
  onLike,
}) => {
  return (
    <Card className="flex p-4 w-[40rem] mb-6 ml-[2rem] overflow-hidden">
      <img
        src={article.image}
        alt={article.title}
        className="w-36 h-24 object-cover rounded-lg shadow-md flex-shrink-0"
        onError={(e) => {
          e.currentTarget.src =
            "https://via.placeholder.com/150?text=No+Image";
        }}
      />

      <div className="ml-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-gray-700 flex-1 line-clamp-2">
          {article.description}
        </p>

        <div className="flex items-center justify-between mt-4 text-gray-600">
          <span className="text-xs text-gray-500">
            {formatDate(article.time)}
          </span>

          <div className="flex gap-2">
            <button
              onClick={onLike}
              className="p-2 text-gray-500 hover:text-red-500 transition-colors"
              title="Like"
            >
              <FaBookmark />
            </button>
            <button
              onClick={onEdit}
              className="p-2 text-blue-500 hover:text-blue-600 transition-colors"
              title="Edit"
            >
              <FaEdit />
            </button>
            <button
              onClick={onDelete}
              className="p-2 text-red-500 hover:text-red-600 transition-colors"
              title="Delete"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ArticleCard;
