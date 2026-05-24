import { Card } from "../shared/UIComponents";
import { MOCK_TOPICS } from "../../constants/mockData";
import { useState } from "react";

const TopicList = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  return (
    <Card className="p-4 mt-6">
      <h3 className="font-semibold text-lg mb-4 text-gray-800">
        Topics For You
      </h3>
      <div className="flex flex-wrap gap-2">
        {MOCK_TOPICS.map((topic) => (
          <button
            key={topic.id}
            onClick={() =>
              setSelectedTopic(
                selectedTopic === topic.id ? null : topic.id
              )
            }
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              selectedTopic === topic.id
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {topic.name}
          </button>
        ))}
      </div>
    </Card>
  );
};

export default TopicList;
