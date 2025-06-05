import { useAuthContext } from "../context/AuthContext";
import { UserPage } from "./UserPage";

export const LoginPage = () => {
  const { isChecking, isAuthenticated, login, logout } = useAuthContext();

  return (
    <div className="mt-4 text-center">
      <h2 className="text-2xl mb-4">Login Page</h2>
      {isChecking && (
        <h3 className="text-blue-500">Checking authentication...</h3>
      )}

      {isAuthenticated && (
        <>
          <h3 className="text-green-500">Welcome!</h3>
          <UserPage />
          <button
            onClick={() => logout()}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Log Out
          </button>
        </>
      )}

      {!isAuthenticated && !isChecking && (
        <>
          <h3 className="text-red-500">You are not authenticated!</h3>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            onClick={() => login("test@example.com", "12345")}
          >
            Log In
          </button>
        </>
      )}
    </div>
  );
};
