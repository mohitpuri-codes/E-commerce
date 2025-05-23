interface UserCardProps {
  username: string;
  email: string;
  price: string;
}

function UserCard({ email, username, price }: UserCardProps) {
  return (
    <>
      <p className="font-bold text-lg mb-1.5">{username}</p>
      <p className="text-sm text-gray-600 leading-snug">{email}</p>
      <p className="text-sm text-gray-600 leading-snug">
        ₹ {price.slice(0, 4)}
      </p>
    </>
  );
}

export default UserCard;
