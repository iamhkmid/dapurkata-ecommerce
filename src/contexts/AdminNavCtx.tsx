import { createContext, FC, ReactNode, useEffect, useReducer } from "react";
import { useWindowSize } from "react-use";
import { reducer, initialValue } from "../reducer/adminNav";
import { TAdminNavCtx } from "../types/context";

export const AdminContext = createContext<TAdminNavCtx | undefined>(undefined);

const AdminContextProvider: FC<ReactNode> = ({ children }) => {
  // sidebar open state
  const [adminNav, dispatch] = useReducer(reducer, initialValue);

  // sidebar auto resize
  const { width } = useWindowSize();
  useEffect(() => {
    width > 960 && dispatch({ type: "OPEN_SIDEBAR" });
    width <= 960 && dispatch({ type: "CLOSE_SIDEBAR" });
  }, [width]);

  return (
    <AdminContext.Provider value={{ adminNav, dispatch }}>
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
