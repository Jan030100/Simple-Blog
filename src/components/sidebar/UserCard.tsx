import { FaUserCircle } from "react-icons/fa";
import { Button } from "../shared/UIComponents";

interface UserCardProps {
  person: {
    id: string;
    name: string;
    following: boolean;
    avatar?: string;
  };
  onFollowToggle?: (id: string) => void;
}

const UserCard: React.FC<UserCardProps> = ({
  person,
  onFollowToggle,
}) => {
  return (
    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="flex items-center gap-3">
        <FaUserCircle className="text-2xl text-gray-400" />
        <span className="font-medium text-gray-800">{person.name}</span>
      </div>
      <Button
        size="sm"
        variant={person.following ? "secondary" : "outline"}
        onClick={() => onFollowToggle?.(person.id)}
      >
        {person.following ? "Following" : "Follow"}
      </Button>
    </div>
  );
};

export default UserCard;
