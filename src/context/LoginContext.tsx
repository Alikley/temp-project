import React, { createContext, useReducer } from "react";

interface UserLog {
  isLogin: boolean;
  login: () => void;
  logout: () => void;
}

type Action = { type: "login" } | { type: "logout" };

function reducer(state: boolean, action: Action): boolean {
  switch (action.type) {
    case "login":
      return true;
    case "logout":
      return false;
    default:
      throw new Error();
  }
}

export const LoginContext = createContext({
  isLogin: false,
  login: () => {},
  logout: () => {},
});

function LoginProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, false);

  const userLog: UserLog = {
    isLogin: state,
    login: () => dispatch({ type: "login" }),
    logout: () => dispatch({ type: "logout" }),
  };

  return (
    <LoginContext.Provider value={userLog}>

      {children}
    </LoginContext.Provider>
    
  );
}

export default LoginProvider;