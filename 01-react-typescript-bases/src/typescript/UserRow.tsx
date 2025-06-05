import type { User } from "../interfaces/reqres.response";

interface IUserRowProps {
  user: User;
}

export const UserRow = ({ user }: IUserRowProps) => {
  return (
    <tr>
      <td className="border px-4 py-2">
        <img src={user?.avatar} alt={user?.first_name} />
      </td>
      <td className="border px-4 py-2">
        {user?.first_name} {user?.last_name}
      </td>
      <td className="border px-4 py-2">{user?.email}</td>
    </tr>
  );
};
