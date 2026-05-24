import { Card } from "../shared/UIComponents";
import { MOCK_TRENDS } from "../../constants/mockData";

const TrendsList = () => {
  return (
    <Card className="p-4 mt-6">
      <h3 className="font-semibold text-lg mb-4 text-gray-800">
        Today's Top Trends
      </h3>
      <ul className="space-y-4">
        {MOCK_TRENDS.map((trend) => (
          <li
            key={trend.id}
            className="flex flex-col pb-3 border-b last:border-b-0 hover:bg-gray-50 p-2 rounded cursor-pointer transition-colors"
          >
            <span className="font-medium text-gray-800 text-sm">
              {trend.title}
            </span>
            <span className="text-xs text-gray-500">By {trend.author}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default TrendsList;
