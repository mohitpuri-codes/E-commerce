interface UserCardProps {
  username: string;
  email: string;
}

function UserCard({ email, username }: UserCardProps) {
  return (
    <>
      <p className="font-bold text-lg mb-1.5">{username}</p>
      <p className="text-sm text-gray-600 leading-snug">{email}</p>
    </>
  );
}

export default UserCard;
