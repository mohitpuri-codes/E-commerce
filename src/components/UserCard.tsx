import type { User } from "../types/UsersTypes";

interface UserCardProps {
  user: User;
}

function UserCard({ user }: UserCardProps) {
  const price = user.mobileNumber;

  return (
    <>
      <img
        className="w-full h-auto rounded mb-3"
        src="https://picsum.photos/200"
        alt="product image"
      />
      <p className="font-bold text-lg mb-1.5">{user.username}</p>
      <p className="text-sm text-gray-600 leading-snug">{user.email}</p>
      <p className="text-sm text-gray-600 leading-snug">
        ₹ {price.slice(0, 4)}
      </p>
    </>
  );
}

export default UserCard;
