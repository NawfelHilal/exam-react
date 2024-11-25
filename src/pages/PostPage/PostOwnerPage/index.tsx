import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchUser } from "../../../services/api/jsonplaceholder/users";
import User from "../../../models/User";

const PostOwnerPage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      if (!userId || !Number.isInteger(Number(userId)) || Number(userId) <= 0) {
        setError(true);
        return;
      }

      try {
        const fetchedUser = await fetchUser(userId);
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
      <h2>{user.name}</h2>
      <p>{user.username}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default PostOwnerPage;
