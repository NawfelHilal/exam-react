import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchUser } from "../../../services/api/jsonplaceholder/users";
import User from "../../../models/User";
import { isValidId } from "../../../utils/valiators";
import UserCard from "../../../components/UserCard";

const PostOwnerPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      if (!isValidId(userId)) {
        setError(true);
        return;
      }
  
      try {
        const fetchedUser = await fetchUser(userId as string);
        setUser(fetchedUser);
      } catch {
        setError(true);
      }
    };
  
    loadUser();
  }, [userId]);

  if (error) {
    return <Navigate replace to="not-found" />;
  }

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
        <UserCard name={user.name} username={user.username} email={user.email} />
    </div>
  );
};

export default PostOwnerPage;
