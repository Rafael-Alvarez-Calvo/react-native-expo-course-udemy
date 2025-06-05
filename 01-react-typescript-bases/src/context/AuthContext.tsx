import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

export const AuthStatus = {
  checking: "checking",
  authenticated: "authenticated",
  not_authenticated: "not-authenticated",
} as const;

interface IUser {
  name: string;
  email: string;
  psw: string;
}

interface IAuthContext {
  status: (typeof AuthStatus)[keyof typeof AuthStatus];
  token?: string;
  user?: IUser;
  isChecking: boolean;
  isAuthenticated: boolean;

  login: (email: string, psw: string) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as IAuthContext);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState<IAuthContext["status"]>(
    AuthStatus.checking
  );

  const [user, setUser] = useState<IUser | undefined>(undefined);

  useEffect(() => {
    setTimeout(() => {
      setStatus(AuthStatus.not_authenticated);
    }, 1500);
  }, []);

  const login = (email: string, psw: string) => {
    setUser({
      name: "John Doe",
      email: email,
      psw: psw,
    });

    setStatus(AuthStatus.authenticated);
  };

  const logout = () => {
    setUser(undefined);
    setStatus(AuthStatus.not_authenticated);
  };

  return (
    <AuthContext.Provider
      value={{
        status: status,
        user: user,

        isChecking: status === AuthStatus.checking,
        isAuthenticated: status === AuthStatus.authenticated,

        login: login,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
