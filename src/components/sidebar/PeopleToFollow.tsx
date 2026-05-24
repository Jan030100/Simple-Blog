import UserCard from "./UserCard";
import { Card } from "../shared/UIComponents";
import { MOCK_PEOPLE_TO_FOLLOW } from "../../constants/mockData";
import { useState } from "react";

const PeopleToFollow = () => {
  const [people, setPeople] = useState(MOCK_PEOPLE_TO_FOLLOW);

  const handleFollowToggle = (id: string) => {
    setPeople((prevPeople) =>
      prevPeople.map((person) =>
        person.id === id ? { ...person, following: !person.following } : person
      )
    );
  };

  return (
    <Card className="p-4">
      <h3 className="font-semibold text-lg mb-4 text-gray-800">
        People To Follow
      </h3>
      <div className="space-y-2">
        {people.map((person) => (
          <UserCard
            key={person.id}
            person={person}
            onFollowToggle={handleFollowToggle}
          />
        ))}
      </div>
    </Card>
  );
};

export default PeopleToFollow;
