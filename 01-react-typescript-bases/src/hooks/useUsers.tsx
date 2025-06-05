import { useEffect, useRef, useState } from "react";
import type { User } from "../interfaces/reqres.response";
import { getUsers } from "../actions/getUsers.action";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const currentPageRef = useRef(1);

  useEffect(() => {
    getUsers(currentPageRef.current).then((users) => {
      setUsers(users);
    });
  }, []);

  const nextPage = async () => {
    currentPageRef.current += 1;
    const users = await getUsers(currentPageRef.current);
    setUsers(users);
  };

  const previousPage = async () => {
    currentPageRef.current -= 1;
    if (currentPageRef.current < 1) {
      currentPageRef.current = 1; // Prevent going to a negative page
      return;
    }
    const users = await getUsers(currentPageRef.current);
    setUsers(users);
  };

  return {
    users,
    nextPage,
    previousPage,
  };
};
