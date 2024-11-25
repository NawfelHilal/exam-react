type UserCardProps = {
    name: string;
    username: string;
    email: string;
  };
  
  const UserCard = ({ name, username, email }: UserCardProps) => {
    return (
      <div>
        <h2>{name}</h2>
        <p>{username}</p>
        <p>{email}</p>
      </div>
    );
  };
  
  export default UserCard;
  